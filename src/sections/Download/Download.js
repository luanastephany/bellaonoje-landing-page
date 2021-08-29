import React from 'react'
import './Download.scss'
import Button from '../../components/Button'


const Download = () => {
  return (
    <>
      <div className="download-mobile">
        <h1 className="cta-mobile">Download the app now.</h1>
        <p className="sub-mobile">Most calendars are designed for teams. </p>

        <div className="mobile-btns">
          <Button>Buy Now</Button>
          <Button transparent>Try for free</Button>
        </div>
      </div>

      <div className="download-desktop">
        <h1 className="cta-desktop">Download the app now.</h1>
        <p className="sub-desktop">Available on your favorite store. Start your premium experience now</p>

        <div className="desktop-btns">
          <Button>PlayStore</Button>
          <Button transparent>App store</Button>
        </div>


      </div>

    </>
  )
}

export default Download
