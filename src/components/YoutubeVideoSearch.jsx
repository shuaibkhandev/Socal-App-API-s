import React from 'react'

const YoutubeVideoSearch = ({youtubeVideos}) => {
  return (
    <div>

<h2>YouTube Videos</h2>

<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>

{youtubeVideos.length > 0 ? (
          youtubeVideos.map((video, index) => (
            
            <div key={index} style={{ maxWidth: "560px" }}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}

</div>

    </div>
  )
}

export default YoutubeVideoSearch