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
  var correct = 0;
  var wrong = 0;
  //   var questions;

  var questions = [
    {
      question: 'Colorado?',
      answer: 'foco',
      answerArray: ['foco', 'parker', 'springs']
    },
    {
      question: 'Wyoming?',
      answer: 'Cheyenne',
      answerArray: ['douglas', 'laramie', 'cheyenne']
    }
  ];

  console.log(questions);
  // start game

  $('.start').on('click', function() {
    // get rid of the button
    $(this).css('display', 'none');
    // and show the questions div
    $('.mainDiv').css('display', 'block');

    // create a paragraph level block element? and append it to the questions div
    for (var i = 0; i < questions.length; i++) {
      var newQuestion = $(`<div class=${i}> ${questions[i].question} </div>`);
      $('.question').append(newQuestion);
      for (var j = 0; j < questions[i]['answerArray'].length; j++) {
        var ansDiv = $(
          `<div id=${i} class='option'>${questions[i]['answerArray'][j]}</div>`
        );
        $(`.${i}`).append(ansDiv);
      }

      //with each loop, generate a paragraph block which contains the question
      // var newQuestion = $(`<p> ${questions[i].question} </p>`);

      //append it to the questionsDiv
      //$('.questionsDiv').append(newQuestion);
    }

    $('.option').on('click', function() {
      console.log($(this).attr('id'));

      // var userGuess =
      // if (userGuess === )
    });
    // $('.option').on('click', function() {
    //   //console.log($(this).html());
    //    var userSelected = $(this).html();

    //    if(userSelected.indexOf(questions))
    // );
  });
});
