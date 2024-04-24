"use strict"

function fetchDatos() {
    document.getElementById('fetchButton').addEventListener('click', async () => {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        console.log(data);
        document.getElementById('result').innerText = JSON.stringify(data);
    });
} 