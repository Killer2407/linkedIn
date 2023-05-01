import { Avatar } from '@mui/material'
import './Sidebar.css'

function Sidebar() {

    //A function which renders based on the argument passed.
    const recentItems = (title) => {
        return (
            <div className='recentItems'>
                <span className='sideHash'>#</span>
                <p>{title}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className='sidebar_top'>
                <img src="https://media.licdn.com/dms/image/D4E16AQERE23Twjry9A/profile-displaybackgroundimage-shrink_350_1400/0/1679492979820?e=1688601600&v=beta&t=8VHKpOEDXhYB2tR168WQgukkIwjEWECfxS8F0jdP4zs"
                    alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Aniket Munim</h2>
                <h4>aniketmunim.us@gmail.com</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2344</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>2543</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('react-redux')}
                {recentItems('nodejs')}
                {recentItems('javascript')}
                {recentItems('typescript')}
            </div>
        </div>
    )
}

export default Sidebar
