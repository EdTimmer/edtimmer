import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function PortfolioButton(props) {
  const { classes } = props;
  return (
    <span style={{ padding: '30px' }}>
      <Link to={"/portfolio"}>
        <Button variant="outlined" className={classes.button} style={{ borderColor: 'white' }}>
          <span className='portfolioButton'>PORTFOLIO</span>
        </Button>
      </Link>
    </span>
  );
}

PortfolioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioButton);