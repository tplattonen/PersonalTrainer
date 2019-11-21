import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const Customerlist = () => {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchCustomers();
    }, [])

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure you want to delete customer?'))
            fetch(link, {method: 'DELETE'})
                .then(res => fetchCustomers())
                .then(res => setMessage('Customer deleted'))
                .then(res => setOpen(true))
                .catch(error => console.error(error))
    }

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
           accessor: 'links[0].href',
           filterable: false,
           sortable: false,
           Cell: ({ value }) => <Button size="small" color="secondary" onClick={() => deleteCustomer(value)}>Delete</Button>
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} columns={columns} data={customers} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
        </div>
    );
}

export default Customerlist;