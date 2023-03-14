/**
 * >> lizzUI.getDateTime()
 */

getDateTime: function (format) {
    let _ = this;

    let today = new Date();
    let y = today.getFullYear();
    let m = ("0"+(today.getMonth()+1)).slice(-2);
    let d = ("0"+today.getDate()).slice(-2);
    let hrs = ("0"+today.getHours()).slice(-2);
    let mins = ("0"+today.getMinutes()).slice(-2);

    let datetime = {
        'date': `${y}/${m}/${d}`,
        'time':  `${hrs}:${mins}`
    }
    return datetime;
},