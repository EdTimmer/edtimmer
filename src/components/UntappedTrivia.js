import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import untappedtrivia from '../images/untappedtrivia.png'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

class UntappedTrivia extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Untapped Trivia"
          subheader="Fullstack Academy team project | June 2018"
        />
        <CardMedia
          className={classes.media}
          image={untappedtrivia}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
          Bar trivia game app built with JavaScript, HTML, CSS, Node, Express, Sequelize, PostgreSQL, React, React-Redux, React Native, Stripe, Moment, and Axios.

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            LINK TO WEBSITE
          </Button>
          <Button size="small" color="primary">
            LINK TO CODE
          </Button>
        </CardActions>
      </Card>
    );
  }
}

UntappedTrivia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UntappedTrivia);