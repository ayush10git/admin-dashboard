import React, { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Victor",
    amount: 4500,
    quantity: 500,
    discount: 20,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/hashhgsug">Manage</Link>,
  },
  {
    user: "Charles",
    amount: 7500,
    quantity: 650,
    discount: 25,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/hashhgsug">Manage</Link>,
  },
  {
    user: "Xavier",
    amount: 2100,
    quantity: 200,
    discount: 10,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/hashhgsug">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Transactions"),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
