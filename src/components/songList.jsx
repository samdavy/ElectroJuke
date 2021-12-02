import React, { Component } from 'react';
import Song from './song';

class SongList extends React.Component {
    render() { 
        return <React.Fragment><h1>Song List</h1><button>Add Song</button><ul>{listItems}</ul><img src={ require('./Cd-icon.png') } /></React.Fragment>;
    };
}
 
export default SongList;