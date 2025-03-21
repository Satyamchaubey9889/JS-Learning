async function getAllUser() {
 try{ const responce = await fetch('https://jsonplaceholder.typicode.com/users')
  const  data = await responce.json()
  console.log(data);
}
 catch(error){
   console.log("E: ", error);
   
 }
}
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
