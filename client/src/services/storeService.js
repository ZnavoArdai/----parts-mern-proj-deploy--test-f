
export const getStores =async () => {
 
    const respo=await fetch("https://znavo-test-b.onrender.com/stores");

    const stores=await respo.json()
    return stores
}

