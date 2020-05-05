import React, { useState } from 'react'
import './IframeDemo.scss'

export const IframeDemo = () => {
  return (
    <div className='iframeDemo'>
      <p>
        Below is an iframe with the same page. Changing language on the parent
        should also change it in the iframe
      </p>
      <div className='wrapper'>
        <iframe src='/' />
      </div>
    </div>
  )
}
