import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  // Need to declare class structure like this if you're not using private or readonly
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
