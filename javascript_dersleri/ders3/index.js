//console.log(document.location.pathname); // dosya uzantısı pathname
//console.log(document.body);   // bodye ulaşma
//
//document.body.style.backgroundColor = "aqua"; // background aqua
//
//console.log(document.URL);    // tam konum
//console.log(document.baseURI);// tam konum

function tikla(){
    let w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.body.style.color = "red";
    w.document.body.style.fontFamily = "sans-serif";
    w.document.close();
}

document.getElementById('text').innerHTML = "My Name Is Koray";