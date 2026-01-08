import { Ticket } from "./ticket.js";

export class VIPticket extends Ticket {

    constructor(ticktNumber, price, ownerName = undefined,) {
        super(ticktNumber, price, ownerName = undefined),
            this.benefits = ["Free alcohol", "Free food", "Hot towels"]
    }
}