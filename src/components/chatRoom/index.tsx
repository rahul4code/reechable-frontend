import React from 'react'
import VideoContainer from './video/VideoContainer'
import ChatContainer from './chat/ChatContainer'

const Layout = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-9'>
                <VideoContainer />
            </div>
            <aside className='col-span-3'>
                <ChatContainer />
            </aside>
        </div>
    )
}

export default Layout