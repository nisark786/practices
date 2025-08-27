function devision(a,b) {
    try{
        if(b===0){
            throw new Error("cant devide by zeero");
        }
        console.log(a/b);
        
    }    catch(error){
        console.log(error.message);
        
    }
}
devision(10,0);
