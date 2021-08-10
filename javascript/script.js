function organizeData() {

    let organizedData = [];

    for(let index = 0; index < 20; index++) {
        let temp = {
            "gender" : data.results[index].gender,
            "name" : data.results[index].name.first + " " + data.results[index].name.last,
            "photo" : data.results[index].picture.large,
            "country" : data.results[index].country,
            "email" : data.results[index].email,
        }
        organizedData.push(temp);
    }

    return organizedData;
}

function addUser() {
    let users = organizeData();

    let usersDiv = document.querySelector("#profiles");

    for (let user = 0; user < users.length; user++) {
        // let linebreak1 = document.createElement("br")
        let tempImg = document.createElement("img");
        let tempName = document.createElement("p");
        let tempEmail = document.createElement("p");
        let linebreak = document.createElement("br");
        let divider = document.createElement("div")
        
        

        tempImg.src = users[user].photo;
        tempName = users[user].name;
        tempGender = users[user].gender;
        tempEmail = users[user].email;

        // usersDiv.append(linebreak1);

        usersDiv.appendChild(divider)
        usersDiv.append(tempImg);
        usersDiv.append(tempName);
        usersDiv.appendChild(linebreak);
        usersDiv.append(tempEmail);
    }
    
}

addUser();