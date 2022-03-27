import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import imageToBase64 from 'image-to-base64/browser';
import { NotificationManager } from 'react-notifications';
import douLogo from '../../img/dou_logo.png';

// constants
const HEADER_HEIGHT = 25;
const ROW_HEIGHT = 20;
const HEADER_COLOR = '51586e';
const TOTALS_COLOR = 'b8b8b8';
const BORDERS = {
    normal: { style:'thin', color: { argb: TOTALS_COLOR }},
    light: { style:'thin', color: { argb: 'e0e0e0' }}
}
const ROW_FONT = { name: 'Calibri', size: 12 };
const HEADER_FONT = {
    ...ROW_FONT,
    color: { argb: 'ffffff' },
    bold: true
};

// create xlsx
export const createXlsx = async (state) => {
    const { tableData, includePayoff, includeTotal } = state;
    const { dates, amounts, totals, type, tableHeaders, amountsIsArray } = tableData;
    const { type: inputType, account, owner, address } = state;

    // // get image base64 logo
    const douLogoBase64 = await imageToBase64(douLogo);

    // get the years from the state keys
    // if state is not updated yet, use empty object
    const years = Object.keys(tableData.dates || {});

    // if the table state isn't updated, show notification to try again
    if (!years.length) {
        NotificationManager.success('Press again to download', 'Table created', 2000);
        return false;
    }

    // create workbook
    const workbook = new ExcelJS.Workbook();

    // for each year
    years.forEach(year => {
        // create worksheet
        const worksheet = workbook.addWorksheet(year, {
            properties:{ tabColor: { argb: HEADER_COLOR }},
            views: [{ showGridLines: false, activeCell: 50 }]
        });

        // center horizontally
        worksheet.pageSetup.horizontalCentered = true;

        // store current row
        let curRowNum = 1;

        // get data for rows
        const curDates = dates[year];
        const curType = type[year];
        const curAmounts = amounts[year];
        const curTotals = totals[year];

        // get tableHeaders
        // if NOT includePayoff, filter the entries
        const tableHeaderArray = includePayoff ?
            [ ...tableHeaders.th ] :
            [ ...tableHeaders.th ].filter(th => th != 'Payoff Amount' && th != 'Payoff Balance');

        // account info array
        // only include object if data is present
        const accountInputData = [
            ...(inputType ? [`${year} ${inputType}`] : []),
            ...(account ? [parseInt(account)] : []),
            ...(owner ? [owner] : []),
            ...(address ? [address] : [])
        ];

        // create header rows
        worksheet.getRow(curRowNum).values = tableHeaderArray;
        // set headers to bold and white
        worksheet.getRow(curRowNum).font = HEADER_FONT;
        worksheet.getRow(curRowNum).height = HEADER_HEIGHT;
        // change the fill color to blue
        worksheet.getRow(curRowNum).eachCell(cell => {
            worksheet.getCell(cell.address).fill = {
                type: 'pattern',
                pattern:'solid',
                fgColor:{ argb: HEADER_COLOR },
              };
        });
        curRowNum++;

        // create a 3D Array to hold the table data
        // each inside array will be a row
        let arrayOfArrays = [];
        // for each date in the dates array (each line)
        curDates.forEach((date, i) => {
            // create array to hold data for each row
            // each row starts with date and type
            let rowArray = [new Date(date),
                // only add the type if type exists
                ...(curType[i] ? [curType[i]] : [])
            ];
            // if the amount is an array, push each amount
            if (amountsIsArray) {
                includePayoff
                    ? curAmounts[i].forEach(amount => rowArray.push(
                        parseFloat(amount.split(',').join(''))))
                    // if NOT includePayoff, filter the last 2 entries
                    : curAmounts[i]
                        .filter((col, i) => i < 2)
                        .forEach(amount => rowArray.push(
                            parseFloat(amount.split(',').join(''))));
            // else, push the singular amount
            } else rowArray.push(
                parseFloat(curAmounts[i].split(',').join('')));

            // push the row to the overall data array
            arrayOfArrays.push(rowArray);
        });
        // if includeTotal is checked
        if (includeTotal) {
            // if the amounts data is an array
            if (amountsIsArray) {
                // if includePayoff is checked
                if (includePayoff) {
                    const totalValues = curTotals
                        .map(total => {
                            if (isNaN(total)) {
                                return total;
                            } else {
                                return parseFloat(total.split(',').join(''));
                            }
                        });
                    // push all of the totals
                    arrayOfArrays.push(['Total:', '', ...totalValues ]);
                } else {
                    // else filter the payoff columns out
                    const filteredTotals = curTotals
                        .filter((col, i) => i < 2)
                        .map(total => {
                            if (isNaN(total)) {
                                return total;
                            } else {
                                return parseFloat(total.split(',').join(''));
                            }
                        });
                    arrayOfArrays.push(['Totals:', '', ...filteredTotals ]);
                }
            // else, push the totals to the last column
            } else {
                arrayOfArrays.push([
                    'Totals:',
                    ...Array(tableHeaderArray.length - 2).fill(''),
                    parseFloat(curTotals.split(',').join(''))
                ]);
            }
        }
        // set the array data to the worksheet
        arrayOfArrays.forEach((array, i) => {
            // set the data for the row
            worksheet.getRow(curRowNum).height = ROW_HEIGHT;
            worksheet.getRow(curRowNum).font = ROW_FONT;
            worksheet.getRow(curRowNum).values = array;
            // set the border
            worksheet.getRow(curRowNum).eachCell((cell, colNumber) => {
                const isLastRow = i == arrayOfArrays.length - 1;
                cell.border = getBorderData(colNumber, tableHeaderArray.length, isLastRow);
            });
            // check when the number cells start
            const isNumber = arrayOfArrays[0].map(input => typeof input === 'number');
            const numberRowsStart = isNumber.indexOf(true) + 1;
            // set the format for the currency cells
            worksheet.getRow(curRowNum).eachCell((cell, colNumber) => {
                if (colNumber >= numberRowsStart && colNumber < tableHeaderArray.length + 2) {
                    worksheet.getCell(cell.address).numFmt = '"$"#,##0.00';
                }
              });
            curRowNum++;
        });

        // if include totals, set last row color and height
        if (includeTotal) {
            worksheet.lastRow.eachCell(cell => {
                worksheet.getCell(cell.address).fill = {
                    type: 'pattern',
                    pattern:'solid',
                    fgColor:{ argb: TOTALS_COLOR },
                  };
            });
            worksheet.lastRow.height = HEADER_HEIGHT;
        }

        // set column widths
        const columnWidths = getRowColumnWidths(tableHeaderArray, arrayOfArrays);
        columnWidths.forEach((width, i) => {
            worksheet.getColumn(i + 1).width = width;
        });

        // if base64 image success, format first row
        if (douLogoBase64) {
            const logo = workbook.addImage({
                base64: douLogoBase64,
                extension: 'png',
                });
            // add image to worksheet
            const logoDimensions = { width: 228, height: 85 };
            worksheet.addImage(logo, {
                tl: { col: tableHeaderArray.length + 0.75, row: 0.5 },
                ext: logoDimensions
                });
        }

        // if account data is entered, create rows with data
        if (accountInputData.length) {
            // set the row data
            accountInputData.forEach((data, i) => {
                const columnStart = tableHeaderArray.length + 1;
                const curRow = i + 5;
                worksheet.getRow(curRow).getCell(columnStart).value = data;
                // if first row, make it bold
                if (i === 0) {
                    worksheet.getRow(curRow).getCell(columnStart).style.font = {
                        ...ROW_FONT,
                        bold: true
                    };
                // else set the color to blue and bold
                } else {
                    worksheet.getRow(curRow).getCell(columnStart).style.font = {
                        ...ROW_FONT,
                        bold: true,
                        color: { argb: '8CA3BF' }
                    };
                }
                worksheet.getRow(curRow).height = ROW_HEIGHT;
                // merge cells (start row, start col, end row, end col)
                worksheet.mergeCells(curRow, columnStart, curRow, columnStart + 4);
            });
        }

        // align all rows center
        worksheet.eachRow((row, rowNumber) => {
            worksheet.getRow(rowNumber).alignment = {
                vertical: 'middle', horizontal: 'center'
            };
          });
    })

    // create and save the xlsx file
    const fileNameText = inputType ? inputType.replace(' ', '_') : 'financial_history';
    const buf = await workbook.xlsx.writeBuffer()
    saveAs(new Blob([buf]), `${state.account || 'past'}_${fileNameText}.xlsx`)
}

// return column widths based on the first row
function getRowColumnWidths(tableHeaderArray, arrayOfArrays) {
    if (!arrayOfArrays.length) return [];
    // store the longest column widths
    let widthArray = [];
    // for each row, get the lengths
    const lengths = [tableHeaderArray, ...arrayOfArrays].map(array => {
        return array.map(cell => {
            return cell.length || cell.toString().length;
        })
    });
    // use the length of the rows to iterate through
    // each row and get the longest column width
    lengths[0].forEach((col, i) => {
        const cellPadding = 6;
        const colWidths = lengths.map(width => {
            // if first column, return 10 instead of Date length
            if (i === 0) return 10;
            return width[i];
        });
        widthArray.push(Math.max(...colWidths) + cellPadding);
    })
    return widthArray;
}

// return border data for spreadsheet
function getBorderData(colNumber, lastColumn, lastRow) {
    switch (colNumber) {
        // first column
        case 1:
            return lastRow ?
                { left: BORDERS.normal, bottom: BORDERS.normal }
            :   { left: BORDERS.normal, bottom: BORDERS.light };
        // last column
        case lastColumn:
            return lastRow ?
                { right: BORDERS.normal, bottom: BORDERS.normal }
            :   { right: BORDERS.normal, bottom: BORDERS.light };
        // middle columns
        default:
            return lastRow ?
                { bottom: BORDERS.normal }
            :   { bottom: BORDERS.light };
    }
}
