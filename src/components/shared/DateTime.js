const getTextDay = (day) => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[day];
};

const getTextDayMonth = (day) => {
    let days = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth','Sixteenth','Seventeenth','Eighteenth','Nineteenth','Twentieth','Twenty-First','Twenty-Second','Twenty-Third','Twenty-Fourth','Twenty-Fifth','Twenty-Sixth','Twenty-Seventh','Twenty-Eighth','Twenty-Ninth','Thirtieth','Thirty-First','Thirty-Second'];
    return days[day - 1];
};

const getTextMonth = (month) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
};

const msToTime = (duration) => {
    let milliseconds = (duration % 1000);
    let seconds = Math.floor(duration / 1000) % 60;
    let minutes = Math.floor(duration / (1000 * 60)) % 60;
    let hours = Math.floor(duration / (1000 * 60 * 60)) % 24;            //  ((duration / number of milliseconds in an hour) 's downward rounded integer) % no of hours in a day
    let days = Math.floor(duration / (1000 * 60 * 60 * 24)) % 30;          
    let months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30)) % 12;          
    let years = Math.floor(duration / (1000 * 60 * 60 * 24 * 30 * 12));          
    
    return [seconds, minutes, hours, days, months, years];
};

const msToTimeText = (duration) => {
    const time = msToTime(duration);
    let timeText = '';

    (time[5] > 1) ? timeText = timeText + time[5]+ ' years ' : 
    (time[4] > 1) ? timeText = timeText + time[4]+ ' months ' : 
    (time[3] > 1) ? timeText = timeText + time[3]+ ' days ' : 
    (time[2] > 1) ? timeText = timeText + time[2]+ ' hours ' : 
    (time[1] > 1) ? timeText = timeText + time[1]+ ' minutes ' : 
    (time[0] > 1) ? timeText = timeText + time[0]+ ' seconds ' :  timeText = timeText;
    
    return timeText;
};

exports.getTextDay = getTextDay;
exports.getTextMonth = getTextMonth;
exports.getTextDayMonth = getTextDayMonth;
exports.msToTime = msToTime;
exports.msToTimeText = msToTimeText;