import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../App.css';

const Calender = () => {
    const[trainings, setTrainings] = React.useState([]);

    React.useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    };

    return (
        <div>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                height={600}
                aspectRatio={1}
                events={trainings.map(item => {
                    const container = {};
                    container.date = item.date;
                    container.title = item.activity;
                    return container;
                })}
            />
        </div>
    );
};

export default Calender;