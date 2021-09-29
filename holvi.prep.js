function parseHolviDate(dateString) {

  dateString = dateString.toString()

  let stringCharacters = [...dateString]

  if (stringCharacters.length == 0) {
    return ""
  }

  // split string
  let day = stringCharacters.slice(0, -2).join("")
  let month = parseInt(stringCharacters.slice(-2).join(""))

  // construct date
  let constructedDate = new Date(2021, month, day)

  // format date
  let fmt_year = constructedDate.getFullYear()
  let fmt_month = constructedDate.getMonth()
  let fmt_day = constructedDate.getDate()

  if (fmt_month.toString().length == 1) {
    fmt_month = `0${fmt_month}`
  }
  if (fmt_day.toString().length == 1) {
    fmt_day = `0${fmt_day}`
  }

  return `${fmt_year}.${fmt_month}.${fmt_day}`


}


exports.parseHolviDate = parseHolviDate
