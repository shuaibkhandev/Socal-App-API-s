import React from 'react'

const FacebookPageLikes = ({pageLikes}) => {
    
  return (
    <div>
        <h2>Total Likes</h2>
        <h5>{pageLikes.fan_count}</h5>
    </div>
  )
}

export default FacebookPageLikes