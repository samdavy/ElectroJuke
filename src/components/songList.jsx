import React, { Component } from 'react';
const songs = ['song0', 'song1', 'song2'];
const listItems = songs.map((song) => <li>{song}</li>);

class SongList extends React.Component {
    render() { 
        return <React.Fragment><h1>Song List</h1><button>Add Song</button><ul>{listItems}</ul><img src={ require('./Cd-icon.png') } /></React.Fragment>;
    };
}
 
export default SongList;