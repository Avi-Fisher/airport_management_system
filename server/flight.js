import { RegularPassenger } from "./passenger/regularPassenger.js";
import { Ticket } from "./ticket/ticket.js"
import { VIPticket } from "./ticket/VIPticket.js"

import Chance from "chance";

export class Flight {

    constructor(flightName, airline, flightNumber, maxNumberPassenger, regulerTicketPrice, vipTucketPrice,) {
        this.flightName = flightName,
            this.airline = airline,
            this.flightNumber = flightNumber,
            this.maxNumberPassenger = maxNumberPassenger,
            this.regulerTicketPrice = regulerTicketPrice,
            this.vipTucketPrice = vipTucketPrice,
            this.ticketsList = this.createTickets()
    }

    createTickets() {
        let listTickt = { rguler: [], vip: [] }

        let randomList = this.createRandomNumber()

        let rgulerTickt = Math.round(this.maxNumberPassenger * 0.9)
        let vipTickt =  this.maxNumberPassenger - rgulerTickt

        for (let i = 0; i < rgulerTickt; i++) {

            let tickt = new Ticket(randomList.pop(),5000 ,this.regulerTicketPrice)
            listTickt.rguler.push(tickt)
        }

        for (let i = 0; i < vipTickt; i++) {

            let vipTickt = new VIPticket(randomList.pop(),10000, this.vipTucketPrice)
            listTickt.vip.push(vipTickt)
        }
        
        return listTickt
    }

    buyRgulerTickt(passenger) {
        
        let index = this.ticketsList.rguler.findIndex((e) => e.ownerName === undefined)

        if (index >= 0) {
            if (passenger instanceof RegularPassenger) {
                if (passenger.checkHaveMoney(this.ticketsList.rguler[index].price)) {
                    if (passenger.knowesAnAirportEmployee) {
                        this.ticketsList.rguler[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.rguler[index].price * 0.8)
                    } else {
                        this.ticketsList.rguler[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.rguler[index].price)
                    }
                }else{
                    return false
                }
            }
            else {
                if(passenger.checkHaveMoney(this.ticketsList.rguler[index].price)){
                    if (passenger.checkHaveMoney(this.ticketsList.rguler[index].price)) {
                        this.ticketsList.rguler[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.rguler[index].price * 0.9)
                    }
                }else{
                    return false
                }
            }
        }
    }

    buyVipTickt(passenger) {

        let index = this.ticketsList.vip.findIndex((e) => e.ownerName === undefined)

        if (index >= 0) {
            if (passenger instanceof RegularPassenger) {
                if (passenger.checkHaveMoney(this.ticketsList.vip[index].price)) {
                    if (passenger.knowesAnAirportEmployee) {
                        this.ticketsList.vip[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.vip[index].price * 0.85)
                    } else {
                        this.ticketsList.vip[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.vip[index].price)
                    }
                }else{
                    return false
                }
            }
            else {
                if(passenger.checkHaveMoney(this.ticketsList.vip[index].price)){
                    if (passenger.checkHaveMoney(this.ticketsList.vip[index].price)) {
                        this.ticketsList.vip[index].ownerName = passenger.name
                        passenger.buyTickt(this.ticketsList.vip[index].price)
                    }
                }
            }
        }
    }

    createRandomNumber() {

        let chance = new Chance
        let randomList = chance.unique(chance.natural, this.maxNumberPassenger, { min: 10000, max: 100000 })

        return randomList
    }


}

