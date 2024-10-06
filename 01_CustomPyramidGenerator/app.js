setTimeout(()=>{
const favicon = document.querySelector("#favicon");
const mainContainer = document.querySelector("#mainContainer");
const resultMessage = document.querySelector("#resultMessage");
const locationWord = document.querySelector("#locationWord");
const directionWord = document.querySelector("#directionWord");
const directionIcon = document.querySelector("#directionIcon");
const displayScreenPyramid = document.querySelector("#displayScreenPyramid");
const loadingIndicator = document.querySelector("#loadingIndicator"); 

let character;
const validCharacters = ["*", "#", "$", "@", "!"];

while (!character || !validCharacters.includes(character)) {
    character = prompt("What's your favorite pyramid character?\n(e.g., *, #, $, @)", "!");
    
    if (!validCharacters.includes(character)) {
        alert("Please provide a valid character like\n(e.g., *, #, $, @)");
    }
}

let count;
while (!count) {
  count = +prompt("What's your pyramid count?", 10);
  if (!count || count <= 0) {
    alert("Please provide a valid positive number for the pyramid count.");
  }
}

while (true) {
    pyramidDirection = prompt(
      "What's your pyramid direction?\nStandard or inverted?",
      "standard"
    ).toLowerCase();
    if (pyramidDirection !== "standard" && pyramidDirection !== "inverted") {
      alert(
        "Please provide either 'standard' or 'inverted' for the pyramid direction."
      );
    } else {
      break; // Break the loop if valid input
    }
  }

  let pyramidLocation;
  while (true) {
      pyramidLocation =  prompt("What's your pyramid location?\nScreen or console?","console").toLowerCase()
      if (pyramidLocation !== "console" && pyramidLocation !== "screen") {
          "Please provide either 'screen' or 'console' for the pyramid location."
      }else {
        break; // Break the loop if valid input
      }
  } 

const dataForEachRowOfPyramid = [];


const locations = [
  {
    location: "console",
    direction: "standard",
    icon: "▲",
    favicon: "./assets/standard-pyramid-img.png",
  },
  {
    location: "console",
    direction: "inverted",
    icon: "▼",
    favicon: "./assets/inverted-pyramid-img.png",
  },
  {
    location: "screen",
    direction: "standard",
    icon: "▲",
    favicon: "./assets/standard-pyramid-img.png",
  },
  {
    location: "screen",
    direction: "inverted",
    icon: "▼",
    favicon: "./assets/inverted-pyramid-img.png",
  },
];

const generateAndFormattedConsolePyramid = (currentRowNumber,totalRowCount)=>{
    return " ".repeat(totalRowCount - currentRowNumber) + character.repeat(2 * currentRowNumber - 1) + " ".repeat(totalRowCount - currentRowNumber);
}

const generateAndFormattedScreenPyramid = (currentRowNumber,totalRowCount)=>{
    return "&nbsp;".repeat(totalRowCount - currentRowNumber) + character.repeat(2 * currentRowNumber - 1) + "&nbsp;".repeat(totalRowCount - currentRowNumber);
}

const update = (dataLocation)=>{
    locationWord.innerHTML = dataLocation.location;
    directionWord.innerHTML = dataLocation.direction;
    directionIcon.innerHTML = dataLocation.icon;
    favicon.href = dataLocation.favicon;
}

mainContainer.style.display = "none";
loadingIndicator.style.display = "block";
setTimeout(()=>{
    loadingIndicator.style.display = "none";
    resultMessage.style.display = "block"
if (pyramidLocation === "console") {
  for (let i = 1; i <= count; i = i + 1) {
    if (pyramidDirection === "standard") {
      dataForEachRowOfPyramid.push(
        generateAndFormattedConsolePyramid(i, count)
    );
    update(locations[0])
    } else {
      dataForEachRowOfPyramid.unshift(
        generateAndFormattedConsolePyramid(i, count)
      );
      update(locations[1])

    }
  }

  let result = "";

  for (const row of dataForEachRowOfPyramid) {
    result += row + "\n";
  }

  console.log(result);
} else {
  for (let i = 1; i <= count; i = i + 1) {
    if (pyramidDirection === "standard") {
      dataForEachRowOfPyramid.push(generateAndFormattedScreenPyramid(i, count));
      update(locations[2])

    } else {
      dataForEachRowOfPyramid.unshift(
        generateAndFormattedScreenPyramid(i, count)
        
    );
    update(locations[3])
    }
  }

  let result = "";

  for (const row of dataForEachRowOfPyramid) {
    result += row + "<br />";
  }
  displayScreenPyramid.innerHTML = result;
}


},3000)

},2000)