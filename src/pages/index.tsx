import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {
  const [customer, setCustomer] = useState<Customer>(Customer?.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const customers = [
    new Customer("Ana", 34, "1"),
    new Customer("Igor", 24, "2"),
    new Customer("Fernanda", 34, "3"),
    new Customer("Alan", 34, "4"),
    new Customer("Vanessa", 34, "5"),
  ];

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    setVisible("form");
  }

  function removedCustomer(customer: Customer) {
    console.log("Excluir: ", customer?.name);
  }

  function createdCustomer(customer: Customer) {
    console.log("Criar", customer);
    setVisible("table");
  }

  function createNewCustomer() {
    setCustomer(Customer.empty());
    setVisible("form");
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout title="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4"
                color="green"
                onClick={createNewCustomer}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              customers={customers}
              selectedCustomer={selectedCustomer}
              removedCustomer={removedCustomer}
            />
          </>
        ) : (
          <Form
            customer={customer}
            chengedCustomer={createdCustomer}
            cancelForm={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
