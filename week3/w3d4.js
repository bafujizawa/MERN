const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

function coronaVirusAtRisk(persons) {
    //code goes here
    let finalArr = []
    for (let i = 0; i< persons.length; i++){
        if (persons[i].isSocialDistancing === false){
            for (let j = 0; j< persons[i].friends.length; j++){
                if (persons[i].friends[j].isSocialDistancing === false){
                    let infected = persons[i].firstName + " " + persons[i].lastName
                    finalArr.push(infected)
                    break
                }
            }
        }
    }
    
    return finalArr
}

coronaVirusAtRisk(people)

function coronaVirusAtRiskFunctional(persons) {
    //code goes here
}

/*****************************************************************************/
//Santas Naughty List