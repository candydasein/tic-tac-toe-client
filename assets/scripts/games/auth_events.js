'use strict'

const getFormFields = require('../../../lib/get-form-fields.js') 
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) { 
    event.preventDefault()
    const data = getFormFields(event.target)
    api.signUp(data) 
    .then(ui.signUpSuccess) 
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // document.getElementById('change-password').hidden = false
    // document.getElementById('sign-out').hidden = false
    // document.getElementById('new-game-button').hidden = false
    // document.getElementById('get-games-button').hidden = false
    api.signIn(data) 
    .then(ui.signInSuccess) 
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.changePassword(data) 
    .then(ui.changePasswordSuccess) 
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    $('#mini-board').hide()
    $('#game-div').hide()
    $('#change-password').hide()
    $('#sign-out').hide()
    $('#new-game-button').hide()
    $('#get-games-button').hide()
    $('#playagainbutton').hide()
    $('#sign-up').show()  
    $('#sign-in').show()  
    document.getElementById('sign-up').hidden = false
    document.getElementById('sign-in').hidden = false
    api.signOut() 
    .then(ui.signOutSuccess) 
    .catch(ui.signOutFailure)
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut
}
