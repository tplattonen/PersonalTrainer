import SwiftSlider from 'react-swift-slider'
import '../App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const data =  [
  {'id':'1','src':'https://img1.thelist.com/img/uploads/2017/02/rsz_jogging.jpg'},
  {'id':'2','src':'http://expert-sport.net/wp-content/uploads/2018/07/Zumba.jpg'},
  {'id':'3','src':'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1601/wavebreakmediamicro160103510/50602922-fit-people-working-out-at-spinning-class-in-the-gym.jpg'},
  {'id':'4','src':'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/muscular-fit-man-exercising-in-a-gym-royalty-free-image-515475126-1544444797.jpg'},
  {'id':'5','src':'https://pullrcblog-e399.kxcdn.com/en/wp-content/uploads/sites/4/2019/05/AdobeStock_125201041.jpeg'}
];

const Home = () => {
  return (
    <div>
    <div className="Carousel">
     <SwiftSlider data={data}/>
    </div>
    <div>
    <React.Fragment>
    <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#f3eaea', height: 'auto', padding: 10, borderRadius: 10 }} >
        <header><h1>About Personal Trainer App</h1></header>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque orci ac neque sagittis eleifend in vitae dolor. Aenean pharetra dui in nunc iaculis, non consequat ligula fermentum. Quisque eget imperdiet nunc. Curabitur quis lectus id quam vehicula auctor at ac quam. Nullam tempus nibh risus, sed dictum mi tempus a. Etiam sed dapibus turpis, in molestie felis. Quisque malesuada odio vitae est elementum, sit amet porttitor arcu sagittis. Nunc ligula odio, ultrices vel nulla id, tempus vulputate turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ut vulputate odio, vitae malesuada risus. Aenean vehicula imperdiet posuere. </Typography>
        <br />
        <h2>Train with us!</h2>
        <Typography>Nullam sit amet ante eu nulla pharetra posuere sed non risus. Integer ornare finibus nunc, eget euismod dui ultricies ut. Maecenas vitae congue eros. In ac consectetur sapien. Duis cursus scelerisque lacus, in suscipit velit efficitur feugiat. Suspendisse eu neque libero. Ut varius ultricies fermentum. Etiam ac ex lorem. Cras risus ipsum, pulvinar sit amet venenatis at, sodales ut libero. Nulla pellentesque placerat enim ac congue. Cras a lorem nec ex porttitor placerat vel consequat purus.</Typography>
        <br />
        <h2>Healthy Diet</h2>
        <Typography>Nunc hendrerit a enim vitae euismod. Donec sapien ipsum, finibus id felis quis, condimentum finibus elit. Donec sit amet erat sit amet erat ultrices mollis aliquam vel velit. Suspendisse vulputate eget lorem quis tristique. In finibus, enim in feugiat feugiat, quam ligula tempor mi, ut gravida nunc eros ac metus. Ut vitae lacus rutrum, rutrum felis quis, tristique mauris. Praesent elementum consectetur felis, et feugiat quam. Proin sit amet hendrerit enim. Phasellus sit amet arcu maximus, vehicula ex id, tempus nisi. Ut posuere molestie dui, sit amet vestibulum dolor cursus vitae. Suspendisse eleifend pulvinar semper. Phasellus magna elit, tempor quis tempor vel, convallis a diam. Etiam id tellus scelerisque, maximus justo vitae, mattis sem. Pellentesque in elementum nunc.</Typography>
        </Typography>
      </Container>
      </React.Fragment>
    </div>
    </div>
  );
}

export default Home;