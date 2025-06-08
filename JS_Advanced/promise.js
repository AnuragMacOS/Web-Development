function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success){
                resolve("Data fetched successfully")
            }
            else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}

fetchdata()
    .then ((data)  => {      //for resolve
        console.log(data)
        return `Anurag`
    })  
    .then((value) => {
        console.log(value)  
    })

    .catch((dataerror) =>console.error(dataerror))  // for reject