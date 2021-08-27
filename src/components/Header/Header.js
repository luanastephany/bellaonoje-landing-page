import './Header.scss'
import React, { useState } from 'react'
import useMobile from "../../useMobile";
import Drawer from '@material-ui/core/Drawer'

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
          <div className="header-menu">hello</div>
        </Drawer>
      </>
    )
  }

  return (
    <div>
      header desktop
    </div>
  )


}

export default Header
