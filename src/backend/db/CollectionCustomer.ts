import firebase from "../config";
import Customer from "../../core/Customer";
import CustomerRepository from "../../core/CustomerRepository";

export default class CollectionCustomer implements CustomerRepository {
  #conversor = {
    toFirestore(customer: Customer) {
      return {
        name: customer?.name,
        age: customer?.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Customer {
      const data = snapshot.data(options);

      return new Customer(data?.name, data?.age, snapshot?.id);
    },
  };

  async create(customer: Customer): Promise<Customer> {
    return null;
  }
  async remove(customer: Customer): Promise<void> {
    return null;
  }
  async getAll(): Promise<Customer[]> {
    return null;
  }
}
