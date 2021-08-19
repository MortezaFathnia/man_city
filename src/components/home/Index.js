import React from 'react';
import Featured from './featured/Index';
import Matches from './matches/Index';
import MeetPlayers from './meetPlayers';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
        </div>
    )
}

export default Home;
