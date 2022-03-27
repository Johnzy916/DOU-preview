import {
    pageHead,
    tableHead,
    tableTop,
    tableBody,
    tableFoot,
    tableClose,
    pageFoot
} from './template';

export default (DOM, state, print) => {

    // create window
    const win = window.open('', '', `800px,width=100vh`);

    // write page head
    win.document.write(pageHead(DOM, state, print));

    // get years and length of array
    // reverse the order if the box is checked
    const yearsArray = state.reverseOrder ? 
                        Object.keys(state.dates).sort((a,b) => a - b)
                        : Object.keys(state.dates);
    const numOfYears = yearsArray.length;

    // create tables by year
    for (let i = 0; i < numOfYears; i++) {
        const year = yearsArray[i];
        win.document.write(
            // set table width depending on data
            tableHead(),
            // // create header for each year
            `<tr><th class="uk-text-center" colspan="6">${year}</th><tr>`,
            // // write table headers depending on data
            tableTop(state)
        );
        // loop through each year and write the data
        for (let j = 0; j < state.dates[year].length; j++) {
            win.document.write(tableBody(state, year, j));
        }
        // write the totals at the bottom if box is checked
        if (state.includeTotal) win.document.write(tableFoot(state, yearsArray[i]));
        // close the table
        win.document.write(tableClose);
    }

    // write page foot
    win.document.write(pageFoot);
    // finish writing to doc
    win.document.close();
}