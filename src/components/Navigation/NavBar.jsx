import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css";

export default function NavBar() {
  return (
      <div className="navBarBox">
        <div className="navBarLeft">
          <span className='logo'>FBClone</span>
        </div>
        <div className="navBarCenter">
          <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder="Search for Your Friend" className="searchInput" />
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="NavbarLink">HomePage</span>
            <span className="NavbarLink">Profile</span>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcon">
              <PersonIcon/>
              <span className="Icontag">3</span>
            </div>
            <div className="navBarIcon">
              <ForumIcon/>
              <span className="Icontag">5</span>
            </div>
            <div className="navBarIcon">
              <SettingsIcon/>
              <span className="Icontag">2</span>
            </div>
          </div>
          <div className="pic">
            <img src="/images/1.jpg" alt="" className="profilePic" />
          </div>
        </div>
      </div>
  )
}
