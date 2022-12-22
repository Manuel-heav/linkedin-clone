import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption';
const Feed = () => {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="feed__inputOptions">
                <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9"/>
                <InputOption title="Videos" Icon={SubscriptionsIcon} color="#e7a33e"/>
                <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd"/>
                <InputOption title="Write" Icon={CalendarViewDayIcon} color="#7fc15e"/>
            </div>
        </div>
    </div>
  )
}

export default Feed