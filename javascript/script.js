function organizeData() {

    let organizedData = [];

    for(let index = 0; index < 20; index++) {
        let temp = {
            "name" : data.results[index].name.first + " " + data.results[index].name.last,
            "email" : data.results[index].email,
            "photo" : data.results[index].picture.large,
            "gender" : data.results[index].gender,
            "country" : data.results[index].country,


        }
        organizedData.push(temp);
    }

    return organizedData;
}

function addUser() {
    let users = organizeData();

    let usersDiv = document.querySelector("#profiles");

    for (let user = 0; user < users.length; user++) {

        let tempImg = document.createElement("img");
        let tempName = document.createElement("p");
        let tempEmail = document.createElement("p");
        let linebreak = document.createElement("br");
        let divider = document.createElement("div")
        
        divider.className = 'profiles'

        tempImg.src = users[user].photo;
        tempName = users[user].name;
        tempGender = users[user].gender;
        tempEmail = users[user].email;



        usersDiv.appendChild(divider)
        usersDiv.append(tempImg);
        usersDiv.append(tempName);
        usersDiv.appendChild(linebreak);
        usersDiv.append(tempEmail);
    }
    
}

addUser();