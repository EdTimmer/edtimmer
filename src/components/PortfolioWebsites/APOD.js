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
import apod from '../../images/apod.png'

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

class APOD extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="NASA Picture Of The Day"
          subheader="Solo Project | April 2019"
        />
        <CardMedia
          className={classes.media}
          image={apod}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            React website showing NASA's Astronomy Picture Of The Day plus current day, date, time, local weather, and moon phase.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://edtimmerapipractice.herokuapp.com/" rel="noopener noreferrer" target="_blank">WEBSITE</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/apipractice" rel="noopener noreferrer" target="_blank">CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

APOD.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(APOD);