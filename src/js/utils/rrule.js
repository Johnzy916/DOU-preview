import { RRule } from 'rrule';

const routeARule = new RRule({
    dtstart: new Date(Date.UTC(2021, 07, 04)),
    freq: RRule.WEEKLY,
    interval: 2,
    byweekday: [1,2,3,4,5],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
})
const routeBRule = new RRule({
    dtstart: new Date(Date.UTC(2021, 07, 11)),
    freq: RRule.WEEKLY,
    interval: 2,
    byweekday: [1,2,3,4,5],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
})
const oddAddressRule = new RRule({
    dtstart: new Date(Date.UTC(2021, 07, )),
    freq: RRule.WEEKLY,
    interval: 1,
    bymonth: [3,4,5,6,7,8,9,10],
    byweekday: [2,6],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
})
const evenAddressRule = new RRule({
    dtstart: new Date(Date.UTC(2021, 07, )),
    freq: RRule.WEEKLY,
    interval: 1,
    bymonth: [3,4,5,6,7,8,9,10],
    byweekday: [0,3],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
})
const novToFebruaryRule = new RRule({
    dtstart: new Date(Date.UTC(2021, 07, )),
    freq: RRule.WEEKLY,
    interval: 1,
    bymonth: [1,2,11,12],
    byweekday: [0,6],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
})

export const eventGenerator = (type) => {
    // array to hold events
    const eventArray = [];

    // generate events for FullCalendar and return them
    switch (type) {
        case 'A':
            routeARule.all().forEach(event => {
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#51586E'
                })
            })
            return eventArray;
        case 'B':
            routeBRule.all().forEach(event => {
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#51586E'
                }) 
             })
             return eventArray;
        case 'ODD':
            const allOddRules = [
                ...oddAddressRule.all(),
                ...novToFebruaryRule.all()
            ]
            allOddRules.forEach(event => {
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#DBC381'
                }) 
             })
             return eventArray;
        case 'EVEN':
            const allEvenRules = [
                ...evenAddressRule.all(),
                ...novToFebruaryRule.all()
            ]
            allEvenRules.forEach(event => {
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#DBC381'
                }) 
                })
                return eventArray;
    }
}