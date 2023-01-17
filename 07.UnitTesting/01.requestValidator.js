function requestValidator(obj){

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validUriPattern = /^[\w.]+$/g;
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let validMess = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if(!validMethods.includes(obj.method)){
        throw new Error("Invalid request header: Invalid Method")
    }

    if(!obj.hasOwnProperty("uri")){
        throw new Error("Invalid request header: Invalid URI")
    }

    if(obj.uri !== "*" && !obj.uri.match(validUriPattern)){
        throw new Error("Invalid request header: Invalid URI")
    }

    if(!validVersion.includes(obj.version)){
        throw new Error("Invalid request header: Invalid Version")
    }

    if(!obj.hasOwnProperty("message")){
        throw new Error("Invalid request header: Invalid Message")
    }

    for(let ch of obj.message){
        if(validMess.includes(ch)){
            throw new Error("Invalid request header: Invalid Message")
        }
    }

    return obj;
    
}

console.log()