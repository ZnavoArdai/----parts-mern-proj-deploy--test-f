
export const getStores =async () => {
 
    const respo=await fetch("http://localhost:8080/stores");

    const stores=await respo.json()
    return stores
}

