import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Calender from './components/Calender';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { StylesProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function App() {
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      flex: 1,
      margin: 5
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <StylesProvider injectFirst>
      <div className="App">
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <img className="logo" src={require('./images/ptlogo.jpg')} style={{ width: 40 }} />
              <Typography variant="h5">
                Personal Trainer
            </Typography>

              <Navbar />
            </Toolbar>
          </AppBar>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/customers" component={Customerlist} />
              <Route path="/trainings" component={Traininglist} />
              <Route path="/calender" component={Calender} />
            </Switch>
          </div>
        </BrowserRouter>

        <div className="cardDeck">
          <div id="card1">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="trainings" className={classes.avatar}>
                    TP
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Spinning"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={require("./images/cards/spinning.jpg")}
                title="Spinning"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, dignissim vitae tortor sed, vulputate scelerisque ipsum.
                  Pellentesque ac leo vel orci gravida accumsan. Morbi pellentesque nisl et nisl vehicula, ut sagittis nulla dignissim.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>What is Spinning?:</Typography>
                  <Typography paragraph>
                    Sed quis enim sit amet nisi vulputate feugiat. Vestibulum at pharetra velit, eget faucibus tellus. Praesent in bibendum arcu.
                    Praesent vel enim et tortor pulvinar tempus. Morbi turpis nunc, consectetur ut fermentum in, finibus vitae ex. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam volutpat pharetra auctor. Aenean nibh nulla,
                    mollis eget turpis porttitor, vulputate vestibulum lacus. In vel lacus ex.
          </Typography>
                  <Typography paragraph>
                    Vestibulum condimentum ullamcorper tincidunt. Donec sollicitudin diam et dolor porttitor, ut tempor dolor aliquet. Curabitur
                    varius sapien nec leo posuere, nec vulputate lacus elementum. Suspendisse ipsum erat, gravida vitae mattis ac, scelerisque vel
                    tellus. Morbi feugiat, massa ac cursus dapibus, metus mauris vulputate quam, in iaculis augue enim et orci.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>

          <div id="card2">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="trainings" className={classes.avatar}>
                    TP
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Gym training"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={require("./images/cards/gym.jpg")}
                title="Gym training"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci neque, dignissim vitae tortor sed, vulputate scelerisque ipsum.
                  Pellentesque ac leo vel orci gravida accumsan. Morbi pellentesque nisl et nisl vehicula, ut sagittis nulla dignissim.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Efficient gym training:</Typography>
                  <Typography paragraph>
                    Sed quis enim sit amet nisi vulputate feugiat. Vestibulum at pharetra velit, eget faucibus tellus. Praesent in bibendum arcu.
                    Praesent vel enim et tortor pulvinar tempus. Morbi turpis nunc, consectetur ut fermentum in, finibus vitae ex. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam volutpat pharetra auctor. Aenean nibh nulla,
                    mollis eget turpis porttitor, vulputate vestibulum lacus. In vel lacus ex.
          </Typography>
                  <Typography paragraph>
                    Vestibulum condimentum ullamcorper tincidunt. Donec sollicitudin diam et dolor porttitor, ut tempor dolor aliquet. Curabitur
                    varius sapien nec leo posuere, nec vulputate lacus elementum. Suspendisse ipsum erat, gravida vitae mattis ac, scelerisque vel
                    tellus. Morbi feugiat, massa ac cursus dapibus, metus mauris vulputate quam, in iaculis augue enim et orci.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
          <div id="card3">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="trainings" className={classes.avatar}>
                    TP
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jogging"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={require("./images/cards/jogging.jpg")}
                title="Jogging"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Aliquam quis nibh viverra nibh porta porta vel id odio. Etiam eu semper lorem, ac interdum diam. Ut vitae vestibulum tellus. Duis vel orci ut dui faucibus vehicula. Sed sit amet magna ac dui imperdiet condimentum. Donec viverra arcu ipsum, nec efficitur quam consectetur sed.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Let's go jogging?:</Typography>
                  <Typography paragraph>
                    Sed quis enim sit amet nisi vulputate feugiat. Vestibulum at pharetra velit, eget faucibus tellus. Praesent in bibendum arcu.
                    Praesent vel enim et tortor pulvinar tempus. Morbi turpis nunc, consectetur ut fermentum in, finibus vitae ex. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam volutpat pharetra auctor. Aenean nibh nulla,
                    mollis eget turpis porttitor, vulputate vestibulum lacus. In vel lacus ex.
          </Typography>
                  <Typography paragraph>
                    Vestibulum condimentum ullamcorper tincidunt. Donec sollicitudin diam et dolor porttitor, ut tempor dolor aliquet. Curabitur
                    varius sapien nec leo posuere, nec vulputate lacus elementum. Suspendisse ipsum erat, gravida vitae mattis ac, scelerisque vel
                    tellus. Morbi feugiat, massa ac cursus dapibus, metus mauris vulputate quam, in iaculis augue enim et orci.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>

          <div id="card4">
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="trainings" className={classes.avatar}>
                    TP
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Zumba"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={require("./images/cards/zumba.jpg")}
                title="Zumba"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Praesent sed odio sit amet augue feugiat feugiat id ut nisi. Curabitur dignissim nulla orci, ultricies facilisis lectus efficitur vitae.
                   Etiam in lectus quis mi ultricies euismod. Cras lectus justo, facilisis sit amet aliquam vel, varius ut massa.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>What is Zumba?:</Typography>
                  <Typography paragraph>
                    Vivamus quis lacus odio. Nam pulvinar non odio sit amet rhoncus. Fusce vestibulum at risus ut condimentum. Aliquam id magna consequat, pulvinar nibh sed, ultrices justo. Nullam eu tincidunt ex, in vestibulum lorem. Sed vitae aliquam enim, vel molestie justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Typography>
                  <Typography paragraph>
                    Vestibulum condimentum ullamcorper tincidunt. Donec sollicitudin diam et dolor porttitor, ut tempor dolor aliquet. Curabitur
                    varius sapien nec leo posuere, nec vulputate lacus elementum. Suspendisse ipsum erat, gravida vitae mattis ac, scelerisque vel
                    tellus. Morbi feugiat, massa ac cursus dapibus, metus mauris vulputate quam, in iaculis augue enim et orci.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>
    </StylesProvider>

  );
};


export default App;

