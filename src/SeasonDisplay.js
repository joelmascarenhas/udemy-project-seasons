import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text : "Lets hit the beach!",
        iconName : 'sun'
    },
    winter: {
        text : 'Burr it is cold',
        iconName : 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    //TO check if lat is coming in the props = console.log(props.lat);
    const season = getSeason(props.lat,new Date().getMonth());
    //const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    //const icon = season === 'winter' ? 'snowflake' : 'sun';
    //Instead of doing the steps above, we can just do this
    const {text,iconName} = seasonConfig[season]
    
    
    
    //To check if season is coming back from func above console.log(season);
    return (
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;