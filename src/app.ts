import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Jim",
  age: 27,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spend", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

// inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// GENERICS EXAMPLE

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({ name: "Yoshi", age: 40 });

console.log(docOne.name);

// with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docTwo: Resource<string> = {
//   uid: 1,
//   resourceName: "person",
//   data: "James",
// };

// const docThree: Resource<object[]> = {
//   uid: 1,
//   resourceName: "person",
//   data: [{ name: "James" }, { name: "Joe" }],
// };

// ENUMS

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

const docFour: Resource<string> = {
  uid: 2,
  resourceType: ResourceType.AUTHOR,
  data: "James",
};

const docFive: Resource<object[]> = {
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

let tup: [string, number, boolean] = ["snail", 4, true];
// tup[0] = false --> Throws an error, because you can't redefine the type of tup[]
tup[0] = "horse"; // works fine, since it's still a string
