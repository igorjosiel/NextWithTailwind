import Customer from "../core/Customer";
import { editIcon, removeIcon } from "./Icons";

interface TableProps {
    customers: Customer[]
    selectedCustomer?: (customer: Customer) => void
    removedCustomer?: (customer: Customer) => void
}

export default function Table({ customers, selectedCustomer, removedCustomer }: TableProps) {
    function renderHeader() {
        return (
            <tr className="text-gray-100">
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions && <th className="p-4">Ações</th>}
            </tr>
        );
    }

    const showActions = selectedCustomer || removedCustomer;

    function renderData() {
        return customers?.map((customer, index) => {
            return (
                <tr key={customer.id}
                    className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{customer?.id}</td>
                    <td className="text-left p-4">{customer?.name}</td>
                    <td className="text-left p-4">{customer?.age}</td>
                    {showActions && renderActions(customer)}
                </tr>
            );
        });
    }

    function renderActions(customer: Customer) {
        return (
            <td className="flex justify-center">
                {selectedCustomer &&
                    <button
                        onClick={() => selectedCustomer?.(customer)}
                        className={`
                        flex justify-centeritems-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50`}
                    >
                        {editIcon}
                    </button>}
                {removedCustomer &&
                    <button
                        onClick={() => removedCustomer?.(customer)}
                        className={`
                        flex justify-centeritems-center
                      text-red-600 rounded-full p-2 m-1
                      hover:hover:bg-purple-50`}
                    >
                        {removeIcon}
                    </button>}
            </td>
        );
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}