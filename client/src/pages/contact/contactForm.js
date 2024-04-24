function sendData(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = {
        name: name,
        email: email,
        message: message
    }

    let confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = "block";

    let dataList = document.getElementById("dataList");
    dataList.innerHTML = "";

    for (let key in data) {
        let listItem = document.createElement("li");
        listItem.textContent = `${key} = ${data[key]}`
        dataList.appendChild(listItem);
    }

    let form = document.querySelector("form");
    form.style.display = "none";

}