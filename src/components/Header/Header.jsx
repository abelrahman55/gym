import './header.css';
import React, { useState } from 'react'
import { logo,bars } from '../ExportImages';
import {Link} from 'react-scroll'
const Header = () => {
  const mobile=window.innerWidth<=768 ? true:false;
  const [menuOpened,setmenuOpened]=useState(false);
  return (
    <div className='header'>
      <img src={logo} alt="" className='logo'/>
      {menuOpened === false && mobile === true ? (
        <div
        style={{backgroundColor:'var(--appColor)',
        padding:"0.5rem",
        borderRadius:'5px'}}
        onClick={()=>{
          setmenuOpened(true)
        }}
        >
          <img src={bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} className='bar'/>
        </div>
        ):(
          <ul className='header-menu'>
          <li>
            <Link
            to='home'
            spy={true}
            onClick={()=>{setmenuOpened(false)}}
            >Home</Link>  
          </li>
          <li>
            <Link
            onClick={()=>{setmenuOpened(false)}}
            to='programms'
            spy={true}
            smooth={true}
            >Programs</Link>
          </li>
          <li >
            <Link 
            to='choosing'
            onClick={()=>{setmenuOpened(false)}}
            spy={true}
            smooth={true}
            >Why Us</Link>
          </li>
          <li>
            <Link 
            onClick={()=>{setmenuOpened(false)}}
            to='plans'
            spy={true}
            smooth={true}
            >Plans</Link>
          </li>
          <li >
            <Link
            onClick={()=>{setmenuOpened(false)}}
            to='testmonials' 
            spy={true} 
            smooth={true}>
            Testmonials
            </Link>
          </li>
        </ul>
        )
      }
    </div>
  )
}

export default Header