const signinForm = document.querySelector(".login");
const signupForm = document.querySelector(".signup");
const signupBtns = document.querySelectorAll("#signup");
const signinBtns = document.querySelectorAll("#signin");
const listes = document.querySelectorAll("ul > li > a");
const inputSignup = document.querySelectorAll(".input");
const icons = document.querySelectorAll(".icon");
const passwordTypes = document.querySelectorAll("#passwordLogout");
const form = document.querySelector(".signup > .rightContainer > form");
const age = document.querySelector("#age-lenght");
const sidebar = document.querySelector(".sidebar");
const nav =  document.querySelector("ul");

console.log(nav);

let names, emails, passwords;
//sidebar
sidebar.addEventListener("click", ()=>{
  nav.classList.toggle("showSide");
})


// NavBarActive
listes.forEach((liste) => {
  liste.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    liste.classList.toggle("active");

    nav.classList.remove("showSide");

  });
});

// SHOW AND HIDE FORMS
signupBtns.forEach((signupBtn) => {
  signupBtn.addEventListener("click", () => {
    signinForm.classList.add("loginHiden");
    signupForm.classList.add("logoutShow");
  });
});

signinBtns.forEach((signinBtn) => {
  signinBtn.addEventListener("click", () => {
    signupForm.classList.remove("logoutShow");
    signinForm.classList.remove("loginHiden");
  });
});

// SHOW AND HIDE PASSWORD
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    passwordTypes.forEach((passwordType) => {
      if (passwordType.type === "password") {
        passwordType.type = "text";
      } else {
        passwordType.type = "password";
      }
    });
  });
});

// FORMS CHECKER
const errorDisplayLogout = (tag, message, valid) => {
  const containerLogout = document.querySelector(".signup > .rightContainer > form > ." + tag + "-container");
  const spanLogout = document.querySelector(".signup > .rightContainer > form > ." + tag + "-container > span");

  if (!valid) {
    containerLogout.classList.add("error");
    spanLogout.textContent = message;
  } else {
    containerLogout.classList.remove("error");
    spanLogout.textContent = message;
  }
};

const nameLogout = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplayLogout("name", "le nom doit faire entre 3 et 20 caractères");
    names = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplayLogout("name", "Pas des charactères spéciaux");
    names = null;
  } else {
    errorDisplayLogout("name", "", true);
    names = value;
    console.log("Le nom est : " + names);
  }
};
const emailLogout = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplayLogout("email", "email invalid");
    emails = null;
  } else {
    errorDisplayLogout("email", "", true);
    emails = value;
    console.log("L'adresse mail est : " + emails);
  }
};
const passwordLogout = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplayLogout(
      "password",
      "8 charactères au minimum, une majuscule, un chiffre et un charactère special"
    );
    passwords = null;
  } else if (value.length < 12) {
    errorDisplayLogout("password", "", true);
    passwords = value;
  } else {
    errorDisplayLogout("password", "", true);
    passwords = value;
  }
};

inputSignup.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "name":
        nameLogout(e.target.value);
        break;
      case "emailLogout":
        emailLogout(e.target.value);
        break;
      case "passwordLogout":
        passwordLogout(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (names && emails && passwords) {
    const data = {
      names,
      emails,
      passwords,
    };

    inputSignup.forEach((input) => (input.value = ""));

    console.log(data);

    names = null;
    emails = null;
    passwords = null;
    confirmPass = null;
    alert("Inscription validée");
  } else {
    alert("Veuillez remplir tout les champs");
  }
});
