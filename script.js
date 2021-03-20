var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var week = ['일요일 😭', '월요일 🥳', '화요일 😁', '수요일 😀', '목요일 😁', '금요일 🥳', '토요일 😭'];
function input() {
    var yearInput = document.getElementById("input").value;
    year = yearInput;
}
function samIlJul() {
    var dayOfWeek = week[new Date(`${year}-03-01`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function kidsDay() {
    var dayOfWeek = week[new Date(`${year}-05-05`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function hyunchungIl() {
    var dayOfWeek = week[new Date(`${year}-06-06`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function independence() {
    var dayOfWeek = week[new Date(`${year}-08-15`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function gaeCheonJul() {
    var dayOfWeek = week[new Date(`${year}-10-03`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function hanGulDay() {
    var dayOfWeek = week[new Date(`${year}-10-09`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
function christmas() {
    var dayOfWeek = week[new Date(`${year}-12-25`).getDay()];
    Swal.fire({ icon: "info", title: dayOfWeek });
}
