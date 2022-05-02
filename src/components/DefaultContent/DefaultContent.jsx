import music from '../../assets/audio/gta.mp3';

function DefaultContent() {
  return (
    <div className='default-content'>
      <audio className='default-content__audio' src={music} controls="controls"></audio>
    </div>
  )
}

export default DefaultContent;

