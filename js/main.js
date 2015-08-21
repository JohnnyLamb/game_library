var Game = function(title, genre) {
  this.title = title || undefined;
  this.genre = genre || undefined;
};

Game.prototype.render = function() {
  this.$element = $('<div class="game">')
    .text("The game of " + this.title + " is a " + this.genre);
  return this.$element;
};


var GameLibrary = function(libTitle) {
  this.title = libTitle;
  this.games = [];
};

GameLibrary.prototype.render = function(gameLibrary) {

  for (var i = 0; i < this.games.length; i++) {

    this.$element = $('<div class="gameLibrary">').text(this.games[i].genre);
  }

  // console.log(this.$element);
  return this.$element;
};


var libraryArray = [];
$(document).on('ready', function(event) {

  $('#submit').on("click", function(event) {
    event.preventDefault();


    var checkLibrary = function() {
      var seen = false;
      for (i = 0; i < libraryArray.length; i++) {
        if (libraryArray[i].title == $('input[name=genre]').val()) {
          libraryArray[i].games.push(game);
          seen = true;
        }
      }

      if (seen === false) {
        var library = new GameLibrary($('input[name=genre]').val());
        library.games.push(game);
        libraryArray.push(library);
      }
    };




    var game = new Game($('input[name=gamename]').val(), $('input[name=genre]').val());

    checkLibrary();
    console.log(libraryArray);



    $('.gamebucket ul').append(game.render());

    // $('.librarybucket ul').append(library.render());



    // console.log(GameLibrary.games.push(game));


  });


});
