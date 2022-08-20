import './navbar.scss'
import {MenuNotification, CaratDown} from '../SVG/SVG.component';
import profilePhoto from '../Img/john.png'

const NavBar = () =>{
    return(
        <div className='navBar'>
            <div className='navBar_box'>
                <div className="navBar-left">
                    <h1 className="mainText">
                        NARWHAL
                    </h1>
                </div>
                <div className="navBar-left">
                    <h2 className="subText">
                        Teams
                    </h2>
                </div>
            </div>
            <div className='navBar_box'>
                <div className="navBar-right">
                    <div className="navBar-right-box">
                        <MenuNotification/>
                    </div>
                </div>
                <div className="navBar-right">
                    <div className="navBar-right-box profileBox">
                        <p className='profile-info'>Hello, John</p>
                        <img src={profilePhoto} alt="profilephoto" />
                        <CaratDown/>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default NavBar;