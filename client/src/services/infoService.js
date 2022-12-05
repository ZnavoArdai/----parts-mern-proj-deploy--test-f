
export const getInfo =async () => {
 
    const respo= await fetch("https://parts-backend-deploy.onrender.com/info");

    const info= await respo.json();
    return info;

}
