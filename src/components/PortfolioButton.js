import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pdf from '../resume.pdf';
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



      {/*<Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>
  </label>*/}
    </span>
  );
}

PortfolioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioButton);