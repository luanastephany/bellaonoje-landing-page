import './Hero.scss'
import React from 'react'
import ButtonRound from '../../components/ButtonRound/ButtonRound'

const Hero = () => {
  return (
    <>
      <div className="hero-mobile">
        <div className="texts-mobile">
          <span>Food app</span>
          <h1 className="title-mobile">Why stay hungry when you can order form Bella Olonje</h1>
          <p className="subtitle-mobile">Download the bella olonje’s food app now on </p>
        </div>

        <div className="mobile-btns">
          <ButtonRound>PlayStore</ButtonRound>
          <ButtonRound>App store</ButtonRound>
        </div>
        <img className="hero-img" src="/img/hero.png" alt="" />
      </div>


      <div className="hero-desktop">
        <div className="texts-desktop">
          <span>Food app</span>
          <h1 className="title-desktop">Why stay hungry when you can order form Bella Olonje</h1>
          <p className="subtitle-desktop">Download the bella olonje's food app now on</p>
        </div>

        <div className="desktop-btns">
          <ButtonRound>PlayStore</ButtonRound>
          <ButtonRound>App store</ButtonRound>
        </div>

        <img className="hero-desk-img" src="/img/hero.png" alt="" />

      </div>



    </>
  )
}

export default Hero
