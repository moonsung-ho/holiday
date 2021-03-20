var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var week = ['일요일 😭', '월요일 🥳', '화요일 😁', '수요일 😀', '목요일 😁', '금요일 🥳', '토요일 😭'];
function samIlJul() {
    if (3 <= month) {
        var dayOfWeek = week[new Date(`${year + 1}-03-01`).getDay()];
    }
    else {
        var dayOfWeek = week[new Date(`${year}-03-01`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function kidsDay() {
    if (5 <= month) {
        if (5 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-05-05`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-05-05`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-05-05`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function hyunchungIl() {
    if (6 <= month) {
        if (6 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-06-06`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-06-06`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-06-06`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function independence() {
    if (8 <= month) {
        if (15 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-08-15`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-08-15`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-08-15`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function gaeCheonJul() {
    if (10 <= month) {
        if (3 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-10-03`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-10-03`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-10-03`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function hanGulDay() {
    if (10 <= month) {
        if (9 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-10-09`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-10-09`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-10-09`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}
function christmas() {
    if (12 <= month) {
        if (25 <= day) {
            var dayOfWeek = week[new Date(`${year + 1}-12-25`).getDay()];
        } else {
            var dayOfWeek = week[new Date(`${year}-12-25`).getDay()];
        }
    } else {
        var dayOfWeek = week[new Date(`${year}-12-25`).getDay()];
    }
    Swal.fire({icon:"info", title:dayOfWeek});
}