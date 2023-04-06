import { hasFormatter } from '../utilities/utilities.js'

export class Invoice implements hasFormatter {
    constructor(
        private readonly client: string,
        private details: string,
        private amount: number
    ) { }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}