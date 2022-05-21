import { useState } from "react";

import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer?: Customer
}

export default function Form({ customer }: FormProps) {
    const { id, name, age } = customer;

    const [nameCustomer, setNameCustomer] = useState<string>(name ?? '');
    const [ageCustomer, setAgeCustomer] = useState<number>(age ?? 0);

    return (
        <div>
            {id &&
                <Input
                    text="Código"
                    type="text"
                    value={id}
                    readOnly
                    className="mb-5"
                />}
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
                onChange={setNameCustomer}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2">{id ? 'Alterar' : 'Salvar'}</Button>
                <Button color="gray">Cancelar</Button>
            </div>
        </div>
    );
}