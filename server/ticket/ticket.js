import {  customAlphabet } from 'nanoid'

export class Ticket{

    static ticketnumber = 1000 

    constructor(numberTickt,price,ownerName = undefined){
        this.numberTickt = numberTickt
        this.price = price,
        this.ownerName = ownerName

    }

    
}


