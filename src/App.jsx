import { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';

const App = () => {
  const [playerSrc, setPlayerSrc] = useState('https://www.youtube.com/embed/BnPEv_tJi6o?autoplay=1');
  const songs = [
    { id: "BnPEv_tJi6o", name: "Tanti Auguri a Te"},
    { id: "kWHD75HF6Q", name: "Happy Birthday Flamenco Version"},
    { id: "7HIwsDKeDaQ", name: "Happy Birthday Satchmo Style"},
    { id: "IhA4r9peGXE", name: "Happy Birthday Song Remix DJ"},
    { id: "QGJSOf3Z-Wk", name: "Joyeux Anniversaire"},
    { id: "k1oqWKAp1N8", name: "Happy Birthday| Rachlevsky Chamber Orchestra Kremlin"}, 
    { id: "4sZmPHJPvZE", name: "Happy Birthday - Jazzy Piano | Jonny May"},
  ];

  const playSong = (id) => {
    const newSrc = `https://www.youtube.com/embed/${id}?autoplay=1`;
    setPlayerSrc(newSrc);
  };

  useEffect(() => {
    createSongButtons();
  }, []);

  const createSongButtons = () => {
    const songList = document.getElementById("songList");

    // Clear existing content of songList
    songList.innerHTML = "";

    songs.forEach(song => {
      const button = document.createElement("button");
      button.textContent = song.name;
      button.onclick = () => playSong(song.id);
      songList.appendChild(button);
    });
  };

  return (
    <div className="container">
      <h2>🎂🎂Happy Birthday!</h2>
      <div className="content-container">
        <iframe
          title="YouTube Player"
          id="player"
          type="text/html"
          width="320"
          height="180"
          src={playerSrc}
          frameBorder="0"
        ></iframe>
        <div className="songs" id="songList"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
