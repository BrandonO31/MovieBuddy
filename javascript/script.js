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

    let userContainer = document.querySelector("#user_container");

    for (let user = 0; user < users.length; user++) {

        let tempImg = document.createElement("img");
        let tempName = document.createElement("p");
        let tempEmail = document.createElement("p");
        let linebreak = document.createElement("br");

        let user_element = document.createElement("div");
        let user_text_container = document.createElement('div');
        
        user_element.className = 'users';
        user_element.id = 'users_wrapper';
        user_text_container.id = 'user_text';

        tempImg.src = users[user].photo;
        tempImg.className = 'userProfile_image';
        tempName.innerText = users[user].name; // Set the text content using innerText
        tempEmail.innerText = users[user].email;
        tempGender = users[user].gender;




        userContainer.appendChild(user_element);
        userContainer.appendChild(linebreak);
        user_text_container.append(tempName , tempEmail);
        user_element.append(tempImg, user_text_container);



    }
    
}

addUser();