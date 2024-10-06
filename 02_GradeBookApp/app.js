setTimeout(() => {
  let msg = document.querySelector("#msg");

  let testScoresList;

  while (!testScoresList) {
    testScoresList = prompt(
      "Give all the students test scores list of class using comma seperated .\nLike 80,70,60,90,85",
      "80,90,70,60,85,75"
    );

    if (!testScoresList) {
      alert(
        "please provide a valid  test scores list of class using comma seperated"
      );
    }
  }
  let IndividualStudentScore;

  while (!IndividualStudentScore) {
    IndividualStudentScore = +prompt(
      "Individual students test score like\n 80",
      80
    );

    if (!IndividualStudentScore) {
      alert("Please  provide a valid Individual students test score. ");
    }
  }

  let b = testScoresList.split(",");

  let numArr = b.map(Number);

  function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
      sum += score;
    }
    let pre = sum / scores.length;

    return pre.toPrecision(4);
  }

  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  function hasPassingGrade(score) {
    // msg.style.backgrounColor = "red";

    if (getGrade(score) === "F") {
      msg.style.backgroundColor = "red";
      msg.style.color = "black";
    }
  }
  hasPassingGrade(IndividualStudentScore);

  function studentMsg(totalScores, studentScore) {
    return getGrade(studentScore) === "F"
      ? "Class average: " +
          getAverage(totalScores) +
          ". Your grade: " +
          getGrade(studentScore) +
          ". You failed the course."
      : "Class average: " +
          getAverage(totalScores) +
          ". Your grade: " +
          getGrade(studentScore) +
          ". You passed the course.";
  }
  msg.innerHTML = studentMsg(numArr, IndividualStudentScore);
}, 4000);
