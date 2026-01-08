export class Passenger{

    #IDnumber
    #amountOfMoney
    
    constructor(name,IDnumber,amountOfMoney){
        this.name = name,
        this.#IDnumber = IDnumber,
        this.#amountOfMoney = amountOfMoney
    }

    getIDnumber(){
        return this.#IDnumber
    }

    getAmountOfMoney(){
        return this.#amountOfMoney
    }

    checkHaveMoney(priceTickt){
        if(this.#amountOfMoney - priceTickt >= 0){
            return true
        }
        return false
    }

    buyTickt(price){
        this.#amountOfMoney -= price
    }
}



