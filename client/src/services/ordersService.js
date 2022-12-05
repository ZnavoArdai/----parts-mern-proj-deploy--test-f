

export const getOrders =async () => {

    const respo=await fetch("https://parts-backend-deploy.onrender.com/orders");

    const orders=await respo.json();
    return orders;
}
