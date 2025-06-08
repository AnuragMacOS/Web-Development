function fetchUserData(){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve({name :"Anurag", url:"https://instagram.com"})
        }, 3000);
     })
}

async function getUserData() {
    try {
        console.log("fetching user data");
        const userdata = await fetchUserData()
        console.log("User data fetched successfully");
        console.log("User data : ",userdata);
        
    } catch (error) {
        console.log("Error fetching the data",error);   
    }  
}

getUserData();