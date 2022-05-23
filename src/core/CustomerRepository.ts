import Customer from "./Customer";

export default interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  remove(customer: Customer): Promise<void>;
  getAll(): Promise<Customer[]>;
}
