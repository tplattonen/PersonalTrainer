import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Trainingtocustomer from './Addtrainingtocustomer';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const Customerlist = () => {
    const styles = withStyles ({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      });
    
        
    
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
    };

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure you want to delete customer?'))
            fetch(link, {method: 'DELETE'})
                .then(res => fetchCustomers())
                .then(res => setMessage('Customer deleted'))
                .then(res => setOpen(true))
                .catch(error => console.error(error))
    };

    const saveCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCustomer)
            }
        )
            .then(res => fetchCustomers())
            .then(res => setMessage('New customer saved successfully!'))
            .then(res => setOpen(true))
            .catch(err => console.error(err))
    };

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => fetchCustomers())
            .then(res => setMessage('Customer information updated successfully!'))
            .then(res => setOpen(true))
            .catch(err => console.log(err))
    };

    const addTrainingToCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    "date": customer.date,
                    "activity": customer.activity,
                    "duration": customer.duration,
                    "customer": customer.customer
                    })})
        .then(response => fetchCustomers())
        .catch(err => console.log(err));
    };

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
            accessor: 'links.href',
            filterable: false,
            sortable: false,
            width: 130,
            Cell: row => <Trainingtocustomer addTrainingToCustomer={addTrainingToCustomer} customer={row.original} />
        },
        {
            filterable: false,
            sortable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original} />
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
            <div>
                <Grid container>
                    <Grid item>
                        <Addcustomer saveCustomer={saveCustomer} />
                    </Grid>
                </Grid>
                <ReactTable filterable={true} columns={columns} data={customers} />
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message} />
            </div>
        </div>
    );
}

export default Customerlist;