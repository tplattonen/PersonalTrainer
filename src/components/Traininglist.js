import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

const Traininglist = () => {
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTrainings();
    }, [])

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure you want to delete training?')) {
            fetch(link, {method: 'DELETE'})
                .then(res => fetchTrainings())
                .then(res => setMessage('Training deleted'))
                .then(res => setOpen(true))
                .catch(error => console.error(error))
        }
    }

    const columns = [
        {
            Header: 'Date',
            id: 'date',
            accessor: d => 
                moment(d.date).format("DD-MM-YYYY")
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            accessor: 'links[0].href',
            filterable: false,
            sortable: false,
            Cell: ({ value }) => <Button size="small" color="secondary" onClick={() => deleteTraining(value)}>Delete</Button>
        },

    ]

    return (
        <div>
            <ReactTable filterable={true} columns={columns} data={trainings} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
        </div>
    );
};



export default Traininglist;