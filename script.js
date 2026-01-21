function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "" || password === "") {
    error.innerText = "All fields are required";
    return false;
  }

  // Dummy validation
  if (username === "admin" && password === "12345") {
    window.location.href = "dashborad.html"; // ✅ redirect
    return false; // stop form submit
  } else {
    error.innerText = "Invalid username or password";
    return false;
  }
}
