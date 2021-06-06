let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">  
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>  
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    
    <header>
        <div class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container">
                <h1 class= "display-4">Team Profile Generator</h1>
            </div>
        </div>
    </header>

    <main>`

const generateHTML = (arr) => {
    arr.forEach(employee => {
        switch(employee.getRole()) {
            case "Manager":
                managerCreate(employee);
                break;
            
            case "Engineer":
                engineerCreate(employee);
                break;

            default:
            internCreate(employee);
                break;
        }
    });

    return html+=

    `</main>
</body>
</html>`

}

const managerCreate = (manager) => {
    return html+=
    `<div class="card" style="width: 20rem;">
    <div class="card-body">
       <div class="card-header">
       <h5 class="card-title">${manager.getName()}</h5>
       <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-tasks"></i>${manager.getRole()}</h6>
       </div>
       <ul class="list-group list-group-flush">
           <li class="list-group-item">ID No.: ${manager.getId()}</li>
           <li class="list-group-item">Email: ${manager.getEmail()}</li>
           <li class="list-group-item">Office No.: ${manager.getOfficeNumber()}</li>
       </ul>
   </div>
</div>
`
}

const engineerCreate = (engineer) => {
    return html+=
    `<div class="card" style="width: 20rem;">
    <div class="card-body">
       <div class="card-header">
       <h5 class="card-title">${engineer.getName()}</h5>
       <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-cogs"></i>${engineer.getRole()}</h6>
       </div>
       <ul class="list-group list-group-flush">
           <li class="list-group-item">ID No.: ${engineer.getId()}</li>
           <li class="list-group-item">Email: ${engineer.getEmail()}</li>
           <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
       </ul>
   </div>
</div>
`
}

const internCreate = (intern) => {
    return html+=
    `<div class="card" style="width: 20rem;">
    <div class="card-body">
       <div class="card-header">
       <h5 class="card-title">${intern.getName()}</h5>
       <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-graduation-cap"></i>${intern.getRole()}</h6>
       </div>
       <ul class="list-group list-group-flush">
           <li class="list-group-item">ID No.: ${intern.getId()}</li>
           <li class="list-group-item">Email: ${intern.getEmail()}</li>
           <li class="list-group-item">School: ${intern.getSchool()}</li>
       </ul>
   </div>
</div>
`
}

module.exports = generateHTML;