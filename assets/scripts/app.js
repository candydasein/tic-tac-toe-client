'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//order of page: 
//1 sign up or sign in: HTML -> API -> jQuery -> DOM
//2 game-board: DOM
//3 first click on board puts X on square clicked: DOM -> API ->
//4 second click puts O on square clicked and so on until
//5 win, lose, or draw
//6 result message given to user
//7 counter and API updated
//8 reset button

$(() => {
  //set up eventhandler for each board index
  $('#0').on('click', //code to communicate with API)
  $('#1').on('click', //code to communicate with API)
  $('#2').on('click', //code to communicate with API)
  $('#3').on('click', //code to communicate with API)
  $('#4').on('click', //code to communicate with API)
  $('#5').on('click', //code to communicate with API)
  $('#6').on('click', //code to communicate with API)
  $('#7').on('click', //code to communicate with API)
  $('#8').on('click', //code to communicate with API)
})

// board is an array with single numbers as coordinates, from 0-8
  // array in JS that captures a given current state of the board
  // function that iterates through array to determine if there are any 3 in a rows
  // simply map out every single possible path to victory in if statements:
  // 0-1-2, 3-4-5, 6-7-8, 0-3-6, 1-4-7, 2-5-8, 0-4-8, 2-4-6
  // e.g., if 0 and 1 and 2 === 'o' then 'o' wins and "over" = true 
  // UNTIL array.length = 9, then draw

  const xoArray = [/*string array from API server, x or o clicks pushed in*/]
  {if (xoArray(0) && xoArray(1) && xoArray (2) == 'o' ||
      xoArray(3) && xoArray(4) && xoArray (5) == 'o' ||
      xoArray(6) && xoArray(7) && xoArray (8) == 'o' ||
      xoArray(0) && xoArray(3) && xoArray (6) == 'o' ||
      xoArray(1) && xoArray(4) && xoArray (7) == 'o' ||
      xoArray(2) && xoArray(5) && xoArray (8) == 'o' ||
      xoArray(0) && xoArray(4) && xoArray (2) == 'o' ||
      xoArray(2) && xoArray(4) && xoArray (6) == 'o')
      {/* o wins and over = true and message pops up and counter is updated and 
      board reset button pops*/}
  else if (xoArray(0) && xoArray(1) && xoArray (2) == 'x' ||
      xoArray(3) && xoArray(4) && xoArray (5) == 'x' ||
      xoArray(6) && xoArray(7) && xoArray (8) == 'x' ||
      xoArray(0) && xoArray(3) && xoArray (6) == 'x' ||
      xoArray(1) && xoArray(4) && xoArray (7) == 'x' ||
      xoArray(2) && xoArray(5) && xoArray (8) == 'x' ||
      xoArray(0) && xoArray(4) && xoArray (2) == 'x' ||
      xoArray(2) && xoArray(4) && xoArray (6) == 'x')
      {/* x wins and over = truea nd message pops up and counter is updated and 
      board reset button pops*/}
  else {/*it's a draw and over = true and message pops up and counter is updated and 
  board reset button pops*/}
}
  )




  // game actions come from api
  // game states get saved in api
  // each click stores an x or an o in a specific index (depending on the
  // board position of click) within a string array called "cells" which lives within
  // an object for each indidivual game played (each of which has a unique id) 
  // all of which exists within an array called "games" 
  // each individual game also has a boolean entry to express whether it is over or not
  // if it's over, restart button should become available at that point
