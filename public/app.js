import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const me = {
    name: "Jim",
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
// const invOne = new Invoice("Joe", "grass cutting", 50);
// const invTwo = new Invoice("Jim", "grass growing", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.format());
// });
// inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
