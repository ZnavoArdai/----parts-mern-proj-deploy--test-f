
export const getInfo =async () => {
 
    const respo= await fetch("https://znavo-test-b.onrender.com/info");

    const info= await respo.json();
    return info;

}
