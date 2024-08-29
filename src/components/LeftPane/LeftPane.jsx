import React from 'react'
import "./leftPane.css"
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import GroupsIcon from '@mui/icons-material/Groups';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="LeftPaneContainer">
        <div className="LeftPaneMenu">
          <li className="leftPaneMenuItems">
            <MarkEmailUnreadIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Messages</span>
          </li>

          <li className="leftPaneMenuItems">
            <GroupsIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Group</span>
          </li>

          <li className="leftPaneMenuItems">
            <FlagIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Pages</span>
          </li>

          <li className="leftPaneMenuItems">
            <CalendarMonthIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Event</span>
          </li>

          <li className="leftPaneMenuItems">
            <SportsEsportsIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItems">
            <LocalGroceryStoreIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Market</span>
          </li>
          <li className="leftPaneMenuItems">
            <NewspaperIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItems">
            <SettingsIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Setting</span>
          </li>
          <li className="leftPaneMenuItems">
            <LogoutIcon className='LeftPaneMenuItemIcon'/>
            <span className="LeftPaneMenuText">Log Out</span>
          </li>

          <hr/>

          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          
          <div className="pageList">
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          <li className="pagesListItem">
            <img src=" /images/1.jpg" alt="" className="pagepic" />
            <span className="pagename">Code with Jnaruzax</span>
          </li>
          </div>

        </div>
      </div>

    </div>
  )
}
