function fetchpostdata(){
    return new Promise((resolve)=>{
     setTimeout(() => {
        resolve("Post data fetched")
     }, 2000);
   });
}

function fetchcommentdata(){
    return new Promise((resolve)=>{
     setTimeout(() => {
        resolve("Comment data fetched")
     }, 3000);
   });
}

async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogdata = await fetchpostdata();
        // const commentdata = await fetchcommentdata();
        const [postdata,commentdata] = await Promise.all([
             fetchpostdata(),
             fetchcommentdata(),
            ]);

        console.log(postdata);
        console.log(commentdata);
        
        
        console.log("fetch complete");
        
    } catch (error) {
        console.error("Error fetching the blog data",error);
        
    }
}
getBlogData();