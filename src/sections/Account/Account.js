import React from 'react'
import './Account.scss'

const Account = () => {
  return (
    <>
      <div className="account-mobile">
        <div className="texts-mobile">
          <span className="howto-mobile">How the app works</span>
          <div className="divider-mobile"></div>
          <span className="create-mobile">Create an account</span>
          <h1 className="title-create-mobile">Create/login to an existing account to get started</h1>
          <p className="subtitle-create-mobile">An account is created with your email and a desired password</p>
        </div>
        <img className="img-mobile" src="/img/account.png" alt="" />

        <div className="texts-mobile">
          <span className="create-mobile">Explore while shopping</span>
          <h1 className="title-create-mobile">Shop for your favorites meal as e dey hot</h1>
          <p className="subtitle-create-mobile">Shop for your favorite meals or drinks and enjoy while doing it.</p>
        </div>
        <img className="img-mobile" src="/img/account.png" alt="" />

        <div className="texts-mobile">
          <span className="create-mobile">Checkout</span>
          <h1 className="title-create-mobile">When you done check out and get it delivered</h1>
          <p className="subtitle-create-mobile">When you done check out and get it delivered with ease.</p>
        </div>
        <img className="img-mobile" src="/img/account.png" alt="" />

      </div>





      <div className="account-desktop">
        <div className="texts-desktop">
          <div className="divider-desktop"></div>
          <span className="howto-desktop">How the app works</span>

          <div className="creating-desktop">
            <img className="img-desktop" src="/img/account.png" alt="" />
            <div className="description-desktop">
              <span className="create-desktop">Create an account</span>
              <h1 className="title-create-desktop">Create/login to an existing account to get started</h1>
              <p className="subtitle-create-desktop">An account is created with your email and a desired password</p>
            </div>
          </div>

          <div className="creating-desktop">
            <div className="description-desktop">
              <span className="create-desktop">Explore varieties</span>
              <h1 className="title-create-desktop">Shop for your favorites meal as e dey hot.</h1>
              <p className="subtitle-create-desktop">Shop for your favorite meals or drinks and enjoy while doing it.</p>
            </div>
            <img className="img-desktop" src="/img/shop.png" alt="" />
          </div>

          <div className="creating-desktop">
            <img className="img-desktop" src="/img/checkout.png" alt="" />
            <div className="description-desktop">
              <span className="create-desktop">Checkout</span>
              <h1 className="title-create-desktop">When you done check out and get it delivered.</h1>
              <p className="subtitle-create-desktop">When you done check out and get it delivered with ease.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Account
