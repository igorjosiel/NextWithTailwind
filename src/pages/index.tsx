import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {
  const customers = [
    new Customer('Ana', 34, '1'),
    new Customer('Igor', 24, '2'),
    new Customer('Fernanda', 34, '3'),
    new Customer('Alan', 34, '4'),
    new Customer('Vanessa', 34, '5'),
  ];

  function selectedCustomer(customer: Customer) {
    console.log('Editar: ', customer?.name);
  }

  function removedCustomer(customer: Customer) {
    console.log('Excluir: ', customer?.name);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500`
    }>
      <Layout title="Cadastro Simples">
        <Table
          customers={customers}
          selectedCustomer={selectedCustomer}
          removedCustomer={removedCustomer}
        />
      </Layout>
    </div>
  );
}
