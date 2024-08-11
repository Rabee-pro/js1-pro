function generate(){
    var quotes = {
        "__Winston Churchill" : '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
       "__Herman Melville" : '"It is better to fail in originality than to succeed in imitation."',
       " —Colin R. Davis" : '"The road to success and the road to failure are almost exactly the same."',
       "—Henry David Thoreau" : '"Success usually comes to those who are too busy to be looking for it."',
       "—Dale Carnegie" : '"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success."'
    };

    let authors = Object.keys(quotes);
    console.log(authors);
    let author = authors[Math.floor(Math.random()*authors.length)];
    let quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML= author;
}