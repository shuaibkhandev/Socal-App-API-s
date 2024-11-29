import React from 'react'

const FacebookPagePostsShares = ({pagePostsShares}) => {
    const totalShares = pagePostsShares.reduce((sum, post)=>{
        const shares = post.shares?.count || 0;
        return sum + shares
    },0)
    
  return (
    <div>
    <h2>Facebook Page Posts Shares</h2>
    <h5>{totalShares}</h5>
    </div>
  )
}

export default FacebookPagePostsShares