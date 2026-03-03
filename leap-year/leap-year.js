/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

// import  the moment node module..
import moment from "moment";

// get user input..
let year = Number(process.argv[2]);

if (moment([year]).isLeapYear()) {
    console.log(`${year} is a leap year!`);
} else {
    console.log(`${year} is not a leap year!`);
}
