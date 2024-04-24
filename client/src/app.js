"use strict"

function fetchComments() {
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        data.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('card', 'text-center', 'mb-4');

            commentElement.innerHTML = `
                <div class="card-header">
                    <h2 class="card-title">${comment.name}</h2>
                    <p class="card-subtitle">${comment.email}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">${comment.body}</p>
                </div>
            `;

            document.getElementById("comments").appendChild(commentElement);
        });
    })
    .catch(error => console.error(error))
}

function fetchDatos() {
    document.getElementById('fetchButton').addEventListener('click', async () => {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        console.log(data);
        document.getElementById('result').innerText = JSON.stringify(data);
    });
} 