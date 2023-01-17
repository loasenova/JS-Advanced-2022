function filterEmployees(data, criteria){

    data = JSON.parse(data);
    let [key, value] = criteria.split("-");

    let result = [];

    for(let entry of data){
        if(entry[key] === value){
            result.push(entry);
        }
    }

    for(let i = 0; i < result.length; i++){
        console.log(`${i}. ${result[i]}`);
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')