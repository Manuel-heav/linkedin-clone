import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C9ZceNHTWzM7QKILi70TgQHaE8%26pid%3DApi&f=1&ipt=e2d78353af0ff07a27b6b646c4971c1537507c827a3be5aef3c2c0c139bbb0b9&ipo=images" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Manuel Heav</h2>
            <h4>manuelheav@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you?</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>


        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('softwaredesign')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar