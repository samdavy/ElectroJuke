// const songs = ['song0', 'song1', 'song2'];
// const listItems = songs.map((song) => <li>{song}</li>);

const fetch = require('cross-fetch');
var pretty = require('js-object-pretty-print').pretty,
    address,
    value;

let songs = {
    songList: [
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "1"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "2"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "3"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "4"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "5"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "6"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "7"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "8"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "9"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "10"
      }
    ]
  }
  
  const searchList = {
    songList: [
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "1"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "2"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "3"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "4"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "5"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "6"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "7"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "8"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "9"
      },
      {
        name: "Dummy Song 1",
        artist: "Dummy Artist 1",
        imageUrl: "DummyImage",
        id: "10"
      }
    ]
  }
  
  console.log(songs);

  var songsObj;
  const token = 'BQCasgbZN0YXyV7o9jQXj9G7yzTL5x_2f7cJvx6nAdZvU8U8Lv7UA6B5cX-aDoUVIKki_PYrmcde7mpRhJ8jbQc9x7n6h9rB5YPWgKsfETIF3QI3UTsmEXApk-GrzZEQINCaAEj3qHZbVF8W'

  fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?market=US&fields=items(track)&limit=10', {
      method: 'GET', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  })
      .then((response) => {
          console.log(response.json().then(
              (data) => { 
                songsObj = data;
                console.log(pretty(songsObj));
            }
          ));
      });