import React from 'react'
import ContentLoader from 'react-content-loader'
const IsFile = props => (
  <ContentLoader viewBox="0 0 400 130" height={130} width={400} {...props} className='loader'>
    <rect x="0" y="0" rx="3" ry="3" width="450" height="10" />
    <rect x="0" y="20" rx="3" ry="3" width="450" height="10" />
    <rect x="0" y="40" rx="3" ry="3" width="450" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="450" height="10" />
  </ContentLoader>
)
export default IsFile
