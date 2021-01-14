

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon,CodeReviewIcon,FileBinaryIcon,CpuIcon,TerminalIcon,BroadcastIcon,ServerIcon,KeyIcon,ShareIcon,HubotIcon,MortarBoardIcon,TelescopeIcon } from '@primer/octicons-react';

export default function ChatList({ user }) {
    useEffect(() => {
        console.log(user);
    }, [])
    return (
        <div className="chat-list">
            <Link to={{ pathname: '/chat/' + 'general', state: { user } }}><GlobeIcon size={24} />General </Link>
            <Link to={{ pathname: '/chat/' + 'code', state: { user } }}><CodeReviewIcon size={24} /> Code</Link>
            <Link to={{ pathname: '/chat/' + 'cyber', state: { user } }}><FileBinaryIcon size={24} />Cyber Security</Link>
            <Link to={{ pathname: '/chat/' + 'hardware', state: { user } }}><CpuIcon size={24} /> Hardware</Link>
            <Link to={{ pathname: '/chat/' + 'linux', state: { user } }}><TerminalIcon size={24} /> Linux</Link>
            <Link to={{ pathname: '/chat/' + 'networking', state: { user } }}><BroadcastIcon size={24} />Networking</Link>
            <Link to={{ pathname: '/chat/' + 'sdatabases', state: { user } }}><ServerIcon size={24} /> Databases</Link>
            <Link to={{ pathname: '/chat/' + 'cryptography', state: { user } }}><KeyIcon size={24} /> Cryptography</Link>
            <Link to={{ pathname: '/chat/' + 'cloud', state: { user } }}><ShareIcon size={24} />Cloud</Link>
            <Link to={{ pathname: '/chat/' + 'robotics', state: { user } }}><HubotIcon size={24} /> Robotics</Link>
            <Link to={{ pathname: '/chat/' + 'students', state: { user } }}><MortarBoardIcon size={24} /> Students</Link>
            <Link to={{ pathname: '/chat/' + 'alienTech', state: { user } }}><TelescopeIcon size={24} /> Alien Tech</Link>
        </div>
    )
}
