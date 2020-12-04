// Functions to reveal and hide paragraphs

function text_know_me() {
  var element = document.getElementById("text_know_me");
  element.classList.toggle("visible");
  var element = document.getElementById("chev_know");
  element.classList.toggle("chevron_active");
  var element = document.getElementById("my_skills");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");
  var element = document.getElementById("wanna_talk");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");
  var element = document.getElementById("get_to_know_me");
  element.classList.toggle("active_section");
}

function text_skills() {
  var element = document.getElementById("text_skills");
  element.classList.toggle("visible");
  var element = document.getElementById("chev_skills");
  element.classList.toggle("chevron_active");
  var element = document.getElementById("get_to_know_me");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");
  var element = document.getElementById("wanna_talk");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");
}

function text_talk() {
  var element = document.getElementById("text_talk");
  element.classList.toggle("visible");
  var element = document.getElementById("chev_talk");
  element.classList.toggle("chevron_active");
  var element = document.getElementById("get_to_know_me");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");
  var element = document.getElementById("my_skills");
  element.classList.toggle("visible");
  element.classList.toggle("notvisible");

}
