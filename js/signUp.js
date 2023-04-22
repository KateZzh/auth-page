// const inpLogin = document.querySelector(".emailOrNumber");
// const password1 = document.querySelector(".password");
// const password2 = document.querySelector(".confirmPassword");
// const imgRef = document.querySelector(".img-ref");

// function isValid(inpLogin_, password1_, password2_) {
//   if (
//     !/^[A-Za-z0-9\.]+@\w{1,20}\.[A-ZZa-z]{1,10}$/gm.test(inpLogin_.value) &&
//     !/^(\+375|80|375)(44|29|33|25)[0-9]{7,7}$/gm.test(inpLogin_.value)
//   )
//     throw new Error("Неверный формат электронной почты или номера телефона");

//   if (password1_.value.length < 8)
//     throw new Error("Пароль не должен быть менее 8 символов");

//   if (password2_.value !== password1_.value)
//     throw new Error("Пароли не совпадают");
// }

// document.querySelector(".btn").addEventListener("click", () => {
//   try {
//     isValid(inpLogin, password1, password2);

//     alert("Вы успешно зарегистрированы в системе");

//     inpLogin.value = "";
//     password1.value = "";
//     password2.value = "";
//   } catch (error) {
//     if (
//       error.message == "Неверный формат электронной почты или номера телефона"
//     )
//       inpLogin.style = "border: 1px solid red";
//     if (error.message == "Пароль не должен быть менее 8 символов")
//       password1.style = "border: 1px solid red";
//     if (error.message == "Пароли не совпадают")
//       password2.style = "border: 1px solid red";

//     imgRef.style = "background-image: url(../assets/img-refRed.png)";
//     alert(error.message);
//   }
// });

// inpLogin.addEventListener("click", function () {
//   imgRef.style = "background-image: url(../assets/img-ref.svg)";
//   this.style = "border: none";
// });

// password1.addEventListener("click", function () {
//   imgRef.style = "background-image: url(../assets/img-ref.svg)";
//   this.style = "border: none";
// });

// password2.addEventListener("click", function () {
//   imgRef.style = "background-image: url(../assets/img-ref.svg)";
//   this.style = "border: none";
// });

class SignUpPage {
  isValid(inpLogin_, password1_, password2_) {
    if (
      !/^[A-Za-z0-9\.]+@\w{1,20}\.[A-ZZa-z]{1,10}$/gm.test(inpLogin_.value) &&
      !/^(\+375|80|375)(44|29|33|25)[0-9]{7,7}$/gm.test(inpLogin_.value)
    ) throw new Error("Неверный формат электронной почты или номера телефона");

    if (password1_.value.length < 8) throw new Error("Пароль не должен быть менее 8 символов");

    if (password2_.value !== password1_.value) throw new Error("Пароли не совпадают");
  }

  doAuth(inpLogin, password1, password2) {
    document.querySelector(".btn").addEventListener("click", () => {
      try {
        this.isValid(inpLogin, password1, password2);

        alert("Вы успешно зарегистрированы в системе");

        inpLogin.value = "";
        password1.value = "";
        password2.value = "";
      } catch (error) {
        if (error.message == "Неверный формат электронной почты или номера телефона") inpLogin.style = "border: 1px solid red";
        if (error.message == "Пароль не должен быть менее 8 символов") password1.style = "border: 1px solid red";
        if (error.message == "Пароли не совпадают") password2.style = "border: 1px solid red";

        imgRef.style = "background-image: url(../assets/img-refRed.png)";
        alert(error.message);
      }
    });
  }

  inpLogin(inpLogin, imgRef) {
    inpLogin.addEventListener("click", function () {
      imgRef.style = "background-image: url(../assets/img-ref.svg)";
      this.style = "border: none";
    });
  }

  inpPassword1(password1, imgRef) {
    password1.addEventListener("click", function () {
      imgRef.style = "background-image: url(../assets/img-ref.svg)";
      this.style = "border: none";
    });
  }

  inpPassword2(password2, imgRef) {
    password2.addEventListener("click", function () {
      imgRef.style = "background-image: url(../assets/img-ref.svg)";
      this.style = "border: none";
    });
  }
}

const inpLogin = document.querySelector(".emailOrNumber");
const password1 = document.querySelector(".password");
const password2 = document.querySelector(".confirmPassword");
const imgRef = document.querySelector(".img-ref");

const signUpPage = new SignUpPage();

signUpPage.doAuth(inpLogin, password1, password2);
signUpPage.inpLogin(inpLogin, imgRef);
signUpPage.inpPassword1(password1, imgRef);
signUpPage.inpPassword2(password2, imgRef);
