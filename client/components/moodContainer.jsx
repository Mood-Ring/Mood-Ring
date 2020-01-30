import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';
import MoodDisplay from './moodDisplay.jsx';

const mapStateToProps = (reduxState) => {
    //used to bring in the pieces of state that the components on this page will use
    return {
      username: reduxState.username,
      moods: reduxState.moods
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveMoods: (moods) => {
      dispatch(actions.saveMoods(moods))
    }
  }
}

class MoodContainer extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
      fetch('/getUserMoods', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: this.props.username }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('this is response', response)
        this.props.saveMoods(response)
      })
      .catch(err => console.log(err))
    }
    render() {
      const moodArray = [];
      const moodz = this.props.moods
      for (let i = 0; i < moodz.length; i += 1) {
        moodArray.push(<MoodDisplay date={moodz[i].created_date} mood={moodz[i].mood}></MoodDisplay>);
      }
      return (
        <div>
            {moodArray}
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);