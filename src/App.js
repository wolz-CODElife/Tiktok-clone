import React, { useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos ] = useState([
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232723/tiktok-clone/tiktok2_qxafx3.mp4',
      channel: 'DanceCrew',
      description: 'Video by Lara Jameson from Pexels',
      song: 'Bounce - Ruger',
      likes: 250,
      messages: 120,
      shares: 40
    },
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232725/tiktok-clone/tiktok1_np37xq.mp4',
      channel: 'Happyfeet',
      description: '#happyfeetlegwork videos on TikTok',
      song: 'Kolo sound - Nathan',
      likes: 250,
      messages: 120,
      shares: 40
    },
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232726/tiktok-clone/tiktok3_scmwvk.mp4',
      channel: 'thiskpee',
      description: 'The real big thug boys💛🦋 The real big thug boys💛🦋 ',
      song: 'original sound - KALEI KING 🦋',
      likes: 250,
      messages: 120,
      shares: 40
    },
  ])
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) =>
          <Video key={url} url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares} />)}
      </div>
    </div>
  );
}

export default App;
