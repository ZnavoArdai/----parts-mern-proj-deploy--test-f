import React, { useContext} from "react";
import { BsBasket } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";





import { dataContext } from "../../../context/dataContext";

import "./Headrs.css";

const Headrs = () => {
  const { orders,products,info,stores,category } = useContext(dataContext);

  return (
    <div className="headersContainer container-fluid mt-5 text-center ">
      <div>
        Products
        <div className="content">
          {products.length+88}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>

      <div>
        Stores
        <div className="content">
          {stores.length+12}
          <BiStore
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Information
        <div className="content">
          {info.length+12}
          <AiOutlineInfoCircle
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        category's
        <div className="content">
          {category.length+11}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Departments
        <div className="content">
          {orders.length+5}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Headrs;
