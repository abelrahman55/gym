import './footer.css';
import React from 'react'
import {logo,github,instagram,linkedin} from '../ExportImages'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="blur footer-blur-left"></div>
      <div className="footer-content">
        <div className="social">
          <a href="http://github.com" target={'_blank'}><img src={github} alt="" /></a>
          <a href="http://instagram.com" target={'_blank'}><img src={instagram} alt="" /></a>
          <a href="http://linkedin.com" target={'_blank'}><img src={linkedin} alt="" /></a>
        </div>
        <img src={logo} alt="" className='logo'/>
      </div>
      <div className="blur footer-blur-right"></div>
    </div>
  )
}

export default Footer