
export const getCategory = async() => {
 
    const respo=await fetch("http://localhost:8080/category");

    const category=await respo.json();
    return category;
}
