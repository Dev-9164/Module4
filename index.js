
let Names = document.getElementById("names");
let helloSpeaker = {};
let speakWord = "Hello";
helloSpeaker.speak = (name) => {
  console.log(speakWord + " " + name);
  
};
window.helloSpeaker = helloSpeaker;

let byeSpeaker = {};
let speakWord1 = "Good Bye";
byeSpeaker.speak = (name) => {
  console.log(speakWord1 + " " + name);
};

window.byeSpeaker = byeSpeaker;

(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  
  
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
