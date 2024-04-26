"use strict"

function showProjects(){
    fetch("https://portfolio-project-backend-w96x.onrender.com/projects/")
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('card', 'text-center', 'mb-4');

            projectElement.innerHTML = `
                <div class="card-header">
                    <h2 class="card-title">${project.name}</h2>
                    <p class="card-subtitle"><a href="${project.repository}" target="_blank">${project.repository}</a></p>
                </div>
                <div class="card-body">
                    <img src="${project.image}" alt="Project Image" class="img-fluid" style="width: 200px; height: auto;">
                    <p class="card-text">${project.description}</p>
                </div>
            `;

            document.getElementById("projects").appendChild(projectElement);
        });
    })
    .catch(error => console.error(error))
}