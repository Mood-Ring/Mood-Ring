import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions.js';
import MoodDisplay from './moodDisplay.jsx';

const mapStateToProps = (reduxState) => {
    //used to bring in the pieces of state that the components on this page will use
    return {
      currentUser: reduxState.currentUser
    };
};

class MoodContainer extends Component {
    constructor(props) {
        super(props);
        const moodArray = [];
    }
    componentWillMount() {
      fetch('/getUserMoods', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(props.currentUser.username),
    })
      .then(response => response.json())
      .then(response => {
          for (let i = 0; i<response.length;i+=1) {
              moodArray.push(<MoodDisplay date={response[i].created_date} mood={response[i].mood}></MoodDisplay>);
          }
      })
      .catch(err => console.log(err))
    }
    render() {
      (
        <div>
            {moodArray}
        </div>
      )
    }
}

export default connect(mapStateToProps)(MoodContainer);
