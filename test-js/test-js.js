// const songs = ['song0', 'song1', 'song2'];
// const listItems = songs.map((song) => <li>{song}</li>);

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


  fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?market=US&fields=items(track)&limit=10', {
      method: 'GET', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer BQBouB4HWgf3dGMhHhlyGkw4qTDY3k6qXLJ_bu50pJ9umpdgL5Mfrz2XX1ZpxvNiSNifU4d81x-oOiCp6zjPZv11me5_mlrWyvF8BiOf8PqYIix9GLRgKHhOkP-VGzqnCbc9_XJx3pe-ckwx'
      }
  })
      .then((response) => {
          console.log(response.json().then(
              (data) => { console.log(data) }
          ));
      });