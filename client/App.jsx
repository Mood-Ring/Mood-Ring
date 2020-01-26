import React, {Component} from 'react';
import MainHeader from './components/MainHeader.jsx';
import LandingPageBody from './components/LandingPageBody.jsx';
import BottomLinks from './components/BottomLinks.jsx';
import LogIn from './components/LogIn.jsx';
import Feeling from './components/HowAreYouFeeling.jsx';
import CreateUser from './components/CreateUser.jsx';
import * as actions from '../redux/actions.js';
import { connect } from 'react-redux';

const page1 = "Create";

// const mapStateToProps = ({
//     reduxState: {page},
// }) => ({
//     page
// })


const mapDispatchToProps = dispatch => ({

});

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const display = [];
        display.push(<MainHeader/>);
        switch(page1){
            case "Home": 
            display.push(<LandingPageBody/>);
            break;
            case "Create":
            display.push(<CreateUser/>);
            break;
            case "Login": 
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

export default App/*connect(mapStateToProps, mapDispatchToProps)(App)*/;