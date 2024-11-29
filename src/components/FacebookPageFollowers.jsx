import React from 'react'

const FacebookPageFollowers = ({pageFollowers}) => {
    
  return (
    <div>
        <h2>Facebook Page FOllwers</h2>
        <h5>{pageFollowers.followers_count}</h5>
    </div>
  )
}

export default FacebookPageFollowers