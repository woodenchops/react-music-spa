import React from 'react';
import PlayIcon from '../../assets/images/play-button.png';
import './PlayButtonStyles.scss';


const PlayButton = ({color}) => {
    return ( 
        <div className={`cp-play-icon cp-play-icon--${color}`}>
            <img src={PlayIcon} alt="Play Icon"/>
         </div>
     );
}

PlayButton.defaultProps = {
    color: 'red'
}
 
export default PlayButton;