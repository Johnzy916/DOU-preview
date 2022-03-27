import React, { useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';
import { StateContext } from '../context/StateContext';
import { eventGenerator } from '../utils/rrule';

export default function Calendar() {

    const { state, calendarDispatch } = useContext(StateContext);

    useEffect(() => {
        calendarDispatch({ type: 'SET_CALENDAR_EVENTS', events: {
            'A': eventGenerator('A'),
            'B': eventGenerator('B'),
            'ODD': eventGenerator('ODD'),
            'EVEN': eventGenerator('EVEN')
        }})
    }, [])

    const handleClick = (e, type) => {
        e.preventDefault();
        calendarDispatch({ type: 'SET_ACTIVE_EVENTS', activeEvents: type})
    }

    const removeActiveClasses = () => {
        const aButton = document.querySelector('.fc-aButton-button');
        const bButton = document.querySelector('.fc-bButton-button');
        const oddButton = document.querySelector('.fc-oddButton-button');
        const evenButton = document.querySelector('.fc-evenButton-button');
        [aButton, bButton, oddButton, evenButton].forEach(button => {
            button.classList.remove('active--recycle');
            button.classList.remove('active--watering');
        });
    }

    return (
        <div className="calendar-content">
            <div className="calendar-container">
                    <FullCalendar 
                        plugins={[ rrulePlugin, dayGridPlugin ]}
                        initialView='dayGridMonth'
                        fixedWeekCount={false}
                        events={state.events[state.activeEvents]}
                        height="auto"
                        customButtons={{
                            aButton: {
                                text: 'A',
                                hint: 'Recycling group A',
                                click: (e) => {
                                    removeActiveClasses();
                                    e.target.classList.add('active--recycle');
                                    handleClick(e, 'A');
                                }
                            },
                            bButton: {
                                text: 'B',
                                hint: 'Recycling group B',
                                click: (e) => {
                                    removeActiveClasses();
                                    e.target.classList.add('active--recycle');
                                    handleClick(e, 'B');
                                }
                            },
                            oddButton: {
                                text: 'ODD',
                                hint: 'Odd watering days',
                                click: (e) => {
                                    removeActiveClasses();
                                    e.target.classList.add('active--watering');
                                    handleClick(e, 'ODD');
                                }
                            },
                            evenButton: {
                                text: 'EVEN',
                                hint: 'Even watering days',
                                click: (e) => {
                                    removeActiveClasses();
                                    e.target.classList.add('active--watering');
                                    handleClick(e, 'EVEN');
                                }
                            }
                        }}
                        headerToolbar={{
                            left: 'title',
                            center: 'aButton,bButton oddButton,evenButton',
                            right: 'prev,next'
                        }}
                    />
            </div>
        </div>
    )
};
