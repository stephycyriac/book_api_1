const express = require("express");
//database
const database = require("./database");

//initialization
const booky = express();

/*
route               /
description       get all books
access           public
parameter         none
methods          GET
*/ 
booky.get("/" ,(req,res)=>{ 
return res.json({books:database.books});
});

/*
route               /is
description       get spcific book based on ISBN
access           public
parameter         ISBN
methods          GET
*/
booky.get("/is/:isbn",(req ,res)=> {
const getSpecificBook= database.books.filter((book)=> 
book.ISBN=== req.params.isbn);


if (getSpecificBook.length===0)
{
    return res.json({
 error:`no book found for the ISBN of ${req.params.isbn}`,
});
}
return res.json({book : getSpecificBook});
});


/*
route               /c
description       get spcific book based on category
access           public
parameter         category
methods          GET
*/

booky.get("/c/:category",(req,res) =>{
const getSpecificBook= database.books.filter((book)=> 
book.category.includes(req.params.category)
);
if (getSpecificBook.length===0)
{
    return res.json({
 error:`no book found for the category of ${req.params.category}`,
});
}
return res.json({book : getSpecificBook});
});

/*
route               /author
description       get all authors
access           public
parameter        nil
methods          GET
*/

booky.get("/author",(req,res)=> {
    return res.json({authors:database.author});
});
/*
route               /author/book
description       get all authors based on books
access           public
parameter         ISBN
methods          GET
*/
booky.get("/author/book/:isbn",(req ,res)=>{
    const getSpecificAuthor= database.author.filter((author)=> 
author.books.includes(req.params.isbn)
);
if (getSpecificAuthor.length===0)
{
    return res.json({
 error:`no author found for the book of ${req.params.isbn}`,
});
}
return res.json({authors : getSpecificAuthor});
});
/*
route               /publication
description       get all publications
access           public
parameter         nil
methods          GET
*/
booky.get("/publications",(req,res)=> {
return res.json ({publications:database.publications});
});

booky.listen(3000, ()=> console.log("the server is running 😎 cool"));