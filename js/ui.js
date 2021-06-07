class UI {
    constructor() {
        this.userProfile = document.querySelector(".user-profile");
        this.searchUserSection = document.querySelector("#search-user-section");
        this.searchUserForm = document.querySelector("#search-user-form");
    };

    showAlert(message, className) {
        this.clearProfile();
        let div = document.createElement("div");
        div.className = className;
        div.innerHTML = `<p>${message}</p>`;
        this.searchUserSection.insertBefore(div, this.searchUserForm);

        setTimeout(() => {
            document.querySelector(`.${className}`).remove()
        }, 3000);
    };

    showProfile(user) {
        this.userProfile.innerHTML = `<section class="profile-picture">
        <img src="${user.avatar_url}" /><br>
    </section>

    <section class="profile-details">
    <ul>
        <li><h3>${user.login}'s Profile</h3></li>
        <li><b>Name</b>: ${user.name}</li>
        <li><b>Location</b>: ${user.location}</li>
        <li><b>Email</b>: ${user.email}</li>
        <li><b>Bio</b>: ${user.bio}</li>
        <li><b>Public Repos</b>: ${user.public_repos}</li>
        <li><b>Public Gists</b>: ${user.public_gists}</li>
        <li><b>Followers</b>: ${user.followers}</li>
        <li><b>Following</b>: ${user.following}</li>
        <li><b>Profile</b>: <a href="${user.html_url} target="_blank">View Profile</a></li>
    </ul>
    </section>`;
    };

    clearProfile() {
        this.userProfile.innerText = "";
    };
};