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
import clickr from '../images/clickr.png'

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

class Clickr extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Clickr"
          subheader="Fullstack Academy solo project | May 2018"
        />
        <CardMedia
          className={classes.media}
          image={clickr}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
          Photo sharing website built with JavaScript, HTML, CSS, Node, Express, Sequelize, PostgreSQL, React, React-Redux, and Axios.
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

Clickr.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clickr);