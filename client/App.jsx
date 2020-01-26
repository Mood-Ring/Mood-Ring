import React, {Component} from 'react';
import MainHeader from './components/MainHeader.jsx';
import LandingPageBody from './components/LandingPageBody.jsx';
import BottomLinks from './components/BottomLinks.jsx';
import LogIn from './components/LogIn.jsx';
import Feeling from './components/HowAreYouFeeling.jsx';

const page = "LogIn";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const display = [];
        display.push(<MainHeader/>);
        switch(page){
            case "Home": 
            display.push(<LandingPageBody/>);
            break;
            case "LogIn": 
            display.push(<LogIn/>);
            break;
            case "UserFeed":
            display.push(<Feeling/>);
            break;
        }
        display.push(<BottomLinks/>)
        return(
            <div>
               {display}
            </div>
        ) 
    }
}

export default App;