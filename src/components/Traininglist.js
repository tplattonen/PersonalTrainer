import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';

const Traininglist = () => {
    const [customers, setCustomers] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchCustomers();
        fetchTrainings();
    }, [])

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const fetchTrainings = async () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => updateTrainingCustomerReferences(data.content)
                .then(updatedData => setTrainings(updatedData)))
    };

    const fetchCustomers = async () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    };

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure you want to delete training?')) {
            fetch(link, { method: 'DELETE' })
                .then(res => fetchTrainings())
                .then(res => setMessage('Training deleted'))
                .then(res => setOpen(true))
                .catch(error => console.error(error))
        }
    };

    const fetchSingleCustomer = async (link) => {
        return await fetch(link)
            .then(response => response.json())
            .then(data => data)
    };


    const updateTrainingCustomerReferences = async (data) => {
        for (let training of data) {
            training.customer = await fetchSingleCustomer(training.links[2].href)
        }
        return data

    }

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'customer.firstname'
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
            accessor: 'links[0].href',
            filterable: false,
            sortable: false,
            Cell: ({ value }) => <Button size="small" color="secondary" onClick={() => deleteTraining(value)}>Delete</Button>
        },

    ]

    if (!trainings || trainings.length === 0) {
        return <div>loading..</div>
    }
    return (
        <div>
            <ReactTable filterable={true} columns={columns} data={trainings} className="Tables"/>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
        </div>
    );
};



export default Traininglist;