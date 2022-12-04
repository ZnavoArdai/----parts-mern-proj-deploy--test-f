

export const getOrders =async () => {

    const respo=await fetch("https://znavo-test-b.onrender.com/orders");

    const orders=await respo.json();
    return orders;
}
