import test from "node:test"
import assert from "node:assert/strict"
import { RegularPassenger } from "./server/passenger/regularPassenger.js"
import { StudentPassenger } from "./server/passenger/studentPassenger.js"
import { Airport } from "./server/airport.js"


const airport = new Airport()

const passenger1 = new RegularPassenger("avi",123,1000,"google",true)
const passenger2 = new StudentPassenger("David",4567,10000,"IDF")


airport.flight[0].buyRgulerTickt(passenger1)
airport.flight[1].buyVipTickt(passenger2)


test("test not enough money", () => { assert.equal(airport.flight[0].buyRgulerTickt(passenger1), false) })



test("test buy tickt update name", () => { assert.equal(airport.flight[1].ticketsList.vip[0].ownerName, "David") })
test("test buy tickt chnge money", () => { assert.equal(passenger2.getAmountOfMoney(), 0) })