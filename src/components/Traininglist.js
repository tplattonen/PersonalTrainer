import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Addtrainingtocustomer from './Addtrainingtocustomer';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

const Traininglist = () => {
    const [customers, setCustomers] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTrainings();
        fetchCustomers();
    }, [])

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    };

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    };

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure you want to delete training?')) {
            fetch(link, {method: 'DELETE'})
                .then(res => fetchTrainings())
                .then(res => setMessage('Training deleted'))
                .then(res => setOpen(true))
                .catch(error => console.error(error))
        }
    };
    
    const trainingToCustomer = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/customer/{id}/trainings',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    'date': newTraining.date,
                    'activity': newTraining.activity,
                    'duration': newTraining.duration
                }
            })
                .then(res => fetchTrainings())
                .then(res => setMessage('Training has been added to customer!'))
                .then(res => setOpen(true))
                .catch(err => console.log(err))
    };

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'training.links[2].href.customer.firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'customer.lastname'
        },
        {
            Header: 'Date',
            id: 'date',
            accessor: d => 
                moment(d.date).format("LLL")
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
            filterable: false,
            sortable: false,
            Cell: row => <Addtrainingtocustomer trainingToCustomer={trainingToCustomer} training={row.original} />
        },
        {
            accessor: 'links[0].href',
            filterable: false,
            sortable: false,
            Cell: ({ value }) => <Button size="small" color="secondary" onClick={() => deleteTraining(value)}>Delete</Button>
        },

    ]

    /* const combinedData = [...customers, ...trainings]; */

    return (
        <div>
            <ReactTable filterable={true} columns={columns} data={trainings} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
        </div>
    );
};



export default Traininglist;