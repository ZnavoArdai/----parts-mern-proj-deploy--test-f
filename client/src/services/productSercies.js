
export const getProudcts=async()=>{

   const respo=await fetch("https://parts-backend-deploy.onrender.com/products");


   const products=await respo.json()

   return products
}



