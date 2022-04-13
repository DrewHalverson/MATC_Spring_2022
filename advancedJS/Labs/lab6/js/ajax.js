const init = () => {
    
    let xhr = new XMLHttpRequest();
    let url = "./data.txt";

    xhr.open("get", url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState ==4) {
            console.log(xhr.responseText);
        }
    }

    xhr.send(null);
}

window.onload = init;