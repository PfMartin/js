let val;

const today = new Date();
let birthday = new Date('01-26-1992');
birthday = new Date('January 26 1992');
birthday = new Date('01/26/1992');

val = today.getMonth() + 1;
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// Timestamp
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(26);
birthday.setFullYear(1992);
birthday.setHours(3);
birthday.setMinutes(34);
birthday.setSeconds(5);

console.log(birthday);