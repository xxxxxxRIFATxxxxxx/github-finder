// Define UI
let username = document.querySelector("#username");
let searchUserForm = document.querySelector("#search-user-form");
let ui = new UI();

// Define Functions
let getUser = (e) => {
    let searchText = username.value;
    if (searchText != "") {
        fetch(`https://api.github.com/users/${searchText}`)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                ui.showAlert("User not found!", "alert-failed");
            } else {
                ui.showProfile(data);
            };
        })
        .catch(err => console.log(err));
    } else {
        ui.clearProfile();
    };

    e.preventDefault();
};

// Define Event Listeners
searchUserForm.addEventListener("submit", getUser);
