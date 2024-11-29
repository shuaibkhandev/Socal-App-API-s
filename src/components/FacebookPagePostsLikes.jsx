import React from 'react'

const FacebookPagePostsLikes = ({pagePostsLikes}) => {

    const totalLikes = pagePostsLikes.reduce((sum , post)=>{
        const likes = post.reactions.summary.total_count  || 0;
       return sum + likes;
        
    },0)
    

  return (
    <div>
        <h2>Facebook Page Posts Likes</h2>
        <h2>{totalLikes}</h2>
    </div>
  )
}

export default FacebookPagePostsLikes