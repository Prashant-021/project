import { hasFormatter } from "../utilities/utilities.js"

export class Payment implements hasFormatter{
    constructor(
        private readonly recipient: string,
        private details: string,
        private amount: number
    ) { }

    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}