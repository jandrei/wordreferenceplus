

var listen_widget = document.getElementById("listen_widget");
var div_bottoes = document.createElement("div");
div_bottoes.style = "display: block; margin-left: auto; margin-right: auto; width: 40%;";

var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", "https://jandrei.github.io/wordreferenceplus/");
ifrm.style.width = "80px";
ifrm.style.height = "30px";
ifrm.frameBorder="0";
div_bottoes.appendChild(ifrm);
listen_widget.appendChild(div_bottoes);
