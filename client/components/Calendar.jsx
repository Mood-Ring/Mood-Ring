import React from 'react';
import { Component } from 'react';
import CalendarItem from './CalendarItem.jsx';

class Calendar extends Component {
  constructor (props) {
    super (props);

    // this.state = {
    //   userMoods: null,
    // }
  }

  // componentWillMount() {
  //   fetch('/user/mood', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(moodData => {
  //     console.log("moodData in fetch ", moodData);
  //     this.setState({ userMoods: moodData });
  //   });
  // }

  render () {
    console.log("this.state ", this.state);
    const moods = [];
    for (let i = 0; i < this.state.userMoods.length; i += 1) {
      moods.push(<CalendarItem mood={this.state.userMoods[i]} key={ 'mood-' + i}/>);
    }
    return (
      <div id="calendar">
        {moods}
      </div>
    );
  }
}


export default Calendar;