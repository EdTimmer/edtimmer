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
import calculator from '../../images/calculator.png'

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

class TronCalculator extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Tron Calculator"
          subheader="Solo project | October 2018"
        />
        <CardMedia
          className={classes.media}
          image={calculator}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Calculator website built with JavaScript, HTML, CSS, and React.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="http://tron-calculator-2.s3-website.us-east-2.amazonaws.com/#/" rel="noopener noreferrer" target="_blank">WEBSITE</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/calculator" rel="noopener noreferrer" target="_blank">CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

TronCalculator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TronCalculator);