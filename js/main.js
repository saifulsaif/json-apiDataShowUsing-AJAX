//var myCat = {
//    "name": "meowsalot",
//    "species": "cat",
//    "favfood ": "tuna"
//}
//myCat.favfood;
//var myFavColor = ["blue", "green"];
//myFavColor[1];
//
//var thePets = [
//    {
//        "name": "meowsalot",
//        "species": "cat",
//        "favfood ": "tuna"
//    },
//    {
//        "name": "barky",
//        "species": "dog",
//        "favfood ": "carrots"
//    }
//];
//thePets[1].favfood;
var counter = 1;
var animalContainer = document.getElementById("animal-info");
var topicContainer=document.getElementById("topic");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var ourReuest = new XMLHttpRequest();
    ourReuest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
    ourReuest.onload = function () {
        // console.log(ourReuest.responseText);  
        var ourData = JSON.parse(ourReuest.responseText);
        renderHTML(ourData);
    };
    ourReuest.send();
    counter++;
    if (counter > 3) {
        btn.classList.add("hide-me");
    }
});
  topicContainer.insertAdjacentHTML('beforeend', 'Ajex and Json');

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a " + data[i].species + "that likes to eat";
        for (j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += " and " + data[i].foods.likes[j];
            }
        }
        htmlString += 'and dislikes';
        for (j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += " and " + data[i].foods.dislikes[j];
            }
        }
        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
  
}