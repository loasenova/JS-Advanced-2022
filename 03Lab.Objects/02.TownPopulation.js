function townPopulation(towns){

//console.log(towns[0].split('<->'));
let townsObj = {};

for(let i = 0; i < towns.length; i++){

    let town = towns[i].split('<->')[0];

    if(!townsObj.hasOwnProperty(town)){
        townsObj[town] = Number(towns[i].split('<->')[1]);
    }else{
        townsObj[town] += Number(towns[i].split('<->')[1]);
    }
}

for(let key of Object.keys(townsObj)){
    console.log(`${key}: ${townsObj[key]}`)
}
//return townsObj;

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);