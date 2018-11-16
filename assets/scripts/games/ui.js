const store = require('../store.js')

const signUpSuccess = function (data) {
    $('#message').text('Welcome!')
    $('#message').addClass('success')  
    $('#sign-up').hide()  
    console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#sign-up').hide()  
    $('#sign-in').hide()
    document.getElementById('change-password').hidden = false
    document.getElementById('sign-out').hidden = false
    document.getElementById('new-game-button').hidden = false
    document.getElementById('get-games-button').hidden = false  
    $('#message').text('You are in.')
    $('#message').addClass('success')
    $('#game-board').show()    
    console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
    $('#message').text('Password Changed.')
    $('#message').addClass('success')    
    console.log('changePasswordSuccess ran. Data is', data)
}

const changePasswordFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('changePassword ran. Error is :', error)
}

const signOutSuccess = function (data) {
    $('#message').text('Goodbye.')
    store.user = null
    $('#message').addClass('success')    
    console.log('signOutSuccess ran. Data is', data)
}

const signOutFailure = function (error) {
    $('#message').text('Nope. Did not work.')
    $('#message').addClass('failure')
    console.log('signOutFailure ran. Error is :', error)
}

const startGameSuccess = function(data) {
    store.game = data.game 
    $('#message').text('Good luck.')  
    console.log('startGameSuccess ran. Data is :', data)
}

const startGameFailure = function(data) {
    $('#message').text('Oops! A game could not start!')
    $('#message').addClass('success') 
    console.log('startGameFailure ran. Data is :', data)
}

const updateGameSuccess = function(data) {
    store.game = data.game   
    console.log('updateGameSuccess ran. Data is :', data)
}


const getGamesSuccess = function (data) {
    store.games = data.games
    if (store.games.length > 0) {
        store.games.forEach(function (game) {
    $('#mini-board').append(`
        <tr>
          <td>${game.id}</td>
          <td>
            <table>
              <tr>
                <td>${game.cells[0]}</td>
                <td>${game.cells[1]}</td>
                <td>${game.cells[2]}</td>
              </tr>
              <tr>
                <td>${game.cells[3]}</td>
                <td>${game.cells[4]}</td>
                <td>${game.cells[5]}</td>
              </tr>
              <tr>
                <td>${game.cells[6]}</td>
                <td>${game.cells[7]}</td>
                <td>${game.cells[8]}</td>
              </tr>
            </table>
          </td>
        </tr>
       `)
    })
} else {
    $('#message').append('<p>No past games for this user.</p>')
}
}

const getGamesFailure = function () {

}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure,
    updateGameSuccess,
    startGameSuccess,
    startGameFailure,
    getGamesFailure,
    getGamesSuccess
}
