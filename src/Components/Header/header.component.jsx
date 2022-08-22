import './header.scss'

import { GreyBuilding, PlusIcon, IconSearch } from '../SVG/SVG.component';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () =>{
    const [buttonState,setButtonState] = useState([true,false,false])
    const buttonStateChange = (index) => {
        let newState = buttonState.map((value,key) =>{
            if(key === index)
                return true
            return false
        })
        setButtonState(newState)
    }
    return(
        <div className='header'>
            <div className="header__button">
                <div className="header__button-icon">
                    <GreyBuilding/>
                    <h3>Teams</h3>
                </div>
                <button className="header__button-createitem">
                    <PlusIcon/>
                    <p>CREATE NEW TEAM</p>
                </button>
            </div>
            <div className="header__tabs">
                {
                    buttonState &&
                    <div className='header__tabs--box'>
                        <Link className={(buttonState[0] === true)?'header__tabs--box-options active':'header__tabs--box-options'} to="/" onClick={()=>{
                            buttonStateChange(0)
                        }}>
                            All
                        </Link>
                        <Link className={(buttonState[1] === true)?'header__tabs--box-options active':'header__tabs--box-options'} to="/favorites" onClick={()=>{
                            buttonStateChange(1)
                        }}>
                            Favorites
                        </Link>
                        <Link className={(buttonState[2] === true)?'header__tabs--box-options active':'header__tabs--box-options'} to="/archived" onClick={()=>{
                            buttonStateChange(2)
                        }}>
                            Archived
                        </Link>
                    </div>
                }

                <div className='header__tabs-footer'>
                    <IconSearch className="iconsearch"/>
                    <input placeholder='Search team name ...' className='searchBar'/>
                </div>
            </div>
        </div>
    )
}

export default Header;