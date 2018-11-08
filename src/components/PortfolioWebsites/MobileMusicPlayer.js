import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mobile from '../../images/mobilecomposite.png'

const styles = theme => ({
  card: {
    maxWidth: 400,
    // minHeight: 443,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

class MobileMusicPlayer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Mobile Music Player"
          subheader="Solo Project (Udemy Course) | November 2018"
        />
        <CardMedia
          className={classes.media}
          image={mobile}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Mobile music player application built with React Native, Expo, and Deezer API.
          </Typography>
        </CardContent>
        <CardActions>
          {/*<Button size="small" color="primary">
            <a href="https://edtimmer.com" rel="noopener noreferrer" target="_blank">WEBSITE</a>
          </Button>*/}
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/musicApp" rel="noopener noreferrer" target="_blank">CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MobileMusicPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileMusicPlayer);