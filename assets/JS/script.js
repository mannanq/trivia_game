/* 
    When user clicks the start button, trivia game appears,
    want start button to go away (button.style.display = 'none'),
    and the question div appears (div.style.display = 'block'),
    once inside the question div, timer starts and 5 random questions are generated
    need to keep tally of the correct and wrong answers variables
    once timer is up, score i.e. correct and wrong asnwers are displayed
    
    
    set up blank html with a place for questions and answers. Dynamically generate a question and place it in the question space and same with answers
    set up questions as objects inside an array (with the question and answer) so that we can select them at random




*/

$(document).ready(function() {
  var correct, wrong, questions, questionID, userGuess, banner;

  correct = 0;
  wrong = 0;
  unanswered = 0;
  //   var questions;

  questions = [
    {
      question:
        "In The Three Musketeers, three musketeers were D'Artagnan, Athos & Porthos. Who was the fourth musketeer?",
      answer: 'Aramis',
      answerArray: ['de Tréville', 'Planchet', 'Aramis']
    },
    {
      question:
        'Which country was the ship that rescued Robinson Crusoe heading to?',
      answer: 'Brazil',
      answerArray: ['India', 'United Kingdon', 'Brazil', 'Argentina']
    }
  ];

  console.log(questions);
  // start game

  $('.start').on('click', function() {
    setTimeout(timeUp, 10000);

    // get rid of the button
    $(this).css('display', 'none');
    // and show the questions div
    $('.mainDiv').css('display', 'block');

    // create a paragraph level block element? and append it to the questions div
    for (var i = 0; i < questions.length; i++) {
      var newQuestion = $(
        `<div class='${i} options'><p><em>${
          questions[i].question
        }</em></p></div>`
      );
      $('.question').append(newQuestion);
      for (var j = 0; j < questions[i]['answerArray'].length; j++) {
        var ansDiv = $(
          `<div id=${i} class='option'>${questions[i]['answerArray'][j]}</div>`
        );
        $(`.${i}`).append(ansDiv);
      }
    }

    $('.option').on('click', function() {
      questionID = $(this).attr('id');
      userGuess = $(this).html();

      if (userGuess === questions[questionID].answer) {
        correct++;
      } else {
        wrong++;
      }
    });
    function timeUp() {
      $('.mainDiv').css('display', 'none');
      $('.resultDiv').css('display', 'inline');
      banner = $('<h3>').text("Time's Up!");
      $('.resultDiv').append(banner);

      $('.resultDiv').append(`<p>Correct: ${correct}</p>`);
      $('.resultDiv').append(`<p>Wrong: ${wrong}</p>`);
    }
  });
});
