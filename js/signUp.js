document.querySelector(".btn").addEventListener("click", () => {
  try {
    const emailOrNumber = document.querySelector(".emailOrNumber");
    const password1 = document.querySelector(".password");
    const password2 = document.querySelector(".confirmPassword");
    const imgRef = document.querySelector(".img-ref");

    if (
      !/^[A-Za-z0-9\.]+@\w{1,20}\.[A-ZZa-z]{1,10}$/gm.test(
        emailOrNumber.value
      ) &&
      !/^\+375(44|29|33|25)[0-9]{1,7}$/gm.test(emailOrNumber.value)
    ) {
      emailOrNumber.style = "border: 1px solid red";
      imgRef.style = "background-image: url(../assets/img-refRed.png)";
      throw new Error("Неверный формат электронной почты или номера телефона");
    }

    if (password1.value.length < 8) {
      password1.style = "border: 1px solid red";
      imgRef.style = "background-image: url(../assets/img-refRed.png)";
      throw new Error("Пароль не должен быть менее 8 символов");
    }

    if (password1.value !== password2.value) {
      password2.style = "border: 1px solid red";
      imgRef.style = "background-image: url(../assets/img-refRed.png)";
      throw new Error("Пароли не совпадают");
    }

    alert("Вы успешно зарегистрированы в системе");
  } catch (error) {
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

document
  .querySelector(".confirmPassword")
  .addEventListener("click", function () {
    const imgRef = document.querySelector(".img-ref");
    imgRef.style = "background-image: url(../assets/img-ref.svg)";
    this.style = "border: none";
  });
