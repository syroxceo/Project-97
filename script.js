document.getElementById('theme').addEventListener('change', function() {
    var selectedTheme = this.value;
    document.body.className = selectedTheme;
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

var timer;
function startTimer() {
    var startTime = Date.now();
    var duration = 5 * 60 * 1000; // 5 minutes in milliseconds
    timer = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var remainingTime = duration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(timer);
            document.getElementById('timerDisplay').textContent = '00:00:00';
            alert('Time\'s up!');
        } else {
            var formattedTime = new Date(remainingTime).toISOString().substr(11, 8);
            document.getElementById('timerDisplay').textContent = formattedTime;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

var affirmations = [
    "I am capable of achieving my goals.",
    "I attract success into my life.",
    "I am focused and productive.",
    "I believe in my abilities.",
    "I am motivated to accomplish my tasks.",
    "I am in the right place at the right time, doing the right thing,",
    "You are loved just for being who you are, just for existing.",
    "Make way for the unprecedented and watch your reality rearrange yourself,",
    "Open your heart and drink in the glorious day",
    "Am I good enough? Yes I am,",
    "I am deliberate and afraid of nothing,",
    "Your life is about to be incredible,",
    "Who you are inside is what helps you make and do everything in life,",
    "Your perspective is unique. It is important and it counts,",
    "Nothing can dim the light that shines from within,",
    "You must do the things you think you cannot do,",
    "The secret of attraction is to love yourself,",
    "Good riddance to decisions that don't support self-care, self-value, and self-worth.",
    "I am the greatest. I said that even before I knew I was.",
    "I say looking on the bright side of life never killed anybody,",
    "I am better than I used to be. Better than I was yesterday. But hopefully not as good as I will be tomorrow,",
    "I have never ever focused on the negative of things. I always look at the positive,",
    "I am giving you permission to root for yourself and while you're at it root for those around you, too",
    "We must accept finite disappointment, but never lose infinite hope.",
    "Your life is already a miracle of chance waiting for you to shape its destiny,",
    "If you really think small, your world will be small. If you think big, your world will be big,",
    "Embrace the glorious mess that you are,",
    "The ultimate truth of who you are is not I am this or I am that, but I Am,",
    "Gratitude is a celebration we are all invited to,",
    "We must be willing to let go of the life we planned so as to have the life that is waiting for us,",
    "Nothing is impossible. The word itself says 'Im possible!',",
    "The only courage you ever need is the courage to fulfill the dreams of your own life,",
    "Failure is just another way to learn how to do something right,",
    "The emotion that can break your heart is sometimes the very one that heals it,",
    "Your crown has been bought and paid for. Put it on your head and wear it,",
    "Everything passes if you learn to hold things lightly,",
    "Write it on your heart that every day is the best day in the year,",
    "Hold up your head! You were not made for failure, you were made for victory,",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely,",
    "There is nothing either good or bad, but thinking makes it so,",
];

function spinWheel() {
    var randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmation').textContent = affirmations[randomIndex];
}

function setGoal() {
    var goalInput = document.getElementById('goalInput').value.trim();
    // You can handle the goal input according to your requirements
}
