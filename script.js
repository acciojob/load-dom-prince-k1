

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const str = document.createElement('p');
    str.textContent = "DOM load success";
    body.appendChild(str);
});