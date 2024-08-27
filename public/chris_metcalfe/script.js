// addEventListener("load", ... );

console.log('JavaCat writes "Hello World!"');
DemoMessage('PS: JavaCat says "Hello World!"');

// saveAsFile("myQuestions.json", myQuestions);
// exit;

document.getElementById("PowerButton").addEventListener("click", function () {
  console.log("PowerButton Clicked");
  ToggleDisplayFlex("Main");
});

document.getElementById("AboutMeButton").addEventListener("click", function () {
  console.log("About Me Clicked");
  document.getElementById("Main").style.display = "flex";
  document.getElementById("AboutMe").style.display = "flex";
  document.getElementById("Game").style.display = "none";
});

document.getElementById("GameButton").addEventListener("click", function () {
  console.log("Game Clicked");
  document.getElementById("Main").style.display = "flex";
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Game").style.display = "flex";
});

ListQuestions("ListOfQuestions", myQuestions);

// Functions ...

function ToggleDisplayFlex(elementIdName) {
  let element = document.getElementById(elementIdName);
  let displayValue = element.style.display;
  if (displayValue === "")
    displayValue = window.getComputedStyle(element).display;

  // console.log(`ToggleDisplayFlex: ${elementIdName} =/= ${displayValue}`);
  if (displayValue === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

function ListQuestions(elementIdName, questions) {
  let element = document.getElementById(elementIdName);
  let html = "";
  for (let i = 0; i < questions.length; i++) {
    html += `<li>${questions[i].question}`;
    if (questions[i].answer !== "") {
      html += `<div class="Answer">${questions[i].isTrue} : ${questions[i].answer}</div></li>`;
    }
  }
  element.innerHTML = html;
}
