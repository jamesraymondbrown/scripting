"use strict";
// classes
class Invoice {
    // private client: string;
    // private details: string;
    // private amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Joe", "grass cutting", 50);
const invTwo = new Invoice("Jim", "grass growing", 300);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
// inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
