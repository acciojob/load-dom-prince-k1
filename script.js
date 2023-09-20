

document.addEventListener("DOMContentLoaded", function() {
    const body = document.getElementsByTagName("body")[0];
    console.log(body);
    const str = document.createElement('p');
    str.textContent = "DOM load success";
    body.appendChild(str);
});