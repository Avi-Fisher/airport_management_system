import { Passenger } from "./passenger.js";

export class RegularPassenger extends Passenger{

    constructor(name,IDnumber,amountOfMoney,Workplace,knowesAnAirportEmployee){
        super(name,IDnumber,amountOfMoney),
        this.placeOfStudy = Workplace,
        this.knowesAnAirportEmployee = knowesAnAirportEmployee
    }
}
    