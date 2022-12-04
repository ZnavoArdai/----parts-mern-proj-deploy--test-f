
export const getInfo =async () => {
 
    const respo= await fetch("http://localhost:8080/info");

    const info= await respo.json();
    return info;

}
