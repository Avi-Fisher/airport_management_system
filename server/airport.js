import { Flight } from "./flight.js"
import { input, input_int } from "./uttils.js"

export class Airport {

    constructor() {
        this.flight = this.create3Flight()

    }

    create3Flight() {
        const flights = []

        for (let i = 0; i < 3; i++) {

            let flightName = input(`enter flightName for flight${i + 1}:  `)
            let airline = input(`enter air line name for flight${i + 1}:  `)
            let flightNumber = input_int(`enter flight number for flight${i + 1}:  `)
            let maxNumberPassenger = input_int(`enter max number passenger for flight${i + 1}:  `)

            let flight = new Flight(flightName,airline,flightNumber,maxNumberPassenger)

            flights.push(flight)
        }
        return flights
    }
}