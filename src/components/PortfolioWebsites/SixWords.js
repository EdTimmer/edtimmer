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
import sixwords from '../../images/sixwords.png'

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

class SixWords extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Six Words"
          subheader="Solo project | October 2018"
        />
        <CardMedia
          className={classes.media}
          image={sixwords}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Meditation website built with JavaScript, HTML, CSS, Node, Express, Sequelize, PostgreSQL, React, React-Redux, Material-UI, and Axios.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://sixwordsofadvice.herokuapp.com/#/" rel="noopener noreferrer" target="_blank">WEBSITE</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/sixwords" rel="noopener noreferrer" target="_blank">CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

SixWords.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SixWords);