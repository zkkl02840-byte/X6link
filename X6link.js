document.getElementById("goBtn").addEventListener("click", function () {
const site = document.getElementById("siteSelect").value;
const message = document.getElementById("message");

if (!site) {
alert("Please select a website to visit");
return;    
}
message.textContent = "Billy-ing" ;
message.classList.remove("hidden");
message.classList.add("fade-in");

setTimeout(() => {
window.location.href = site;
}, 1500);
});    