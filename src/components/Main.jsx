import React from 'react'

export default function Main(props) {
    const {data} = props
  return (
    <div className='imgContainer'>
           {
                data?.media_type === "video" ? (
                    data.url.includes("youtube.com") ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={data?.url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={data?.title || 'YouTube video'}
                        ></iframe>
                    ) : (
                        <video controls>
                            <source src={data?.url} type="video/mp4" />
                        </video>
                    )
                ) : (
                    <img src={data.url} alt={data?.title || 'bg-img'} className='bgImage' />
                )
            }
        
    </div>
  )
}
