import './sidenav.scss'
import { Building, IconHelp, IconLead, IconReport, Logo, MessageIcon } from '../SVG/SVG.component';
const SideNav = () =>{
    return(
        <div className='sideNav'>
            <div className="sideNav-container">
                <div className="sideNav-container--box">
                    <Logo/>
                </div>
                <div className="sideNav-container--box">
                    <MessageIcon/>
                </div>
                <div className="sideNav-container--box">
                    <Building/>
                </div>
                <div className="sideNav-container--box">
                    <IconLead/>
                </div>
                <div className="sideNav-container--box">
                    <IconReport/>
                </div>
            </div>
            <div className="sideNav-footer">
                <div className="sideNav-footer--box">
                    <IconHelp/>
                </div>
            </div>
        </div>
    )
}

export default SideNav;