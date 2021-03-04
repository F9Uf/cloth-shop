import React, { useState } from 'react'
import TheMenu from '../TheMenus'

import facebookIcon from '../../assets/icon/facebook.svg'
import lineIcon from '../../assets/icon/line.svg'
import instagramIcon from '../../assets/icon/instagram.svg'
import twitterIcon from '../../assets/icon/twitter.svg'

const TheFooter = ({ menus=[] }) => {
  return (
    <footer className="py-5 px-3 sm:px-28 bg-black text-white flex flex-col">
      <div className="footer-menu pb-4 font-extralight text-xs flex flex-row justify-between">
        <div className="sub">
          <h1 className="mb-4 font-medium text-lg">Menus</h1>
          <TheMenu menus={menus} direction="col" />
        </div>
        <div className="sub pt-5 grid grid-flow-row grid-cols-4">
          <img src={facebookIcon} alt="facebook-icon" className="w-5 ml-2 cursor-pointer hover:opacity-70 transition-all"/>
          <img src={lineIcon} alt="line-icon" className="w-5 ml-2 cursor-pointer hover:opacity-70 transition-all"/>
          <img src={instagramIcon} alt="instagram-icon" className="w-5 ml-2 cursor-pointer hover:opacity-70 transition-all"/>
          <img src={twitterIcon} alt="twitter-icon" className="w-5 ml-2 cursor-pointer hover:opacity-70 transition-all"/>
        </div>
      </div>
      <div className="copyright flex flex-row justify-between text-xs pt-5 border-t border-white border-opacity-70 space-x-5">
        <div className="sub text-left">
          Copyright © 2021 CLOTH SHOP Thailand™
        </div>
        <div className="sub font-extralight text-right">
          <a href="/">Privacy & Cookie</a> | <a href="/">Policy Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
