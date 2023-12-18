//var boneNr = Math.ceil(Math.random() * 4);
// const srcParts = require("./source");
// import { srcParts } from "./source";
// console.log(srcParts);
// const myModule = require("./my-module.js");
// console.log(myModule.myValue); // 42

//Part-ийн зурган болон аудио массивийн index-ийг нэмэгдүүлнэ
var ind; //for NEXT inside a certain part only

//Санамсаргүй 4 тоогоо хадгална.
var numbersAud, numbersImg;

//Аль Part/хэсгийн radio clicked хийгдэснээс хамаарч зурган болон аудио массиваа сонгон доорх source-уудад өгөх
var sourceImg, sourceAud;

//Clicked хийгдэсс Part/хэсгийн radio-ний value-г файлын замд оруулах
var path;

//Click хийгдсэн аудио болон зургаа match эсэхийг шалгахын тулд нэрнүүдийг нь хадгалах.
//clickedAud-ийн index 1-д нэмж clickedAud[1] = id.slice(8);--> extract 1 from Speaker-1
var clickedAud, clickedImg;

//Device selection
//document.getElementById("css-phone").href = `./stylePhone.css`;

var cssDevice;

var imgPart1 = [
  ["applean.png", "balla.png", "booka.png", "cata.png"],
  ["doga.png", "icecreaman.png", "pena.png", "pencila.png"],
  [
    "This is a dog.jpg",
    "This is an apple.jpg",
    "Is this a dog.jpg",
    "Is this an apple.jpg",
  ],
  [
    "This is a cat.jpg",
    "This is a pen.jpg",
    "Is this a cat.jpg",
    "Is this a pen.jpg",
  ],
];

var audPart1 = [
  ["applean.wav", "balla.wav", "booka.wav", "cata.wav"],
  ["doga.wav", "icecreaman.wav", "pena.wav", "pencila.wav"],
  [
    "This is a dog.wav",
    "This is an apple.wav",
    "Is this a dog.wav",
    "Is this an apple.wav",
  ],
  [
    "This is a cat.wav",
    "This is a pen.wav",
    "Is this a cat.wav",
    "Is this a pen.wav",
  ],
];

var imgPart2 = [
  ["myBall.png", "myBook.png", "myIcecream.png", "myPencil.png"],
  ["yourApple.png", "yourCat.png", "yourDog.png", "yourPen.png"],
  [
    "Is this your apple.png",
    "Is this your ball.png",
    "Is this your book.png",
    "Is this your cat.png",
  ],
  [
    "Is this your dad.png",
    "Is this your dog.png",
    "Is this your mom.png",
    "Is this your pencil.png",
  ],
];
var audPart2 = [
  ["myBall.mp3", "myBook.wav", "myIcecream.mp3", "myPencil.mp3"],
  ["yourApple.mp3", "yourCat.mp3", "yourDog.mp3", "yourPen.mp3"],
  [
    "Is this your apple.wav",
    "Is this your ball.wav",
    "Is this your book.wav",
    "Is this your cat.wav",
  ],
  [
    "Is this your dad.wav",
    "Is this your dog.wav",
    "Is this your mom.wav",
    "Is this your pencil.wav",
  ],
];
// if (document.getElementById("part-0").checked) {
//   sourceImg = newWordImg1;
//   sourceAud = newWordAud1;
// }
// console.log(txt.substring(0, txt.length - 4));
//id.slice(8)
//var radioValue = document.getElementById("part-0").value;
var password = "2312";

function init() {
  if (document.getElementById("pwd").value == password) {
    document.getElementById("container").style.display = "block";
    document.getElementById("interface-box").style.display = "none";

    //Device selection
    if (document.getElementById("phone").checked) {
      document.getElementById("css-device").href = `./stylePhone.css`;
    }

    if (document.getElementById("iPad").checked) {
      document.getElementById("css-device").href = `./listen01.01.css`;
    }
    console.log(document.getElementById("css-device").href);

    initiateListening();
  } else {
    alert("Та буруу паспорт оруулсан байна!!!");
  }
}

// Энэ хэсэгт PATH замаа тодорхойлж өгөхгүй бол программ эхлэхэд зургуудаа харуулж чадахгүй!!!
for (var x = 0; x < 3; x++) {
  if (document.getElementById(`part-${x}`).checked) {
    path = document.getElementById(`part-${x}`).value;
    console.log(path);
  }
}

if (document.getElementById(`part-0`).checked) {
  sourceImg = imgPart1;
  sourceAud = audPart1;
}
if (document.getElementById(`part-1`).checked) {
  sourceImg = imgPart2;
  sourceAud = audPart2;
}
if (document.getElementById(`part-2`).checked) {
  sourceImg = imgPart3;
  sourceAud = audPart3;
}

//Хэрэв radio Part1 checked бол фолдер нь Part1 байна

//console.log(source[0][2]);

//document.querySelector(".parts").querySelector("#topic-part0-part1").checked = false;
console.log(document.getElementById("part-0").checked);

// var txt = "apple.png";
// console.log(txt.substring(0, txt.length - 4));

//run();

function initiateListening() {
  ind = 0;
  clickedAud = [];
  clickedImg = [];
  document.getElementById("btn-prew").src = "./img/PREW0.jpg";
  document.getElementById("btn-next").src = "./img/NEXT1.jpg";
  for (var x = 0; x < 4; x++) {
    document.getElementById(`img-word-${x}`).classList.remove("blurry");
    document.getElementById(`speaker-${x}`).classList.remove("blurry");
  }
  if (sourceImg.length == 1) {
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
  }
  run();
}

function run() {
  //1-4 хүртэлх давхардаагүй санамсаргүй тооны массив үүсгэе!!
  //Generating Multiple Unique Random Numbers
  function getNumber() {
    return Math.ceil(Math.random() * 4);
  }
  numbersImg = [];
  do {
    var rnd = getNumber();
    if (numbersImg.indexOf(rnd) == -1) {
      numbersImg.push(rnd);
    }
  } while (numbersImg.length < 4);
  console.log(numbersImg);

  //Гаргаж авсан санамсаргүй тоонуудынхаа дагуу зургуудаа оруулъя!
  for (var x = 0; x < 4; x++) {
    document.getElementById(`img-word-${x}`).src = `./img_${path}/${
      sourceImg[ind][numbersImg[x] - 1]
    }`;
  }

  //Аудио-д зориулж давхардаагүй санамсаргүй тооны массив үүсгэе

  numbersAud = [];
  do {
    var rnd = getNumber();
    if (numbersAud.indexOf(rnd) == -1) {
      numbersAud.push(rnd);
    }
  } while (numbersAud.length < 4);
  console.log(numbersAud);

  // SPEAKER зургуудаа оруулъя!
  for (var x = 0; x < 4; x++) {
    document.getElementById(`speaker-${x}`).src = `./img/SPEAKER1_Blue.jpg`;
  }

  //var x = document.getElementById("myAudio");
  //const audioElement = new Audio("car_horn.wav");
  //audioElement.play()

  // function initListening() {}
}

clickedAud = []; //clicked хийгдсэн аудио болон зурган файлын нэрээ хадгалъя
function playAudio(id) {
  //document.getElementById("aud-0-word").play();
  //newWordImg1[numbersImg[x] - 1]

  if (
    !document
      .getElementById(`speaker-${id.slice(8)}`)
      .classList.contains("blurry")
  ) {
    //newWordImg1[0][numbersImg[x] - 1];
    const audioElement = new Audio(
      `./aud_${path}/${sourceAud[ind][numbersAud[id.slice(8)] - 1]}`
    );
    audioElement.play();

    var audName = sourceAud[ind][numbersAud[id.slice(8)] - 1];
    //exlude .wav from audio file name
    clickedAud[0] = audName.substring(0, audName.length - 4);
    clickedAud[1] = id.slice(8);
    console.log(
      `clickedAud[1] = id.slice(8); ${(clickedAud[1] = id.slice(8))}`
    );
    //   alert(clicked[1]);
    console.log(clickedAud);
  }
}

var clickedImg = [];
function imgSrc(id) {
  if (
    !document
      .getElementById(`img-word-${id.slice(9)}`)
      .classList.contains("blurry")
  ) {
    //var name = img.src;
    //alert(name);
    if (clickedAud.length == 0) {
      alert("Эхлээд аудио файлаа дарна уу");
    } else {
      var imgName = sourceImg[ind][numbersImg[id.slice(9)] - 1];
      console.log(imgName);
      //exlude .wav from audio file name
      clickedImg[0] = imgName.substring(0, imgName.length - 4);
      //   alert(clicked[1]);
      console.log(clickedImg);
      if (clickedAud[0] == clickedImg[0]) {
        //document.getElementById(`player-${activePlayer}`).classList.add("active");
        document
          .getElementById(`img-word-${id.slice(9)}`)
          .classList.add("blurry");
        document
          .getElementById(`speaker-${clickedAud[1]}`)
          .classList.add("blurry");
        clickedAud = [];
        clickedImg = [];
      } else {
        const wrongAnswerSound = new Audio("./audio/wrong_answer_sound.mp3");
        wrongAnswerSound.play();
        clickedAud = [];
        clickedImg = [];
      }
    }
  }
}

function next() {
  console.log(`otg ${sourceImg.length}`);
  if (sourceImg.length == 1) {
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
  } else {
    ind = ind + 1;
    if (ind == 1) {
      document.getElementById("btn-prew").src = "./img/PREW1.jpg";
    }

    console.log(`ind=${ind}; length=${sourceImg.length}`);
    if (ind < sourceImg.length) {
      for (var x = 0; x < 4; x++) {
        document.getElementById(`img-word-${x}`).classList.remove("blurry");
        document.getElementById(`speaker-${x}`).classList.remove("blurry");
      }

      if (ind == sourceImg.length - 1) {
        document.getElementById("btn-next").src = "./img/NEXT0.jpg";
        document.getElementById("btn-prew").src = "./img/PREW1.jpg";
      }
      run();
    }
  }
}

function prew() {
  if (sourceImg.length == 1) {
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
  } else {
    ind = ind - 1;
    if (ind >= 0) {
      for (var x = 0; x < 4; x++) {
        document.getElementById(`img-word-${x}`).classList.remove("blurry");
        document.getElementById(`speaker-${x}`).classList.remove("blurry");
      }
      if (ind == 0) {
        document.getElementById("btn-prew").src = "./img/PREW0.jpg";
      }
      run();
      document.getElementById("btn-next").src = "./img/NEXT1.jpg";
    }
  }
}
function radioPart1(value) {
  path = value;
  sourceImg = imgPart1;
  sourceAud = audPart1;
  initiateListening();
  if (sourceImg.length == 1) {
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
  }
}

function radioPart2(value) {
  path = value;
  sourceImg = imgPart2;
  sourceAud = audPart2;
  initiateListening();
  if (sourceImg.length == 1) {
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
  }
}

function checkedPhone() {
  document.getElementById("css-device").href = `./stylePhone.css`;
  console.log(document.getElementById("css-device").href);
  initiateListening0();
}
function checkedPad() {
  document.getElementById("css-device").href = `./listen01.01.css`;
  console.log(document.getElementById("css-device").href);
  initiateListening0();
}

function initiateListening0() {
  ind = 0;
  clickedAud = [];
  clickedImg = [];
  document.getElementById("btn-prew").src = "./img/PREW0.jpg";
  document.getElementById("btn-next").src = "./img/NEXT1.jpg";
  for (var x = 0; x < 4; x++) {
    document.getElementById(`img-word-${x}`).classList.remove("blurry");
    document.getElementById(`speaker-${x}`).classList.remove("blurry");
  }
  if (sourceImg.length == 1) {
    document.getElementById("btn-prew").src = "./img/PREW0.jpg";
    document.getElementById("btn-next").src = "./img/NEXT0.jpg";
  }
}
