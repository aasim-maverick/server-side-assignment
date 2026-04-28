var library = [
 { author:'MAVERICK', title:'The Road Ahead', readingStatus:true },
 { author:'MAVERICK', title:'Biography', readingStatus:true },
 { author:'MAVERICK', title:'Mockingjay', readingStatus:false }
];

library.forEach(book => {
 console.log(book.title + " - " + book.readingStatus);
});
