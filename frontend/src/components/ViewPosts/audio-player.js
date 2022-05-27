import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="./static/music/foo.mp3" controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;