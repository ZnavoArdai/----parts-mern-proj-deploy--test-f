
export const getStores =async () => {
 
    const respo=await fetch("https://parts-backend-deploy.onrender.com");

    const stores=await respo.json()
    return stores
}

