
export const getProudcts=async()=>{

   const respo=await fetch("https://znavo-test-b.onrender.com/products");


   const products=await respo.json()

   return products
}



