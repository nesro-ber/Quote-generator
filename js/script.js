




// this the js linked to quote.html the others has script on html


var author = document.getElementById("author");
var quote = document.getElementById("quote");
var share = document.getElementById("share");
var btn = document.querySelector(".btn2");
var space = document.getElementById("space");
var save = document.getElementById("save");
var copy = document.getElementById("copy");
// var plasa = document.getElementById("plasa");
var inputAdd = document.getElementById("quoteinput");
var theinput=document.getElementById("theinput");

//  n3awd nrecupiri likedquote psq ki ndir delte rah ytnahaw li savgardithom or ykono farghin 

var likedQuotes = JSON.parse(localStorage.getItem("likedQuotes")) || [];
var newquotes = [];
var resultpro = [];


function addquote()
{   

  
   
    var promptValue=prompt("Add your quote :")
    newquotes.unshift(promptValue)


    // nsaouvgarder les quote li ktbhom user
   localStorage.setItem("newquotes", JSON.stringify(newquotes))
  //  localStorage.clear()
  
   
}

let approvedQuotes = JSON.parse(localStorage.getItem("approvedquotes")) || [];
let currentIndex = 0;

function randomQuote() {
  // nverifier ida kayn approvedquote ida kayn rah ytafichaw kaml omb3d yjo ta api
  if (currentIndex < approvedQuotes.length) {
   
    quote.innerText = approvedQuotes[currentIndex];
    author.innerText = "- User";
    currentIndex++;
  } else {
   
    fetch("https://api.quotable.io/random")
      .then((res) =>
        res.json().then((result) => {
          let authorPro = result.author;
          quote.innerText = result.content;
          author.innerText = "- " + authorPro;
        })
      );
  }
}

//  bach maginich lwla nfsha ndiro hadi

// randomQuote();




sound.addEventListener("click", talk)
function talk()
{
   let utterance= new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
   speechSynthesis.speak(utterance);
  console.log("sound is on")
}

btn.addEventListener("click", randomQuote)


share.addEventListener("click", ()=>{
    let lien=`https:/twitter.com/intent/tweet?url=${quote.innerText} by ${author.innerText}`
    window.open (lien, "_blank")
})

save.addEventListener("click", ()=>{
    likedQuotes.push(quote.innerText)

    // rani sauvgardit data t3 liked quotes "likedquote" howa l key w lokhr how data
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
    console.log(likedQuotes)
})


copy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(`"${quote.innerText}" -${author.innerText}`)
})














// let jiji = document.getElementById("jiji")
// jiji.addEventListener("click",add)

// function add()
// {
//     alert(likedQuotes)
// }
























// function add() {
//     if (quote.innerHTML && author.innerHTML) {
//         likedQuotes.push({
//             quote: quote.innerHTML,
//             author: author.innerHTML
//         });
//         localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));

//       console.log(likedQuotes)
// }

// }


















































//  In this methode i used array method start :


// var quotes = [

//     "Life Is A Succession Of Lessons Which Must Be Lived To Be Understood. " , 
//     "Life Is Made Of Ever So Many Partings Welded Together.",
//     "You Will Face Many Defeats In Life, But Never Let Yourself Be Defeated." ,
//   "The only thing that makes a dream impossible to achieve is the fear of failure",
//   "If you want your life to be more meaningful and exciting then don't give up on yourself.",
//     "You teach best what you most need to learn",
//     "The ladder of success is never crowded at the top",
//     "Give me six hours to chop down a tree and I will spend the first four sharpening the axe",
//     "There are people who have money and people who are rich.",
//     "If you cannot do great things, do small things in a great way.",
//     "Honesty is the best policy.",
//     "Most folks are as happy as they make up their minds to be.",
//     "Either I will find a way, or I will make one",
//     "The supreme art of war is to subdue the enemy without fighting",
//     "Anticipate the difficult by managing the easy.",
//     "From error to error one discovers the entire truth."



// ]

// var authors = [
//     " Ralph Waldo Emerson",
//     "Charles Dickens",
//     "Maya Angelou",
    
//     "Anonymous",
//     "Richard Bach",
//     "Napoleon Hill",
//     "Enstien",
//     "Abraham Lincoln",
//     "Coco Chanel ",
//     "Napoleon",
//     "Benjamin Frankln",
//     "Abraham Lincoln    ",
//     "Philip Sidney",
//     "Sin Tzu",
//     "Laozi",
//     "Sigmund Freud    "



// ]

// var images = [ 
//                "red",
//               "yellow",
//                "green",
//                "orange",
//                "cyan",
//                "ivory",
//                "gold",
//                "silver",
//                "aquamarine",
//                "wheat",
//                "purple"
//              ]


  
             
  

// btn.addEventListener("click" , () =>{
    
   
//   var randomIndex = Math.floor(Math.random() * quotes.length)
 
//         quote.innerHTML=quotes[randomIndex]
//         author.innerHTML=authors[randomIndex]
     
        
//         space.style.backgroundColor= images[randomIndex]

  
//         // likedQuotes.push(
//         //     quotes[randomIndex] ,
//         //     authors[randomIndex]

//         // )
 
// })















