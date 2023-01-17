(function stringExtension(){

String.prototype.ensureStart = function(str){
    let indexOfStr = this.indexOf(str);
    if(indexOfStr !== 0){
        return (str + this).toString();
    }else{
        return this.toString();
    }
};

String.prototype.ensureEnd = function(str){
    let indexOfStr = this.indexOf(str);
    if(indexOfStr !== this.length - str.length){
        return (this + str).toString();
    }else{
        return this.toString();
    }
};

String.prototype.isEmpty = function(){
    if(this.length === 0){
        return true;
    }else{
        return false;
    }
};

String.prototype.truncate = function(n){

    let spacePosition = this.lastIndexOf(" ");

    if(n => this.length){
        return this.toString();
    }

    if(n < 4){
        return ".".repeat(n);

    }

    if(spacePosition === -1){
        return this.slice(0, n-3) + "...";
    }else{
        let result = this.toString();
        while(result.length > n-3){
            result.split(" ");
            result.pop();
            result = result.join(" ");
        }
        return result + "...";
    }

   
};

String.format = function(string, ...params){

    for(let i = 0; i < params.length; i++){
        string = string.replace(/\{\d\}/, params[i])
    }
    return string.toString();
};

})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');