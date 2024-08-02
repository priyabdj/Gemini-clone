import React ,{useState}from 'react'
import './sideBar.css';
import {assets} from '../../assets/assets'
const SideBar = () => {
const [extended,setExtended]=useState(false)

  return (
    <div className='sideBar'>
<div className="top">
<img onClick = {()=>setExtended(prev=>!prev)}className='menu' src={assets.menu_icon} alt =''/>
<div className="new-chat">
  <img src={assets.plus_icon} alt="" />
 {extended ?<p> New Chat</p>:null}
</div>
{extended ?<div className="recent">
  <p className="recent-title">
    Recent
  </p>
  <div className="recent-entry">
    <img Src ={assets.message_icon} alt=""/>
    <p>What is react...</p>
  </div>
</div> :null }

</div>
<div className="bottom">
<div className="botton-item recent-entry">
  <img Src ={assets.question_icon} alt=""/>
 {extended ?<p>Help</p>:null } 

</div>
<div className="botton-item recent-entry">
  <img Src ={assets.history_icon} alt=""/>
  {extended ? <p>Activity</p> :null}

</div>
<div className="botton-item recent-entry">
  <img Src ={assets.setting_icon} alt=""/>
  {extended ? <p>Settings</p> : null }

</div>
</div>
    </div>
  )
}

export default SideBar