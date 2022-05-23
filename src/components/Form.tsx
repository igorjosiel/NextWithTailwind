import { useState } from "react";

import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  customer?: Customer;
  chengedCustomer: (customer: Customer) => void;
  cancelForm: () => void;
}

export default function Form({
  customer,
  chengedCustomer,
  cancelForm,
}: FormProps) {
  const { id, name, age } = customer;

  const [nameCustomer, setNameCustomer] = useState<string>(name ?? "");
  const [ageCustomer, setAgeCustomer] = useState<number>(age ?? 0);

  return (
    <div>
      {id && (
        <Input text="Código" type="text" value={id} readOnly className="mb-5" />
      )}
      <Input
        text="Nome"
        type="text"
        value={nameCustomer}
        onChange={setNameCustomer}
        className="mb-5"
      />
      <Input
        text="Idade"
        type="number"
        value={ageCustomer}
        onChange={setAgeCustomer}
      />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() =>
            chengedCustomer?.(new Customer(nameCustomer, +ageCustomer, id))
          }
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button color="gray" onClick={cancelForm}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
