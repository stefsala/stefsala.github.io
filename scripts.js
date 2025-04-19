function getAge() {

    const yearOfBirth = "1996";
    var today = new Date();
    var age = today.getFullYear() - yearOfBirth;
    if(today.getMonth()<= 5)
        // return age - 1;
        return age -1;
    else
        return age;
}

function copyYear() {
    var today = new Date();
    return today.getFullYear();
}

// document.getElementById("my_age").innerHTML = getAge();