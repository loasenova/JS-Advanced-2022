function constructionCrew(obj){

    if(obj.dizziness === true){
        obj.levelOfHydrated += obj.experience * obj.weight * 0.1;
        obj.dizziness = false;
    }

    return obj;
}
console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }))