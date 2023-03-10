const inpLogin = document.querySelector(".emailOrNumber");
const password = document.querySelector(".password");
const imgRef = document.querySelector(".img-ref");

function isValid(inpLogin_, password_) {
  if (
    !/^[A-Za-z0-9\.]+@\w{1,20}\.[A-ZZa-z]{1,10}$/gm.test(inpLogin_.value) &&
    !/^(\+375|80|375)(44|29|33|25)[0-9]{7,7}$/gm.test(inpLogin_.value)
  )
    throw new Error("Неверный формат электронной почты или номера телефона");

  if (password_.value.length < 8)
    throw new Error("Пароль не должен быть менее 8 символов");
}

document.querySelector(".btn").addEventListener("click", () => {
  try {
    isValid(inpLogin, password);

    alert("Вы успешно авторизованы в системе");

    inpLogin.value = "";
    password.value = "";
  } catch (error) {
    if (
      error.message == "Неверный формат электронной почты или номера телефона"
    ) {
      inpLogin.style = "border: 1px solid red";
    } else if (error.message == "Пароль не должен быть менее 8 символов") {
      password.style = "border: 1px solid red";
    }
    imgRef.style = "background-image: url(../assets/img-refRed.png)";

    alert(error.message);
  }
});

document.querySelector(".emailOrNumber").addEventListener("click", function () {
  const imgRef = document.querySelector(".img-ref");
  imgRef.style = "background-image: url(../assets/img-ref.svg)";
  this.style = "border: none";
});

document.querySelector(".password").addEventListener("click", function () {
  const imgRef = document.querySelector(".img-ref");
  imgRef.style = "background-image: url(../assets/img-ref.svg)";
  this.style = "border: none";
});
