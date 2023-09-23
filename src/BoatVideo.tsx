import Video from '../public/assets/boat-video.mp4'

function BoatVideo() {
  return (
   <video  className="h-100vh w-full object-cover animate-clip-from-top-animation" autoPlay muted loop playsInline >
      <source src={Video} type="video/mp4" />
   </video>
  )
}

export default BoatVideo