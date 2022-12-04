
export const getCategory = async() => {
 
    const respo=await fetch("https://znavo-test-b.onrender.com/category");

    const category=await respo.json();
    return category;
}
