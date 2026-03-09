function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Simple validation
    if (email && password) {
        // For demo: assume admin if email contains "admin"
        const role = email.includes("admin") ? "admin" : "user";
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("email", email);
        if (role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "profile.html";
        }
    } else {
        alert("Please fill in all fields.");
    }
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const role = document.getElementById("signupRole").value;
    if (name && email && password) {
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("name", name);
        alert("Signup successful!");
        window.location.href = "login.html";
    } else {
        alert("Please complete all fields.");
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function deleteUser(id) {
    alert("User with ID " + id + " deleted (simulation).");
}

function addUser() {
    const name = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;
    const role = document.getElementById("newRole").value;
    if (name && email && role) {
        document.getElementById("result").innerHTML =
            `<p>New user added: ${name} (${email}), Role: ${role}</p>`;
    } else {
        alert("Please fill in all fields.");
    }
}

// Profile page display
window.onload = function() {
    if (document.getElementById("profileInfo")) {
        const name = sessionStorage.getItem("name") || "Guest";
        const email = sessionStorage.getItem("email") || "N/A";
        const role = sessionStorage.getItem("role") || "N/A";
        document.getElementById("profileInfo").innerHTML =
            `<p>Name: ${name}</p><p>Email: ${email}</p><p>Role: ${role}</p>`;
    }
};