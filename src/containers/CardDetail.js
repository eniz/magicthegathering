import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/Loading';
import { cardDetailRequested } from '../actions/card';
import * as Status from '../helpers/status';

const styles = {
  container: {
    width: '80%',
    margin: '30px auto',
  },
  detail: {
    padding: 16,
  },
  failed: {
    margin: '100px auto',
  }
}

class CardDetail extends Component {
  componentDidMount() {
    this.props.actions.cardDetailRequested(this.props.match.url);
  }

  render() {
    if (!this.props.data) return null;
    if (this.props.status === Status.LOADING) return <Loading />;

    const {
      classes,
      history,
    } = this.props;

    const {
      name,
      imageUrl,
      text,
    } = this.props.data

    return (
      <Grid container className={classes.container} spacing={24}>
        <Grid item xs={3}>
          <img src={ imageUrl } alt={ name } />
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={4} className={classes.detail}>
            <Typography variant="headline" gutterBottom>
              { name }
            </Typography>
            <Typography variant="body1" gutterBottom>
              { text }
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => {
              history.goBack();
            }}>
              Back
            </Button>
          </Paper>
        </Grid>
        {this.props.status === Status.FAILED &&
          <Typography className={classes.failed}>
            Something went wrong!
          </Typography>
        }
      </Grid>
    )
  }
}

CardDetail.propTypes = {
  data: PropTypes.object,
}

export default compose(
  connect(
    state => ({
      data: state.cardDetail.data,
      status: state.cardDetail.status
    }),
    dispatch => ({
      actions: bindActionCreators({ cardDetailRequested }, dispatch)
    }),
  ),
  withStyles(styles),
)(CardDetail);
