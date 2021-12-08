// console.log("hello arin!!");
// making constructor
function book(name, author, booktype) {
    this.name = name;
    this.author = author;
    this.booktype = booktype;
}
// display constructor
function display() {
    
}

// prototype display vaale
display.prototype.add = function (bookie) {
    tablebodytext = document.getElementById("tablebodytext");
    tablebodytext.innerHTML += `<tr>
    <th scope="row">-></th>
    <td>${bookie.name}</td>
    <td>${bookie.author}</td>
    <td>@${bookie.booktype}</td>
  </tr>`
}
display.prototype.clear = function () {
    let formmain = document.getElementById("formmain");
    formmain.reset();
}


display.prototype.validate = function (bookie) {
    if (bookie.name.length < 2 || bookie.author.length < 2) {
        return false;
    }
    else {
        return true;

    }
}
display.prototype.show = function (type, msg) {

    let tablebodytext = localStorage.getItem("tablebodytext");

    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>YIPPEEE! </strong>${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
    setTimeout(function () {
        message.innerHTML = ''
    }, 3000);
}



let formmain = document.getElementById("formmain");


formmain.addEventListener('submit', submitform);
function submitform(e) {

    let name = document.getElementById("booktext").value;
    let author = document.getElementById("authortext").value;

    

    let type;

    let fictionid = document.getElementById("fictionid");
    let programmingid = document.getElementById("programmingid");
    let scienceid = document.getElementById("scienceid");

    if (fictionid.checked) {
        type = fictionid.value;
    }
    else if (programmingid.checked) {
        type = programmingid.value;
    }
    else if (scienceid.checked) {
        type = scienceid.value;
    }
    let bookie = new book(name, author, type);
    
    

    
    // console.log(c);
    let displayvala = new display();
    if (displayvala.validate(bookie)) {

        displayvala.add(bookie);
        // displayvala.clear();
        displayvala.show("success", "your book has been successfully added");
    }
    else {
        // show error
        displayvala.show("danger", "sorry you cannot add this book");
    }
    e.preventDefault();

}