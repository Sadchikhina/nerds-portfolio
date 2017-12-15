var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".close-button");
var yourName = popup.querySelector("[name=yourname]");
var yourEmail = popup.querySelector("[name=youremail]");
var comment = popup.querySelector("[name=commentfield]");
var storageName = localStorage.getItem("yourname");
var storageEmail = localStorage.getItem("youremail");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  yourName.focus();
  if (storageName) {
    yourName.value = storageName;
    yourEmail.focus();
  }
  if (storageEmail) {
    yourEmail.value = storageEmail;
    comment.focus();
  }
});

popup.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourEmail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("yourname", yourName.value);
    localStorage.setItem("youremail", yourEmail.value);
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
  }
}
});
