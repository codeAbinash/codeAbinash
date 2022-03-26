// DOM()

function dom(q){
    return new domElement(q);
}

class domElement{
    constructor(query){
        if(!query){
            console.error("EMPTY Query");
        }
    }
}

