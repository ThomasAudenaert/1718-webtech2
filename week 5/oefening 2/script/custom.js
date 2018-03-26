let books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false,
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true,
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true,
    },
    {title: 'Fantasia',
    author: 'Geronimo Stilton',
    alreadyRead: true,
    },
    {title: 'Fantasia XII',
    author: 'Geronimo Stilton',
    alreadyRead: false,
    },
    ];

    let divBooks = document.getElementById('books');


    for(let i = 0; i < books.length; i++){

        let content = '';

        content = '<p>' + books[i].title + ' by ' + books[i].author + '</p>'
        if (books[i].alreadyRead) {
            content += '<p>You have already read this novel</p>'
        } else {
            content += '<p>It\'s time to read this novel!</p>'
        }

        content += '<hr>';

        divBooks.innerHTML += content;
    };

    let Book = function(title, author, alreadyRead) {

        this.title = title,
        this.author = author,
        this.alreadyRead = alreadyRead,
        this.output = function() {
            if (this.alreadyRead) {
                return 'al gelezen';
            } else {
                return 'nog niet gelezen';
            }
        }
    }

let myFavouriteBook = new Book('Twilight', 'Stephanie Meyer', false);
let excitingNovel = new Book('The Da Vinci', 'Dan Brown', true);
console.log(myFavouriteBook.output());
console.log(excitingNovel);

