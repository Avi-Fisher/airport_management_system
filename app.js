import { Airport } from "./server/airport.js";
import { RegularPassenger } from "./server/passenger/regularPassenger.js";
import { StudentPassenger } from "./server/passenger/studentPassenger.js";


const airport = new Airport

const passenger1 = new RegularPassenger("avi",123,5000,"google",true)
const passenger2 = new StudentPassenger("David",4567,8888,"IDF")


airport.flight[0].buyRgulerTickt(passenger1)
airport.flight[1].buyVipTickt(passenger2)



