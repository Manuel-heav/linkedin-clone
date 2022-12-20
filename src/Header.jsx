import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />

        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>
        </div>

        <div className="header__right">
          
        </div>
    </div>
  )
}

export default Header