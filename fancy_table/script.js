document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://reqres.in/api/users', true);
    xhttp.send();
    xhttp.onload = function() {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            document.getElementById('table').innerHTML = '<tr><td>ID</td><td>Email</td><td>First Name</td><td>Last Name</td><td>Avatar</td></tr>'
            var output = '';
            for (var i in users['data']) {
                output += '<tr><td>' + users['data'][i].id + '</td><td>' + users['data'][i].email + '</td><td>' + users['data'][i].first_name + '</td><td>' + users['data'][i].last_name + '</td><td><img src="' + users['data'][i].avatar + '"height= "100px"></td></tr>';
            }
            document.getElementById('table').innerHTML += output;
        } else if (this.status == 403) {
            document.getElementById('content').innerHTML = "Forbidden";
        } else if (this.status == 404) {
            document.getElementById('content').innerHTML = "Not found";
        }
    }
}