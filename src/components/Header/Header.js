import './Header.scss'
import React, { useState } from 'react'
import useMobile from "../../useMobile";
import Drawer from '@material-ui/core/Drawer'
import { FaHome, FaShoppingBag, FaQuestionCircle, FaPhoneSquareAlt } from 'react-icons/fa'

const Header = () => {
  const isMobile = useMobile(768)
  const [open, setOpen] = useState(false)

  if (isMobile) {
    return (
      <>
        <div className="header-mobile">
          <img className="logo" src="/img/logo.png" alt="" />
          <img onClick={() => setOpen(true)} className="menu" src="/img/menu.png" alt="" />
        </div>

        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="menu-mobile">
            <ul>
              <li>
                <FaHome color="white" />
                <span className="text-mobile">Home</span>
              </li>
              <div className="divider"></div>

              <li>
                <FaShoppingBag color="white" />
                <span className="text-mobile">Product</span>
              </li>
              <div className="divider"></div>

              <li>
                <FaQuestionCircle color="white" />
                <span className="text-mobile">Faq</span>
              </li>
              <div className="divider"></div>

              <li>
                <FaPhoneSquareAlt color="white" />
                <span className="text-mobile">Contact</span>
              </li>
            </ul>
          </div>
        </Drawer>
      </>
    )
  }

  return (
    <>
      <div className="header-desktop">
        <img className="logo-desktop" src="/img/left.svg" alt="" />

        <div className="menu-desktop">
          <ul>
            <li className="text-desktop">Home</li>
            <li className="text-desktop">Product</li>
            <li className="text-desktop">Faq</li>
            <li className="text-desktop">Contact</li>
          </ul>
        </div>
      </div>

    </>
  )


}

export default Header
