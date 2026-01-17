date_picker = new Date()
console.log("The defined date_picker:-", date_picker, " the type:-", typeof date_picker)

// - Converted String of Date(Name of the Day Month Date Year Local time):
console.log(".toString() Like Mon Jan 12 2026 23:12:27 GMT+0600:-", date_picker.toString())


// - Converted Locale Date String of Date(Like only dd/month/year):
console.log(".toLocaleDateString() Like  1/12/2026:-", date_picker.toLocaleDateString())

// - Converted Locale String of Date(Like dd/month/year, hour:minute:second AM/PM):
console.log(".toLocaleString() Like  1/12/2026, 11:25:28 PM :-", date_picker.toLocaleString())


// - Converted Locale Time String of Date 12 Hour Format with AM/PM (Like Hour:Minute:Second AM/PM):
console.log(".toLocaleTimeString() Like only time 11:35:20 PM :-", date_picker.toLocaleTimeString())

// - Converted ISO String of Date (Year-Month-DayThh:mm:ssZ)
console.log(".toISOString() Like 2026-01-12T17:12:27.838Z:-", date_picker.toISOString())

//
console.log(".toJSON() format date like 2026-01-12T17:35:20.982Z :-", date_picker.toJSON())

// To get Month
console.log("Month of the Date:", date_picker.getMonth() + 1)
// To get Day of the date(date_object.getDate())

console.log("Day of the Date:", date_picker.getDate())
console.log('Name of today [Default Locale String]:', date_picker.toLocaleString('default', {
    weekday: 'long'
}))
