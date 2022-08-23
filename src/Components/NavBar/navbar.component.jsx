import './navbar.scss'
import {MenuNotification, CaratDown} from '../SVG/SVG.component';
import { useContext } from 'react';
import { DataContext } from '../../Context/data.context';

const NavBar = () =>{
    const {data} = useContext(DataContext)

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
            <div className='navBar-right'>
                    {
                        (data!== null)
                        ?
                            <div className="navBar-right-menu">
                                <MenuNotification>
                                </MenuNotification>
                                <div className='notifications_count'>
                                    {data.current_user.notifications_count}
                                </div>
                            </div>
                        :null
                    }
                    {
                        (data!== null)
                        ?
                            <div className="navBar-right-box profileBox">
                                <p className='profile-info'>Hello, {data.current_user.name}</p>
                                <img src={data.current_user.avatar} alt="profilephoto"  className='img'/>
                                <CaratDown/>
                            </div>
                        :null

                    }
            </div>
        </div>
    )
}

export default NavBar;