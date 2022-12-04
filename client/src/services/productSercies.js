
export const getProudcts=async()=>{

   const respo=await fetch("http://localhost:8080/products");


   const products=await respo.json()

   return products
}



