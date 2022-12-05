
export const getStores =async () => {
 
    const respo= await fetch("https://parts-backend-deploy.onrender.com/stores");

    const stores= await respo.json()
    return stores
}

