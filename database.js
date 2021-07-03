const books=[{
    ISBN:"1234Book",
    titile:"Meluha",
    pubDate:"2021-09-11",
    language:"en",
    numPage:250,
    author:[1,2],
    publication:[1],
    category:["tech","programming","journal"],


},
];

const author=[{
    id:1,
    name : "Amish",
    books:["1234Book","thomas"]
 },
 {
     id:2,
     name:"anu",
     books:["1234Book"]
 },
];

const publications =[{
    id:1,
    name:"DC BOOKS",
    books:["1234Book"],
},
];
module.exports = { books, author , publications};