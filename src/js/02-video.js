import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const TIME_SAVED = "videoplayer-current-time";
const timeNow = JSON.parse(localStorage.getItem(TIME_SAVED)) ?? [];

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

function setTime ({ seconds }) {
   
    const timePlayer = seconds;
    if (!timeNow.length) {
        timeNow.push(timePlayer);
    } else {
        timeNow.pop()
        timeNow.push(timePlayer)
    }
     return localStorage.setItem(TIME_SAVED, JSON.stringify(timeNow))   
}

player.on('timeupdate', throttle(setTime, 1000));


player.setCurrentTime(timeNow).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:

            break;
    }
});



  

