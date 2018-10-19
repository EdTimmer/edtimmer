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
import sep from '../images/sep.png'

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

class Sep extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Senior Enrichment Project"
          subheader="Fullstack Academy solo project | April 2018"
        />
        <CardMedia
          className={classes.media}
          image={sep}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            School administration website built with JavaScript, HTML, CSS, Node, Express, Sequelize, PostgreSQL, React, React-Redux, and Axios.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://ed-timmer-s-e-p.herokuapp.com/#/" rel="noopener noreferrer" target="_blank">LINK TO WEBSITE</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/senior-enrichment-project" rel="noopener noreferrer" target="_blank">LINK TO CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Sep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sep);