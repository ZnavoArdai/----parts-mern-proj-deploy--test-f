import React, { useContext } from "react";
import { dataContext } from "../../../context/dataContext";
import "./Table.css";

const Table = () => {
  const { orders } = useContext(dataContext);
  return (
    <table>
      <thead>
        <th>number</th>
        <th>name</th>
        <th>address</th>
        <th>time</th>
        <th>products</th>
        <th>amount</th>
      </thead>
      <tbody>
        {orders.map((item) => {
          return (
            <tr>
              <td>{item.numberOfOrders}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.timeOfDelivery}</td>
              <td>{item.quantity}</td>
              <td>{item.priceOfProducts}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
