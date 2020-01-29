import React from 'react';
import styled from 'styled-components';

const MoodDisplay = (props) => (
    <div className='moodBox'>
        <label>Mood: {props.mood}  Date: {props.date}</label>
    </div>
);

export default moodDisplay;