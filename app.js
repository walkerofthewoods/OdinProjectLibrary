var myLibrary = [];
let idNum = 0;

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.id = idNum;
        idNum++;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

function addBook(author, title, pages, read) {
        let addedBook = new Book(author, title, pages, read);
        let box = document.createElement('div');
        box.textContent = `${author} - ${title} (${pages}p) read=`;
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        addedBook.read ? checkbox.checked = true : checkbox.checked = false;
        box.appendChild(checkbox);
        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        document.body.appendChild(box).appendChild(btn);
        myLibrary.push(addedBook);
        box.setAttribute('id', `div${addedBook.id}`); 
        btn.setAttribute('id',`btn${addedBook.id}`);
        btn.addEventListener('click', removeBook);
}

function removeBook(i) {
    let id = i.currentTarget;
    id = id.id;
    id = id.slice(3);
    console.log(id);
    let elem = document.getElementById(`div${id}`);
    elem.parentNode.removeChild(elem);
}

function click() {
    //addBook
    //reset input boxes to default
    addBook(document.getElementById('authorInput').value,
    document.getElementById('titleInput').value,
    document.getElementById('pagesInput').value,
    document.getElementById('checkbox').checked);

    document.getElementById('authorInput').value = 'Author';
    document.getElementById('titleInput').value = 'Title';
    document.getElementById('pagesInput').value = '# of Pages';
    document.getElementById('checkbox').checked = 'checked';
}

addBook('Stephen King', 'Hearts in Atlantis', 528, true);
addBook("Don't Shoot the Dog", 'Karen Pryor', 240, false);
addBook('The Art of Communicating', 'Thich Nhat Hanh', 176, true);
addBook('A Whack on the Side of the Head', 'Roger von Oech', 271, false);
addBook('The Lone Surfer of Montana, Kansas', 'Davy Rothbart', 176, true);

document.getElementById('addBookBtn').addEventListener('click', click);
