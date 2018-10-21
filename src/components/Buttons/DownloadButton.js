import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pdf from '../../Ed_Timmer_Resume.pdf';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function DownloadButton(props) {
  const { classes } = props;
  return (
    <div style={{ padding: '30px 0 10px 0' }}>
      <a href={pdf} rel="noopener noreferrer" target="_blank">
        <Button variant="outlined" className={classes.button}>
          <span className='downloadButton'>DOWNLOAD RESUME</span>
        </Button>
      </a>
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
    </div>
  );
}

DownloadButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadButton);