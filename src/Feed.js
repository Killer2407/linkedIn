import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';

function Feed() {
  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input type='text'/>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className='feed_inputOptions'>
                <InputOptions />
            </div>
        </div>
    </div>
  )
}

export default Feed
