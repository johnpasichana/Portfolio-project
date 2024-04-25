"use strict"

function fetchData() {
    document.getElementById('fetchButton').addEventListener('click', async () => {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        console.log(data);
        document.getElementById('result').innerText = JSON.stringify(data);
    });
} 