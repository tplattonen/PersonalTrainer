import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { Home, Book, AccountBox } from '@material-ui/icons'
import { Link } from 'react-router-dom';



function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                    <Link to="/home" style={{paddingLeft: 13, textDecoration: 'none', color: 'white'}}>Home</Link>  <Home />
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        <Link to="/trainings" style={{paddingLeft: 13, textDecoration: 'none', color: 'white'}}>Trainings</Link>  <Book />
                    </Typography>
                </ListItemText>

                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        <Link to="/customers" style={{paddingLeft: 13, textDecoration: 'none', color: 'white'}}>Customers</Link> <AccountBox />
                    </Typography>
                </ListItemText>
            </ListItem>

        </List>
    )
}


export default NavBar;