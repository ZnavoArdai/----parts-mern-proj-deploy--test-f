
export const getCategory = async() => {
 
    const respo=await fetch("https://parts-backend-deploy.onrender.com/category");

    const category=await respo.json();
    return category;
}
