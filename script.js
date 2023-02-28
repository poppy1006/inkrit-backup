const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("https://victorious-dove-handkerchief.cyclic.app/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    // change alert to something better
    alert("Email send successfully...!");
    return response.json();
  });
};
