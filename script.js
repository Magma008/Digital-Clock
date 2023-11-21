const hour = document.querySelector(".hours")
const minute = document.querySelector(".minutes")
const dayNum = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const week = document.querySelector(".week")
const second = document.querySelector(".seconds")
const ampm = document.querySelector(".pm")

setInterval(() => {
    let day = new Date;
    let h = day.getHours()
    let m = day.getMinutes()
    let s = day.getSeconds()

    let pm = h >= 12 ? "PM" : "AM"
    if (h > 12) {
        h = h-12
    }

    
    let weekDays = day.getDay()
    let date = day.getDate()
    let dateYear = day.getFullYear()
    let hr = h < 10 ? "0" + h : h
    let mn = m < 10 ? "0" + m : m
    let sc = s < 10 ? "0" + s : s
    let weekDay

    if (weekDays === 1) {
        weekDay = "Monday"
    }
    else if (weekDays === 2) {
        weekDay = "Tuesday"
    }
    else if (weekDays === 3) {
        weekDay = "Wednesday"
    }
    else if (weekDays === 4) {
        weekDay = "Thursday"
    }
    else if (weekDays === 5) {
        weekDay = "Friday"
    }
    else if (weekDays === 6) {
        weekDay = "Saturday"
    }
    else if (weekDays === 7) {
        weekDay = "Sunday"
    }
    else {
        alert("There is error in page")
    }

    let monthN = day.getMonth() + 1
    let monthNum 

    if (monthN === 1) {
        monthNum = "January"
    }
    else if (monthN === 2) {
        monthNum = "February"
    }
    else if (monthN === 3) {
        monthNum = "March"
    }
    else if (monthN === 4) {
        monthNum = "April"
    }
    else if (monthN === 5) {
        monthNum = "May"
    }
    else if (monthN === 6) {
        monthNum = "June"
    }
    else if (monthN === 7) {
        monthNum = "July"
    }
    else if (monthN === 8) {
        monthNum = "August"
    }
    else if (monthN === 9) {
        monthNum = "September"
    }
    else if (monthN === 10) {
        monthNum = "October"
    }
    else if (monthN === 11) {
        monthNum = "November"
    }
    else if (monthN === 12) {
        monthNum = "December"
    }


    hour.innerText = hr
    minute.innerText = mn
    second.innerText = sc
    ampm.innerText = pm
    dayNum.innerText = date
    year.innerText = dateYear
    week.innerText = weekDay
    month.innerText = monthNum

}, 1000);