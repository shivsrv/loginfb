function validFunc() {
  let x = document.forms["frm"];
  var text = "";
  var i;
  /*for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;*/
  if (x.elements["Name"].value.length == 0) {
    document.getElementsByTagName("p")[1].removeAttribute("id");
  }
  if (x.elements["password"].value.length == 0) {
    document.getElementsByTagName("p")[4].removeAttribute("id");
  }
  let email = x.elements["email"].value;
  if (email.length == 0) {
    document.getElementsByTagName("p")[3].removeAttribute("id");
  }
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) == false) {
    document.getElementById("email1").innerHTML =
      "Looks like this is not an email";
    document.getElementsByTagName("p")[3].removeAttribute("id");
  }
}
