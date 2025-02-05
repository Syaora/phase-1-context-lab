/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    const record = []
    employees.map(employee => record.push(createEmployeeRecord(employee)))
    return record
}

function createTimeInEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ")
    const timeIn = {
        "type": "TimeIn",
        "hour": parseInt(hour),
        "date": date
    }

    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ")
    const timeOut = {
        "type": "TimeOut",
        "hour": parseInt(hour),
        "date": date
    }

    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(day => date === day.date)
    const timeOut = this.timeOutEvents.find(day => date === day.date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(employeeRecord){
    const employeesPay = employeeRecord.map(employee => allWagesFor.call(employee))
    return employeesPay.reduce((current, initial) => current + initial)
}