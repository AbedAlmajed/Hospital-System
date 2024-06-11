

 // Retrieve the 'users' data from the local storage, and parse it from JSON format to JavaScript array.
window.addEventListener("load", function() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(function(user) {
        createCard(user);
    });
});

// Rest of your code remains unchanged
function Patients(name, password, Date, Gender, Chronic) {
    this.name = name;
    this.password = password;
    this.Date = Date;
    this.Gender = Gender;
    this.Chronic = Chronic;
}

document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.getElementById("full-name").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let chronicDisease = document.getElementById("chronic-disease").value;

    let object = new Patients(name, password, date, gender, chronicDisease);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(object);
    localStorage.setItem("users", JSON.stringify(users));

    createCard(object);
});

function createCard(patient) {
    let cardContainer = document.getElementById("card-container");

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let namePara = document.createElement("p");
    namePara.innerHTML = "Name: " + patient.name;

    let passwordPara = document.createElement("p");
    passwordPara.innerHTML = "Password: " + patient.password;

    let datePara = document.createElement("p");
    datePara.innerHTML = "Date of Birth: " + patient.Date;

    let genderPara = document.createElement("p");
    genderPara.innerHTML = "Gender: " + patient.Gender;

    let chronicPara = document.createElement("p");
    chronicPara.innerHTML = "Chronic Disease: " + patient.Chronic;

let userImage=document.createElement("img");
userImage.setAttribute("src","image/user.png");
cardDiv.appendChild(userImage);

    cardDiv.appendChild(namePara);
    cardDiv.appendChild(passwordPara);
    cardDiv.appendChild(datePara);
    cardDiv.appendChild(genderPara);
    cardDiv.appendChild(chronicPara);

    cardContainer.appendChild(cardDiv);
    document.getElementById("form").reset();//to clear the form
}

// localStorage.clear(); //to clear the localStorage