import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import { cardsRequested } from '../actions/card';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import * as Status from '../helpers/status';


class HomePage extends Component {
  componentDidMount() {
    this.props.actions.cardsRequested(1);
  }

  render() {
    if (!this.props.data.cards) return null;
    if (this.props.status === Status.LOADING) return <Loading />;

    return <CardList cards={this.props.data.cards} />
  }
}

export default connect(
  state => ({
    data: state.cards.data,
    status: state.cards.status,
  }),
  dispatch => ({
    actions: bindActionCreators({ cardsRequested }, dispatch)
  })
)(HomePage);
