
const init = () => {
    
    let form = document.createElement("form");

    let div = document.createElement("div");
    div.setAttribute("class", "form-group");

    let input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "text");
    input.setAttribute("id", "username");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "displayName();");
    button.innerHTML = "click me";

    form.appendChild(div);
    div.appendChild(input);
    div.appendChild(button);
    document.body.appendChild(form);
    
}

const displayName = () => {
    let userName = document.querySelector("#username");
    
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "You have entered " + userName.value + "!";

    console.log(userName.value);
    document.body.appendChild(paragraph);
}