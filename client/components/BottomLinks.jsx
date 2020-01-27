/****************************\
*                            *
*  Bottom Links: Our Git     *
*  Hub handles that display  *
*  on the bottom of the page *
*                            *
\****************************/


import React from 'react';
import { Component } from 'react';
import styled  from 'styled-components';

//Link styling
const Link = styled.a`
    display: inline-block;
    font-family: courier new;
    font-size: 30px;
    margin-top: 10px;
    margin-left: 60px;
    text-decoration: none;
    color: black;
`;

class BottomLinks extends Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div style = {{border: 'solid', marginTop: '10px'}}>
                <h1 style = {{textAlign: 'center'}}>Made By: </h1>
                <Link href = "https://github.com/chelseyeslehc">chelseyeslehc</Link>
                <Link href = "https://github.com/Jonathon55">Jonathon55</Link>
                <Link href = "https://github.com/Jnaso29">Jnaso29</Link>
                <Link href = "https://github.com/Vchau511">Vchau511</Link>
            </div>
        )
    }
}

export default BottomLinks;