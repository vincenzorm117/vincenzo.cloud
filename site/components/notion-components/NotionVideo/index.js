import NotionText from '../NotionText'

const NotionVideo = (block) => {
  const videoUrl = new URL(block?.video?.external?.url)
  const videoId = videoUrl.searchParams.get('v')

  return (
    <div className='my-4 relative pb-[56.17%]'>
      <iframe
        className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen={true}
      />
    </div>
  )
}

export default NotionVideo
