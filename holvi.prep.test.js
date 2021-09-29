const { test, expect } = require("@jest/globals");
const { parseHolviDate } = require('./holvi.prep')

test("accept date with single digit day ", () => {

  let dateString = "404"

  expect(parseHolviDate(dateString)).toEqual("2021.04.04")
})

test("accept date with double digit day ", () => {

  let dateString = "1004"

  expect(parseHolviDate(dateString)).toEqual("2021.04.10")
})

test("accept empty string with no date string ", () => {
  let dateString = ""

  expect(parseHolviDate(dateString)).toEqual("")
})
