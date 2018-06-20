import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import { cardsRequested } from '../actions/card';
import CardList from '../components/CardList';
import * as Status from '../helpers/status';
import { MAX_CARD_COUNTS } from '../helpers/api';
import debounce from '../helpers/debounce';

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    this.props.actions.cardsRequested(this.props.pageId);

    window.addEventListener('scroll', debounce(this.onScroll, 200), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      if (this.props.status === Status.LOADED) {
        if (this.props.data.length < MAX_CARD_COUNTS) {
          this.props.actions.cardsRequested(this.props.pageId);
        }
      }
    }
  }

  render() {
    const {
      data,
      status,
    } = this.props

    if (!data) return null;

    return (
      <CardList
        cards={data}
        isFailed={status === Status.FAILED}
        isLoading={status === Status.LOADING} />
    )
  }
}

export default connect(
  state => ({
    data: state.cards.data,
    status: state.cards.status,
    pageId: state.cards.pageId,
  }),
  dispatch => ({
    actions: bindActionCreators({ cardsRequested }, dispatch)
  })
)(HomePage);
