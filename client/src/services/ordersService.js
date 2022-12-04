

export const getOrders =async () => {

    const respo=await fetch("http://localhost:8080/orders");

    const orders=await respo.json();
    return orders;
}
