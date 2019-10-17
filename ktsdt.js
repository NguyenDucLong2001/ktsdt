function kt(b) {
    c = /^\(84\)\-\(0\d{9}\)$/;
    if (c.test(b)){
        document.write("Hợp lệ")
    }
    else {
        document.write("Không hợp lệ")
    }
}
function baby() {
    let input = document.getElementById('input').value;
    let cute = kt(input);
    document.getElementById('cute').innerHTML = cute;
}