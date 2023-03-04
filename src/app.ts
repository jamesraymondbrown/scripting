// classes
class Invoice {
  // private client: string;
  // private details: string;
  // private amount: number;

  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Joe", "grass cutting", 50);
const invTwo = new Invoice("Jim", "grass growing", 300);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

// inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
