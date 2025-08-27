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



// is anyone have access

    function access(num) {
        try{
            if(num<18) throw new Error("not granted");
            console.log("acces granted");
            
        }    catch(error){
           console.log(error.message);
           
        }

        finally{
            console.log("completed");
            
        }
        
        
    }
    access(18);
