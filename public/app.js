import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
// inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS EXAMPLE
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: "Yoshi", age: 40 });
console.log(docOne.name);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: "James",
};
const docFive = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: [{ name: "Star Wars" }, { director: "George Lucas" }],
};
console.log(docFour, docFive);
// tuples
// With regular arrays, you can change the type of an index, as long as that type is permitted in the array
let arr = ["snail", 4, true];
arr[0] = false; // Works fine
// With tuples, you can define the accepted type for each index
let tup = ["snail", 4, true];
// tup[0] = false --> Throws an error, because you can't redefine the type of tup[]
tup[0] = "horse"; // works fine, since it's still a string
