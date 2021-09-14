var myObstacles = [];
var myScore, myTime;
var lifes;
var score = 0;
var generateObsEach = 300;
var timeBetweenObstacles = 50;
var lvl1song, lvl2song, lvl3song;
var currentLvl;
var time;
var timer;
var video =document.querySelector("#bgvid");

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(myGameArea.start.interval);
    },
}

function startGame() {
    // Getting user data and levels
    var userName = document.querySelector("#userName").value;
    var lvlOption = document.querySelector("input[name='level']:checked").value;
    if(userName && userName != "" && lvlOption && lvlOption != ""){
        //Defining lvl songs
        currentLvl = levels[lvlOption];

        //Show game
        document.querySelector(".menu").style="display:none;";
        document.querySelector(".start").style="display:inline-block;";
        document.querySelector(".gameData").style="display:block;";
        document.querySelector(".gameRules").style="display:block;";
        document.querySelector(".userName").innerText = userName;
        document.querySelector(".currentLvl").innerText = currentLvl.name;
        document.querySelector(".timeToWin").innerText = currentLvl.timeToFinish;
        document.querySelector(".pointsToWin").innerText = currentLvl.pointsToFinish;
        lifes = 3;
        time = 0;
        //Score text
        myGameArea.start();
        
        myScore = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 40, "text");
        myTime = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 80, "text");
        myLifes = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 120, "text");
        //Arrow positions on the screen
        leftArrowPos = myGameArea.canvas.width / 3;
        rightArrowPos = leftArrowPos + 40;
        upArrowPos = rightArrowPos + 40;
        downArrowPos = upArrowPos + 40;
        //Creating arrows
        leftArrow = new component(20, 20, "green", leftArrowPos, 0);
        rightArrow = new component(20, 20, "red", rightArrowPos, 0);
        upArrow = new component(20, 20, "blue", upArrowPos, 0);
        downArrow = new component(20, 20, "yellow", downArrowPos, 0);
        //Defining initial score in screen
        myScore.text = "SCORE: " + (score);
        myTime.text = "TIME: " + time;
        myLifes.text = "LIFES: " + lifes;
        
    }
}

function starButton(element){
    element.style ="display:none";
    document.querySelector(".stop").style="display:inline-block";
    //document.querySelector(".restart").style="display:inline-block";
    initEvents();
    currentLvl.song.play();
    if(currentLvl.video != ""){
        video.src = currentLvl.video;
        video.play();
    }
    myGameArea.start.interval = setInterval(updateGameArea, currentLvl.speed);
    startTime();
}
function stopButton(element){
    currentLvl.song.stop();
    video.pause();
    myGameArea.stop();
    element.style ="display:none";
    document.querySelector(".resume").style="display:inline-block";
    timer.pause();
}
function resumeButton(element){
    currentLvl.song.play();
    video.play();
    myGameArea.start.interval = setInterval(updateGameArea, currentLvl.speed);
    element.style ="display:none";
    document.querySelector(".stop").style="display:inline-block";
    timer.resume();
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    myGameArea.clear();
    myGameArea.frameNo += 1;
    xleft = leftArrowPos;
    xright = rightArrowPos;
    xup = upArrowPos;
    xdown = downArrowPos;
    minHeight = 10;
    maxHeight = 40;
    frameToStart = currentLvl.frameToStart;

    height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    if (myGameArea.frameNo == frameToStart || everyinterval(generateObsEach + 30)) {
        myObstacles.push(new component(10, height, "green", xleft, myGameArea.canvas.height));
    }
    if (myGameArea.frameNo == frameToStart || everyinterval(generateObsEach + 80)) {
        myObstacles.push(new component(10, height, "red", xright, myGameArea.canvas.height));
    }
    if (myGameArea.frameNo == frameToStart || everyinterval(generateObsEach + 130)) {
        myObstacles.push(new component(10, height, "blue", xup, myGameArea.canvas.height));
    }
    if (myGameArea.frameNo == frameToStart || everyinterval(generateObsEach + 180)) {
        myObstacles.push(new component(10, height, "yellow", xdown, myGameArea.canvas.height));
    }
    myObstacles.forEach((element, index) => {
        element.y--;
        if ((element.y + element.height) < 0) {
            myObstacles.splice(index, 1);
        }
        element.update();
    });
    myScore.update();
    myLifes.update();
    myTime.update();
    leftArrow.update();
    rightArrow.update();
    upArrow.update();
    downArrow.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}

function initEvents() {
    var keys = (keys || []);
    // Event to crash arrows
    document.addEventListener('keydown',(event) => {
            var code = event.keyCode;

            keys[code]=true;
            if (keys[65]) {
                if (isCrashing(leftArrow, myObstacles)) {
                    myScore.text = "SCORE: " + (score++);
                    if(score == currentLvl.pointsToFinish) {
                        winGame();
                    }
                }
            }
            if (keys[83]) {
                if (isCrashing(rightArrow, myObstacles)) {
                    myScore.text = "SCORE: " + (score++);
                    if(score == currentLvl.pointsToFinish) {
                        winGame();
                    }
                }
            }
            if (keys[68]) {
                if (isCrashing(upArrow, myObstacles)) {
                    myScore.text = "SCORE: " + (score++);
                    if(score == currentLvl.pointsToFinish) {
                        winGame();
                    }
                }
            }
            if (keys[70]) {
                if (isCrashing(downArrow, myObstacles)) {
                    myScore.text = "SCORE: " + (score++);
                    if(score == currentLvl.pointsToFinish) {
                        winGame();
                    }
                }
            }
            myScore.update();
    });
    document.addEventListener('keyup',(event) => {
        keys[event.key]=false;
        stop();
    });
}

function isCrashing(obj, obstacles) {
    var flag = false;
    obstacles.forEach(element => {
        if (obj.crashWith(element)) {
            flag = true;
        }
    });
    return flag;
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function startTime() {
    timer = new Timer(function() {
        time++;
        myTime.text = "TIME: "+ time
        myTime.update();
        if(time == currentLvl.timeToFinish && score < currentLvl.pointsToFinish){
            loseGame();
        }
    }, 1000);
    timer.start();
}

function loseGame(){
    currentLvl.song.stop();
    video.pause();
    myGameArea.stop();
    timer.pause();
    lifes--;
    document.querySelector(".endGameBox").style="display:block;";
    document.querySelector(".endGame").style="display:block;";
    document.querySelector(".remainingLifes b").innerText=lifes;
    
}

function restartGame(newLvl = "") {
    if(newLvl != ""){
        currentLvl = levels[newLvl];
    }
    document.querySelector(".endGameBox").style="display:none;";
    document.querySelector(".endGame").style="display:none;";
    document.querySelector(".winGame").style="display:none;";
    //Show game
    document.querySelector(".timeToWin").innerText = currentLvl.timeToFinish;
    document.querySelector(".pointsToWin").innerText = currentLvl.pointsToFinish;
    time = 0;
    score = 0;
    //Score text
    console.log(myGameArea.canvas.width);
    myObstacles = [];
    
    myScore = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 40, "text");
    myTime = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 80, "text");
    myLifes = new component("20px", "Consolas", "black", myGameArea.canvas.width -120, 120, "text");
    //Arrow positions on the screen
    leftArrowPos = myGameArea.canvas.width / 3;
    rightArrowPos = leftArrowPos + 40;
    upArrowPos = rightArrowPos + 40;
    downArrowPos = upArrowPos + 40;
    //Creating arrows
    leftArrow = new component(20, 20, "green", leftArrowPos, 0);
    rightArrow = new component(20, 20, "red", rightArrowPos, 0);
    upArrow = new component(20, 20, "blue", upArrowPos, 0);
    downArrow = new component(20, 20, "yellow", downArrowPos, 0);
    //Defining initial score in screen
    myScore.text = "SCORE: " + (score);
    myTime.text = "TIME: " + time;
    myLifes.text = "LIFES: " + lifes;
    
    myGameArea.frameNo = 0;
    myGameArea.start();
    currentLvl.song.sound.currentTime = 0
    currentLvl.song.play();
    if(currentLvl.video != ""){
        video.src = currentLvl.video;
        video.play();
    }
    myGameArea.start.interval = setInterval(updateGameArea, currentLvl.speed);
    startTime();
}

function backMenu() {
    location.reload();
}

function winGame() {
    currentLvl.song.stop();
    video.pause();
    myGameArea.stop();
    timer.pause();
    document.querySelector(".endGameBox").style="display:block;";
    document.querySelector(".winGame").style="display:block;";
    document.querySelector(".winGame .remainingLifes b").innerText=lifes;
    var levelsArray = Object.values(levels);
    levelsArray = levelsArray.filter(data => {
        return data.key != currentLvl.key;
    })
    levelsArray.forEach(element => {
        var div = document.createElement("div")
        div.className = "newLevel";
        div.innerText = element.name;
        div.onclick = ()=>{restartGame(element.key);}
        document.querySelector(".winGame .chooseNewLevel").append(div)
    })
    
}