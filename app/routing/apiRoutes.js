var friends = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
      return res.json(friends);  
    });

    app.post('/api/friends', function(req, res){
        var newUser = req.body;

        console.log(newUser);

        // var userScores = [1, 2, 1, 1, 2, 2, 2, 1, 1, 5];
        var userScores = newUser.scores;
        // friends.push(newUser);
        var chosenDifference = 1000;
        var chosenFriend;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 1000;
            for (var k = 0; k < friends[i].scores.length; k++) {
                totalDifference += Math.abs(parseInt(friends[i].scores[k]) - parseInt(userScores[k]));
            }
            if (chosenDifference < totalDifference) {
                chosenDifference = totalDifference;
                chosenFriend = friends[i]
            }
        }
        // console.log(friends);
        friends.push(newUser);
        res.json(chosenFriend);
    });
}