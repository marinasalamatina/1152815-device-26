var link = document.querySelector(".link_write_us");

var popup = document.querySelector(".modal_write_us");
var close = document.querySelector(".wtite_us_icon_close");
var form = document.querySelector(".write_us");
var nameinput = form.querySelector("[name=name]");
var email = form.querySelector("[name=e-mail]");

var linkmap = document.querySelector(".link_map");

var popupmap = document.querySelector(".modal_map_big");
var closemap = document.querySelector(".map_big_icon_close");

var dropdownlink = document.querySelector(".dropdown_plus_link");

var dropdowncontainer = document.querySelector(".dropdown_container");

var isStorageSupport = true;

var storage = "";

var delivery = document.querySelector(".index_servis_item_1");
var deliverywindow = document.querySelector(".delivery_window");
var warrant = document.querySelector(".index_servis_item_2");
var warrantwindow = document.querySelector(".warrant_window");
var credit = document.querySelector(".index_servis_item_3");
var creditwindow = document.querySelector(".credit_window");

try {
  storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("modal_write_us_show");
  nameinput.focus();

  if (storage) {
    nameinput.value = storage;
    email.focus();
  } else {
      nameinput.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal_write_us_show");
});

form.addEventListener("submit", function (evt) {
  if (!nameinput.value || !email.value) {
  evt.preventDefault();
  inputname.classList.add("write_us_item_input_invalid");
  email.classList.add("write_us_item_input_invalid");
  }
  else {
        if (isStorageSupport) {
        localStorage.setItem("name", nameinput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popup.classList.contains("modal_write_us_show")) {
evt.preventDefault();
popup.classList.remove("modal-show");
}
}
});

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();

  popupmap.classList.add("modal_map_big_show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal_map_big_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (popupmap.classList.contains("modal_write_us_show")) {
    evt.preventDefault();
    popupmap.classList.remove("modal_map_big_show");
    }
  }
});

dropdownlink.addEventListener("mouseover", function (evt) {
  evt.preventDefault();

  dropdowncontainer.classList.add("dropdown_container_show");
});

dropdownlink.addEventListener("mouseout", function (evt) {
  evt.preventDefault();

  dropdowncontainer.classList.remove("dropdown_container_show");
});

delivery.addEventListener("click", function (evt) {
  evt.preventDefault();

  deliverywindow.classList.remove("visually_hidden");
  warrantwindow.classList.add("visually_hidden");
  creditwindow.classList.add("visually_hidden");
});

warrant.addEventListener("click", function (evt) {
  evt.preventDefault();

  deliverywindow.classList.add("visually_hidden");
  warrantwindow.classList.remove("visually_hidden");
  creditwindow.classList.add("visually_hidden");
});

credit.addEventListener("click", function (evt) {
  evt.preventDefault();

  deliverywindow.classList.add("visually_hidden");
  warrantwindow.classList.add("visually_hidden");
  creditwindow.classList.remove("visually_hidden");
});
