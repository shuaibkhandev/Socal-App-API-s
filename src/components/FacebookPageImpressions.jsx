import React from 'react'

const FacebookPageImpressions = ({pageImpressions}) => {
    
  return (
    <div>
        <h2>Facebook Page Impressions</h2>
        <h5>{pageImpressions.length}</h5>
    </div>
  )
}

export default FacebookPageImpressions