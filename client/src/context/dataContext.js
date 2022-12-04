import { createContext, useState, useEffect } from "react";

import { getProudcts } from "../services/productSercies";
import { getStores } from "../services/storeService";
import { getInfo } from "../services/infoService";
import { getCategory } from "../services/categoryService";
import { getOrders } from "../services/ordersService";
export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [info, setInfo] = useState([]);
  const [stores, setStores] = useState([]);



  useEffect(() => {
    getProudcts().then((res) => setProducts(res.result ));
    getStores().then((res) => stores(res.result));
    getInfo().then((res) => info(res.result));
    getCategory().then((res) => setCategory( res.result ));
    getOrders().then((res) => setOrders(res.result ));
  }, []);
 

  return (
    <dataContext.Provider value={{ orders,products,info,category,stores }}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
