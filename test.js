function test() {

    var username = document.getElementById('username');

    var value = username.getAttribute('value');
    if (value === 'a') {
        alert("wrong")
    } else {
        alert('right')
    }

}
