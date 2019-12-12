import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';

export default function Trainingtocustomer(props) {
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState(
        { id: '', date: '', duration: '', activity: '', customer: '', newDateValue: '' }
    );

    const handleClickOpen = () => {
        setTraining({ ...training, duration: '', sdate: moment().format('YYYY-MM-DDTHH:MM'), id: props.customer.firstname + ' ' + props.customer.lastname, customer: props.customer.links[0].href })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /* inputchanged */
    const handleChange = (event) => {
        setTraining({ ...training, [event.target.name]: event.target.value })
        console.log(training)
    };

    const handleDateChange = (event) => {
        let updatedDate = moment(event.target.value).format();
        setTraining({ ...training, newDateValue: event.target.value, date: updatedDate})
    }

    const addTrainingToCustomer = () => {
        props.trainingToCustomer(training);
        handleClose();
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Add training
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Car</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the information for the new training.
                </DialogContentText>
                    <TextField
                        margin="dense"
                        value={training.id}
                        label="For customer"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        type="datetime-local"
                        margin="dense"
                        name="date"
                        value={training.newDateValue}
                        onChange={e => handleDateChange(e)}
                        label="Training starts"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={e => handleChange(e)}
                        label="Duration"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={e => handleChange(e)}
                        label="Activity"
                        fullWidth
                    />
                  
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addTrainingToCustomer} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

