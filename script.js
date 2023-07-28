
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");


  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    console.log("Login Email:", email);
    console.log("Login Password:", password);

    const response = await fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
     
      window.location.href = "home.html";
    } else {
     
      alert(data.message || "Login failed. Please try again.");
    }


  });


  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    console.log("Signup Email:", email);
    console.log("Signup Password:", password);

    const response = await fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
        
          const data = await response.json();
        
          if (response.ok) {
          
            window.location.href = "index.html";
          } else {
          
            alert(data.message || "Signup failed. Please try again.");
          }
   
  });
});

