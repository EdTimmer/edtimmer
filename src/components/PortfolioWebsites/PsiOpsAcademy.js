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
import psiops from '../../images/psiops.png'

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

class PsiOpsAcademy extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Psi Ops Academy"
          subheader="Solo Project | March 2019"
        />
        <CardMedia
          className={classes.media}
          image={psiops}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Guessing game app built with React using hooks.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="http://psiopsgame.s3-website.us-east-2.amazonaws.com" rel="noopener noreferrer" target="_blank">WEBSITE</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/EdTimmer/psi_ops_academy" rel="noopener noreferrer" target="_blank">CODE</a>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

PsiOpsAcademy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PsiOpsAcademy);