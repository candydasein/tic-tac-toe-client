# tic-tac-toe-client
Tic Tac Toe Game for GA wdi-pvd-04

This is a SPA tic-tac-toe game that is great fun for the whole family. It uses a custom, JavaScript game engine, HTML and CSS, jQuery for
interacting with the DOM, setting event handlers and so forth, and AJAK for working with an API. Each user move posts an update to the API, 
and the user is able to see visual representations of all past games upon request. In the future, I would like to allow the user to see
their record and not just visual representations of past boards. I would also like to improve upon the CSS, which is fun now but could be better. 
In particular, I would like to use screen space better -- and more successfully in keeping with my wireframe. 

My work flow was as follows:

1) create the game engine
2) create the game board itself in HTML/CSS
3) create API commands to make sure the game engine's output and the server's needs are aligned
4) fill in all remaining needs (jQuery shows and hides, user interface, auth events, player switching, etc.)

User stories were:

1) The player should be able to log in with credentials, log out, and change their password
2) The player should be able to choose spaces on a grid to place an X or O
3) The player must be able to know if they won, lost, or tied
4) The player must be able to play again without refreshing the page
5) The player should be immersed in some kind of fun or weird feeling 


			
