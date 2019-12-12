import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment';
import '../App.css';

const Calendar = () => {

    const [customerTrainings, setCustomerTrainings] = React.useState([]);

        React.useEffect(() => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < data.length; i++) {
                    let date = moment.utc(data[i].date).toDate();
                    let trainEnds = moment.utc(date).add(data[i].duration, 'm').toDate()
                    let training = {title: data[i].activity + ' - ' + data[i].customer.firstname + ' ' + data[i].customer.lastname + '\n' + data[i].duration + 'min' + ' ' + moment.utc(data[i].date).toDate(), start: date, end: trainEnds};
                    setCustomerTrainings(customerTrainings => [...customerTrainings, training])
                };
            },[])
            .catch(err => console.error(err));
            }, []);
        
        const eventClick = (info) => {
            alert('Event: ' + info.event.title);
        
            // change the border color just for fun
            info.el.style.borderColor = 'red';
            }

    return (
        <div className="Calender"> 
            <div>
            <p>Click on event to see full information</p>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                    }}
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    height={600}
                    aspectRatio={1}
                    events={customerTrainings}
                    rerenderEvents={true}
                    eventClick={eventClick}
                />
            </div>
        </div>   
    )
};

export default Calendar;

