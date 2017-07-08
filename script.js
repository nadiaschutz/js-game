(function () {


    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; 1 < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        
            if (ans === this.correct) {
                console.log('Correct answer!');
                sc=callback(true);
            } else {
                console.log('Wrong answer! Try again');
                sc=callback(false);
            }
        
    }
    var q1 = new Question('Is the Earth round?', ['Yes', 'No'], 0);
    var q2 = new Question('How many weeks in an year?', ['112', '52', '51', '31'], 1);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Fun', 'Hard', 'Tediuos'], 1);
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return score;
        }
    }
    var keepScore = score();

    function nextQuestion() {

        var num = Math.floor(Math.random() * questions.length);
        questions[num].displayQuestion();
        var answer = prompt('Please select the correct answer.');


        if (answer !== 'exit') {
            questions[num].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }


    }
    nextQuestion();


})();
