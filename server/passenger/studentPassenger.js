import { Passenger } from "./passenger.js";

export class StudentPassenger extends Passenger{

    constructor(name,IDnumber,amountOfMoney,placeOfStudy){
        super(name,IDnumber,amountOfMoney),
        this.placeOfStudy = placeOfStudy
    }
}