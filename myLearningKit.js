var problem_selector = 0;
function run() {
   switch (problem_selector) {
      case 1:
         var a = parseInt(prompt("Enter a real number for a"), 10);
         var b = parseInt(prompt("Enter a real number for b"), 10);

         var perimeter = 2 * (a + b);
         var answer = "perimeter: " + perimeter;
         alert(answer);
         break;

      case 2:
         var a = parseInt(prompt("Enter a real number for a"), 10);
         var b = parseInt(prompt("Enter a real number for b"), 10);
         var alpha = parseInt(prompt("Enter a real number for alpha"), 10);
         var h = a * Math.sin(alpha * Math.PI / 180);
         var area = (b * h).toFixed(2);
         var answer = "area: " + area;
         alert(answer);
         break;
      case 3:
         var a = parseInt(prompt("Enter a real number"), 10);
         var b = parseInt(prompt("Enter a real number"), 10);
         var c = parseInt(prompt("Enter a real number"), 10);
         var rootOne = ((-b + ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)).toFixed(2);
         var rootTwo = ((-b - ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)).toFixed(2);
         var answer = "Root1: " + rootOne + "<br>" + "Root2: " + rootTwo;
         alert(answer);
         break;
      case 4:
         var a = parseInt(prompt("enter a real number"), 10);
         var b = parseInt(prompt("enter a real number"), 10);
         var c = parseInt(prompt("enter a real number"), 10);

         if ((b ** 2) >= (4 * a * c)) {
            if ((b ** 2) == (4 * a * c)) {
               var answer = "One real root.";
            } else {
               var answer = "Two real roots.";
            }
         } else {
            var answer = "No real roots.";
         }
         alert(answer);
         break;
      case 5:
         var a = parseFloat(prompt("enter a real number (your grade as a percentage)."));
         if (a >= 89.5) {
            answer = "A+";
         } else if (a >= 79.5) {
            answer = "A";
         } else if (a >= 74.5) {
            answer = "B+";
         } else if (a >= 69.5) {
            answer = "B";
         } else if (a >= 64.5) {
            answer = "C+";
         } else if (a >= 59.5) {
            answer = "C";
         } else if (a >= 54.5) {
            answer = "D+";
         } else if (a >= 49.5) {
            answer = "D";
         } else if (a >= 40) {
            answer = "E";
         } else {
            answer = "F";
         }
         alert(answer);

         break;
      case 6:
         var num = prompt("enter a real number");
         while (num != 0) {
            if (num > 0) {
               alert("+positive!");
               var num = prompt("enter a real number");
            } else {
               alert("-negative!");
               var num = prompt("enter a real number");
            }
         }
         break;
      case 7:
         var a = parseInt(prompt("Please enter a number: ", ""));
         var w = a;
         var count = 0;
         const array = [];
         do {
            var x = a % 10;
            a = (a - x) / 10;
            array[count] = x;
            count = count + 1;
         } while (a > 0);
         var answer = "number: " + w + "its digits: " + array + "program ended";
         alert(answer);
         break;
      case 8:
         var a = parseInt(prompt("Please enter a number: ", ""));
         var x = a;
         var count = 0;
         do {
            if (7 === (a % 10)) {
               count = count + 1;
            }
            a = (a - (a % 10)) / (10);

         } while (a != 0);
         var answer = "number: " + x + "<br><br>number of 7's: " + count;
         alert(answer);
         break;
      case 9:
         var a = parseInt(prompt("Please enter a number: ", ""));
         var x = a;
         var sum = 0;
         do {
            x = a % 10
            sum = sum + x
            a = (a - x) / (10);
         } while (a != 0);
         var answer = "number: " + x + "<br><br>sum of digits: " + sum;
         alert(answer);
         break;
      case 10:
         var a = parseInt(prompt("Please enter a number: ", ""));
         var reverse = 0;
         var temp = a;
         var t = ["yes", "no"];
         var num = 1;
         do {
            reverse = reverse * 10 + temp % 10;
            temp = (temp - temp % 10) / 10;
         } while (temp != 0);

         if (reverse == a) {
            num = 0;
         } else {
            num = 1;
         }
         var answer = "number: " + a + "<br><br> Reverse or not?: " + t[num];
         alert(answer);
         break;

      case 25:
         var num = prompt("enter a number greater than 1");
         do {
            num = num / 2;
         } while (num > 1);
         if (num === 1) {
            alert("yes");
         } else {
            alert("no")
         }
         break;

      case 26:
         var num = prompt("enter a positive integer");
         var f = 1;
         for (let i = 1; i <= num; i++) {
            f = f * i;
         }
         var answer = num + "!= " + f;
         alert(answer);
         break;
      case 27:
         var numOne = prompt("first number");
         var numTwo = prompt("second number");
         var numThree = prompt("third number");
         if (numOne > numTwo) {
            if (numTwo > numThree) {
               alert(numOne.concat(numTwo, numThree));
            } else if (numOne > numThree) {
               alert(numOne.concat(numThree, numTwo));
            } else {
               alert(numThree.concat(numOne, numTwo));
            }
         } else {
            if (numOne > numThree) {
               alert(numTwo.concat(numOne, numThree));
            } else if (numTwo > numThree) {
               alert(numTwo.concat(numThree, numOne));
            } else {
               alert(numThree.concat(numTwo, numOne));
            }
         }
         break;
      case 28:
         var numNew = prompt("enter a natural number");
         var last;
         do {
            last = numNew
            alert(last);
            numNew = prompt("enter a natural number");
         } while(parseFloat(numNew) < parseFloat(last));
         break;
      case 29:
         break;
      case 30:
         break;
      case 31:
         var suits = ["spades", "clubs", "hearts", "diamonds"];
         var card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
         function cardsuit() {
            var s = suits[Math.floor(Math.random() * 4)];
            return s
         }
         function cardnumber() {
            var v = card[Math.floor(Math.random() * 13)];
            return v;
         }
         function cardnumberName(v) {
            if (v == 11) {
               return "JACK";
            } else if (v == 12) {
               return "QUEEN";
            } else if (v == 13) {
               return "KING";
            } else if (v == 14) {
               return "ACE";
            } else {
               return v;
            }
         }

         var playerOneNumber = cardnumber();
         var playerTwoNumber = cardnumber();

         var playerOneSuit = cardsuit();
         var playerTwoSuit = cardsuit();

         var playerOne = cardnumberName(playerOneNumber) + ' of ' + playerOneSuit;
         var playerTwo = cardnumberName(playerTwoNumber) + ' of ' + playerTwoSuit;

         while (playerTwo == playerOne) {
            playerTwoNumber = cardnumber();
            playerTwoSuit = cardsuit();
            playerTwo = cardnumberName(playerTwoNumber) + playerTwoSuit;
         }

         alert(`playerOne: ${playerOne} \nplayerTwo: ${playerTwo}`)
         if (playerOneNumber > playerTwoNumber) {
            alert('playerOne wins');
         } else if (playerOneNumber < playerTwoNumber) {
            alert('playerTwo wins');
         } else {
            alert('draw');
         }

         break;
      case 32:
         n = prompt("enter n, must be a positive integer");
         r = prompt("enter r, must be a positive integer");
         var answer = factorial(n) / (factorial(r) * (factorial(n - r)));

         function factorial(num) {
            if (num == 0) {
               return 1;
            } else {
               return num * factorial(num - 1);
            }
         }
         alert(answer);

         break;
      case 33:
         n = prompt("enter n, must be a positive integer");
         r = prompt("enter r, must be a positive integer");
         var answer = factorial(n) / factorial(n - r);

         function factorial(num) {
            if (num == 0) {
               return 1;
            } else {
               return num * factorial(num - 1);
            }
         }
         alert(answer);

         break;
      case 34:
         var suits = ["spades", "clubs", "hearts", "diamonds"];
         var card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
         function cardsuit() {
            var s = suits[Math.floor(Math.random() * 4)];
            return s
         }
         function cardnumber() {
            var v = card[Math.floor(Math.random() * 13)];
            return v;
         }
         function cardnumberName(v) {
            if (v == 11) {
               return "JACK";
            } else if (v == 12) {
               return "QUEEN";
            } else if (v == 13) {
               return "KING";
            } else if (v == 14) {
               return "ACE";
            } else {
               return v;
            }
         }
         var draw = [0, 1, 2, 3, 4];
         var drawSuit = [0, 1, 2, 3, 4];
         var drawNum = [0, 1, 2, 3, 4];
         drawSuit[0] = cardsuit();
         drawNum[0] = cardnumberName(cardnumber());
         draw[0] = ' ' + drawNum[0] + ' of ' + drawSuit[0];
         for (let i = 1; i < 5; i++) {
            do {
               drawSuit[i] = cardsuit();
               drawNum[i] = cardnumberName(cardnumber())
               draw[i] = ' ' + drawNum[i] + ' of ' + drawSuit[i];
            } while (
               draw[0] == draw[1] || draw[0] == draw[2] ||
               draw[0] == draw[3] || draw[0] == draw[4] ||

               draw[1] == draw[2] || draw[1] == draw[3] ||
               draw[1] == draw[4] ||

               draw[2] == draw[3] ||
               draw[2] == draw[4] ||

               draw[3] == draw[4]
            );
         }
         alert(draw);
         var match =0;
         var straight =0;
         var flush =0;
         for (let index = 0; index < 5; index++) {               
            for (let index2 = index+1; index2 < 5; index2++) {
               if (drawNum[index]==drawNum[index2]) {match++;}
               if (drawSuit[index]==drawSuit[index2]) {flush++;}
            }
         }
         const DrawNumSorted = mergeSort(drawNum);
         for (let index = 0; index < 5; index++) {
            if (DrawNumSorted[index]==DrawNumSorted[index+1]+1) {straight++;}
         }
         if (match==1) {
            alert("pair");
         } else if (match==2) {
            alert("two pair");
         } else if (match==3) {
            alert("three of a kind");
         } else if (match==4) {
            alert("Full house!");
         } else if (match==6) {
            alert("four of a kind!");
         } else if (straight==4 && flush!=10) {
            alert("Straight!");
         } else if (straight!=4 && flush==10) {
            alert("Flush!");
         } else if (straight==4 && flush==10) {
            alert("Straight Flush!!");
         }
         break;
      case 35:
         function multiply(m, n) {
            if (n === 0) {
               return 0;
            } else {
               return parseInt(multiply(m, (n - 1))) + parseInt(m);
            }
         }
         var m = parseInt(prompt("enter multiplicand", "2"));
         var n = parseInt(prompt("enter multiplier", "2"));
         var answer = multiply(m, n);
         alert(answer);
         break;
      case 11:
         var a = parseInt(prompt("Please enter a number: ", ""), 10);
         var t = [];

         if (a <= 0) {
            alert("Please enter a positive integer greater than 0.");
            return;
         }

         for (let i = 0; i < a; i++) {
            t[i] = ((3 ** (a - i) - 1) / 2);
         }

         alert("number: " + a + "<br><br> Shell Sort Sequence: " + t + "<br><br> program ended");
         break;
      case 12:
         break;
      case 13:
         break;
      case 14:
         break;
      case 15:
         break;
      case 16:
         break;
      case 17:
         break;
      case 18:
         break;
      case 19:
         break;
      case 20:
         break;
      case 21:
         break;
      case 22:
         break;
      case 23:
         break;
      case 24:
         break;
      case 36:
         break;
      case 37:
         break;
      case 38:
         m = prompt("enter the nxn matrix size");
         var A = [];
         for (let i = 0; i < m; i++) {
            A[i] = [];
            for (let j = 0; j < m; j++) {
               A[i][j] = parseInt(prompt(`enter number for row ${i} and coloumn ${j}`));
            }
         }
         
         for (let k = 1; k <= m; k++) {
            alert(`matrix P: row ${k} ${A[k - 1]}`);
         }
         alert(det(A, m));

         function det(A, m) {
            if (m==2) {
               return A[0][0]*A[1][1] - A[0][1]*A[1][0];
            } else if (m==1) {
               return A[0][0];
            }
            var sum = 0;
            var B = [];
            
            for (let index = 0; index < A.length; index++) {
               for (let row = 0; row < m-1; row++) {
                  B[row] = []; var bcol = 0;
                  for (let col = 0; col < m; col++) {
                     if (col == index) {
                     } else {B[row][bcol] = A[row+1][col]; bcol++;}
                  }
               }
               sum += Math.pow(-1, index)*A[0][index]*det(B, m-1);
            }
            return sum;
         }
         break;
      case 39:
         var a = [];
         for (let i = 0; i < 10; i++) {
            a[i] = parseFloat(prompt("enter a number"));
         }
         var atmost = 0;
         var l = 0;
         for (let j = 0; j < 10; j++) {
            if (isMonotonic(a, l, j) == false) {
               atmost += 1;
               l = j;
            }
         }
         atmost += 1;
         if (atmost <= 2) {
            alert("true");
         } else {
            alert("false");
         }
         function isMonotonic(array, from, to) {
            var i = from;
            var j = from;
            var mono = true;
            while (mono && i <= (to - 1)) {
               if (array[i] <= array[i + 1]) {
               } else {
                  mono = false;
               }
               i++;
            }
            if (mono) {
               return mono;
            } else {
               mono = true;
               while (mono && j <= (to - 1)) {
                  if (array[j] >= array[j + 1]) {
                  } else {
                     mono = false;
                  }
                  j++;
               }
               return mono;
            }
         }
         break;
      case 40:
         var alpha = parseInt(prompt("length of array?"));
         var A = [];
         for (let i = 0; i < alpha; i++) {
            A[i] = parseFloat(prompt("enter a number"));
         }
         alert(mergeSort(A));
         function mergeSort(A) {

            var A1 = [];
            var A2 = [];
            var m = parseInt(Math.floor((A.length) / 2));
            console.log(m);
            for (let j = 0; j < m; j++) {
               A1[j] = A[j];
            }
            console.log(A1);
            for (let k = m; k < A.length; k++) {
               A2[k - m] = A[k];
               console.log(A2[k - m]);
            }
            console.log(A2);
            flag = isSorted(A1);
            flag2 = isSorted(A2);
            if (flag == true && flag2 == true) {
               return merge(A1, A2);
            } else {
               return merge(mergeSort(A1), mergeSort(A2));
            }
         }
         function isSorted(A) {
            var flag = true;
            for (let i = 0; i < (A.length - 1); i++) {
               if (A[i] <= A[i + 1]) {
               } else {
                  flag = false;
                  break;
               }
            }
            return flag;
         }
         function merge(A, B) {
            var c = (A.length + B.length) - 1;
            var C = [];
            var a = A.length - 1;
            var b = B.length - 1;
            while (c >= 0) {
               if (A[a] > B[b] && A[a] != null || B[b] == null) {
                  C[c] = A[a];
                  if (a > 0) {
                     a--;
                  } else if (a == 0) {
                     a = null;
                  }
                  c--;
                  console.log(C);
               } else {
                  C[c] = B[b];
                  if (b > 0) {
                     b--;
                  } else if (b == 0) {
                     b = null;
                  }
                  c--;
                  console.log(C);
               }
            }

            return C;
         }
         break;
      default:
         break;
   }
}

function p01Func() {

   document.getElementById("problem").innerHTML = "<p>A program that outputs the perimeter of a parallelogram, given two sides. pre-condition: Base and side in element of real numbers. Post condition: Perimeter.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_1.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt(\"Enter a real number for a\"), 10);<br>\
         var b = parseInt(prompt(\"Enter a real number for b\"), 10);<br>\
<br>\
         var perimeter = 2 * (a + b);<br>\
         var answer = \"perimeter: \" + perimeter;<br>\
         alert(answer);<br>\
         break;";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 1;

}



function p02Func() {

   document.getElementById("problem").innerHTML = "<p>A program that outputs the area of a parallelogram, given two sides. pre-condition: (Base), (side) and (angle in degrees) in element of real numbers. Post condition: Area.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_2.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt(\"Enter a real number for a\"), 10);<br>\
         var b = parseInt(prompt(\"Enter a real number for b\"), 10);<br>\
         var alpha = parseInt(prompt(\"Enter a real number for alpha\"), 10);<br>\
         var h = a * Math.sin(alpha * Math.PI / 180);<br>\
         var area = (b * h).toFixed(2);<br>\
         var answer = \"area: \" + area;<br>\
         alert(answer);<br>\
         break;";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 2;


}

function p03Func() {

   document.getElementById("problem").innerHTML = "<p>A program that outputs the roots of a quadratic equation in standard form 'ax^2 + bx +c'. pre-condition: a,  b and c in element of real numbers. Post condition: the roots of the given equation.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_3.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt(\"Enter a real number\"), 10);<br>\
         var b = parseInt(prompt(\"Enter a real number\"), 10);<br>\
         var c = parseInt(prompt(\"Enter a real number\"), 10);<br>\
         var rootOne = ((-b + ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)).toFixed(2);<br>\
         var rootTwo = ((-b - ((b ** 2) - (4 * a * c)) ** 0.5) / (2 * a)).toFixed(2);<br>\
         var answer = \"Root1: \" + rootOne + \"<br>\" + \"Root2: \" + rootTwo;<br>\
         alert(answer);<br>\
";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 3;

}

function p04Func() {

   document.getElementById("problem").innerHTML = "<p>A program that outputs the number of real roots in a quadratic equation in standard form 'ax^2 + bx +c'. pre-condition: a,  b and c in element of real numbers. Post condition: number of roots.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_4.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("js").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt(\"enter a real number\"), 10);<br>\
         var b = parseInt(prompt(\"enter a real number\"), 10);<br>\
         var c = parseInt(prompt(\"enter a real number\"), 10);<br>\
<br>\
         if ((b ** 2) >= (4 * a * c)) {<br>\
            if ((b ** 2) == (4 * a * c)) {<br>\
               var answer = \"One real root.\";<br>\
            } else {<br>\
               var answer = \"Two real roots.\";<br>\
            }<br>\
         } else {<br>\
            var answer = \"No real roots.\";<br>\
         }<br>\
         alert(answer);";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 4;

}

function p05Func() {

   document.getElementById("problem").innerHTML = "<p>Using the switch function. program uses switch function to get the grade. pre-condition: real number (your grade as a percentage). Post condition: your grade as a letter.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_5.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("js").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseFloat(prompt(\"enter a real number (your grade as a percentage).\"));<br>\
         if (a >= 89.5) {<br>\
            answer = \"A+\";<br>\
         } else if (a >= 79.5) {<br>\
            answer = \"A\";<br>\
         } else if (a >= 74.5) {<br>\
            answer = \"B+\";<br>\
         } else if (a >= 69.5) {<br>\
            answer = \"B\";<br>\
         } else if (a >= 64.5) {<br>\
            answer = \"C+\";<br>\
         } else if (a >= 59.5) {<br>\
            answer = \"C\";<br>\
         } else if (a >= 54.5) {<br>\
            answer = \"D+\";<br>\
         } else if (a >= 49.5) {<br>\
            answer = \"D\";<br>\
         } else if (a >= 40) {<br>\
            answer = \"E\";<br>\
         } else {<br>\
            answer = \"F\";<br>\
         }<br>\
         alert(answer);";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 5;

}

function p06Func() {

   document.getElementById("problem").innerHTML = "<p>keeps taking input from user until zero is entered and outputs whether the input is positive or negative each time the input is entered.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow7.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var num = prompt(\"enter a real number\");<br>\
         while (num != 0) {<br>\
            if (num > 0) {<br>\
               alert(\"+positive!\");<br>\
               var num = prompt(\"enter a real number\");<br>\
            } else {<br>\
               alert(\"-negative!\");<br>\
               var num = prompt(\"enter a real number\");<br>\
            }<br>\
         }";   document.getElementById("js").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 6;

}

function p07Func() {

   document.getElementById("problem").innerHTML = "<p>Using do-while loops. Program allows user to input a natural number and output all the digits of that number.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_9.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt('Please enter a number: ', '')); var w = a; var count = 0; const array = []; do { var x = a % 10; a = (a - x) / 10; array[count] = x; count = count + 1; } while (a > 0); var answer = 'number: ' + w + ' its digits: ' + array + ' program ended'; alert(answer); break;";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 7;

}

function p08Func() {

   document.getElementById("problem").innerHTML = "<p>Using do-while loops program allows user to input a natural number, the output is the number of 7s in that number for example if input is 778, output would be 2.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_10.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt('Please enter a number: ', '')); var w = a; var count = 0; const array = []; do { var x = a % 10; a = (a - x) / 10; array[count] = x; count = count + 1; } while (a > 0); var answer = 'number: ' + w + ' its digits: ' + array + ' program ended'; alert(answer); break;";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 8;

}

function p09Func() {

   document.getElementById("problem").innerHTML = "<p>Using do-while loops program allows user to input a natural number, the output is the sum of the digits, for example, if input is 1234 then output is 10.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_11.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt('Please enter a number: ', '')); var x = a; var sum = 0; do { x = a % 10; sum = sum + x; a = (a - x) / 10; } while (a != 0); var answer = 'number: ' + x + '<br><br>sum of digits: ' + sum; alert(answer);";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";    document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 9;

}

function p10Func() {

   document.getElementById("problem").innerHTML = "<p>Using do-while loops. Program allows user to input a natural number, the output tell the user whether its digits reversed (from right to left) is the same number or not. for example, if input is 12321 then output will be 'yes'.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_12.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt('Please enter a number: ', '')); var reverse = 0; var temp = a; var t = ['yes', 'no']; var num = 1; do { reverse = reverse * 10 + temp % 10; temp = (temp - temp % 10) / 10; } while (temp != 0); if (reverse == a) { num = 0; } else { num = 1; } var answer = 'number: ' + a + '<br><br> Reverse or not?: ' + t[num]; alert(answer);";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 10;

}

function p11Func() {

   document.getElementById("problem").innerHTML = "<p>Using a for-loop Shell sort. Program allows user to input a natural number greater than 0 so that the program can output the first members the shell sort sequence {(3^(n)-1)/2 | n is in element of Z and n>0} starting from n=1 up until the number the user has provided. for example, if input is 5 then output will be {1, 4, 13, 40, 121}.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_13.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "var a = parseInt(prompt(\"Please enter a number: \", \"\"), 10);<br>\
var t = [];<br>\
<br>\
if (a <= 0) {<br>\
   alert(\"Please enter a positive integer greater than 0.\");<br>\
   return;<br>\
}<br>\
<br>\
for (let i = 0; i < a; i++) {<br>\
   t[i] = ((3 ** (a - i) - 1) / 2);<br>\
}<br>\
<br>\
alert(\"number: \" + a + \"<br><br> Shell Sort Sequence: \" + t + \"<br><br> program ended\");<br>\
";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 11;


}

function p12Func() {

   document.getElementById("problem").innerHTML = "<p>Using a do-while Fibbonacci's sequence.  Program allows user to input a natural number greater than 0 so that the program can output the first members the Fibbonacci's sequence, starting from 0,1,1,2,3... and so on. For example, if input is 5 then output will be {0,1,1,2,3}.</p>";
   document.getElementById("flowchart").setAttribute("src", "img_14.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "function multiply(m, n) {<br>\
   if (n === 0) {<br>\
      return 0;<br>\
   } else {<br>\
      return parseInt(multiply(m, (n - 1))) + parseInt(m);<br>\
   }<br>\
}<br>\
<br>\
var m = parseInt(prompt(\"enter multiplicand\", \"2\"));<br>\
var n = parseInt(prompt(\"enter multiplier\", \"2\"));<br>\
var answer = multiply(m, n);<br>\
alert(answer);";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 12;

}

function p13Func() {

   document.getElementById("problem").innerHTML = "<p>Using a for-loop. Program takes number of rows from the user then outputs a string triangle with its base at the top and the tip at the bottom and is made up of 'oo's. For example, user inputs 3, output is<br> oooooo<br> oooo<br>  oo </p>";
   document.getElementById("flowchart").setAttribute("src", "img_15.png");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var num = prompt("enter a number greater than 1");
         do {
            num = num / 2;
         } while (num > 1);
         if (num === 1) {
            alert("yes");
         } else {
            alert("no")
         }
         break;`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 13;

}

function p14Func() {

   document.getElementById("problem").innerHTML = "<p>Program takes an integer greater than 1 and then tells whether its a prime number or not.</p>";
   document.getElementById("flowchart").setAttribute("src", "lab6_1.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 14;

}

function p15Func() {

   document.getElementById("problem").innerHTML = "<p>pre condition: enter 4 real numbers, and another 4 real numbers. post condition: output, 'yes' if sum of first 4 real numbers equal sum of second 4 real numbers, otherwise out put 'no'</p>";
   document.getElementById("flowchart").setAttribute("src", "lab6_2.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 15;

}

function p16Func() {

   document.getElementById("problem").innerHTML = "<p>pre condition: keep asking for inputs in element of real numbers until condition is false post condition: output p and n</p>";
   document.getElementById("flowchart").setAttribute("src", "lab6_3.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 16;

}

function p17Func() {

   document.getElementById("problem").innerHTML = "<p>pre condition: takes 4 numbers in element of real numbers and takes another 4 numbers post condition: if the number of negative numbers in the first four numbers is equal to the number of positive numbers in the next 4 numbers then output, 'yes', otherwise, 'no'.</p>";
   document.getElementById("flowchart").setAttribute("src", "lab6_4.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 17;

}

function p18Func() {

   document.getElementById("problem").innerHTML = "<p>main algorithm pre condition: num is in element of a real number main algorithm post condition: output all prime numbers that have a 7.</p>";
   document.getElementById("flowchart").setAttribute("src", "lab6_6.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 18;

}

function p19Func() {

   document.getElementById("problem").innerHTML = "<p>Coin toss</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_1.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 19;

}

function p20Func() {

   document.getElementById("problem").innerHTML = "<p>A random number between 1 and num</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_2.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 20;

}

function p21Func() {

   document.getElementById("problem").innerHTML = "<p>Summation from 1 to num</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_3.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 21;

}

function p22Func() {

   document.getElementById("problem").innerHTML = "<p>Rolling dice</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_4.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 22;

}

function p23Func() {

   document.getElementById("problem").innerHTML = "<p>Date</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_5.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 23;

}

function p24Func() {

   document.getElementById("problem").innerHTML = "<p>Count down: Whenever the myFunction is initiated it decrements the global variable i. When the global variable goes less than 1 then output \"BOOM!\"</p>";
   document.getElementById("flowchart").setAttribute("src", "lab7_6.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 24;

}

function p25Func() {

   document.getElementById("problem").innerHTML = "<p>Checks whether your number is a power of 2</p>";
   document.getElementById("flowchart").setAttribute("src", "flow1.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var num = prompt("enter a number greater than 1");
   do {
      num = num / 2;
   } while (num > 1);
   if (num === 1) {
      alert("yes");
   } else {
      alert("no");
   }
   break;`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 25;

}

function p26Func() {

   document.getElementById("problem").innerHTML = "<p>Enter a number and get the factorial of that number</p>";
   document.getElementById("flowchart").setAttribute("src", "flow2.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var num = prompt("enter a positive integer");
   var f = 1;
   for (let i = 1; i <= num; i++) {
      f = f * i;
   }
   var answer = num + "!= " + f;
   alert(answer);`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 26;

}

function p27Func() {

   document.getElementById("problem").innerHTML = "<p>Takes three numbers and conactates them such that they are in decending order</p>";
   document.getElementById("flowchart").setAttribute("src", "flow3.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var numOne = prompt("first number");
   var numTwo = prompt("second number");
   var numThree = prompt("third number");
   if (numOne > numTwo) {
      if (numTwo > numThree) {
         alert(numOne.concat(numTwo, numThree));
      } else if (numOne > numThree) {
         alert(numOne.concat(numThree, numTwo));
      } else {
         alert(numThree.concat(numOne, numTwo));
      }
   } else {
      if (numOne > numThree) {
         alert(numTwo.concat(numOne, numThree));
      } else if (numTwo > numThree) {
         alert(numTwo.concat(numThree, numOne));
      } else {
         alert(numThree.concat(numTwo, numOne));
      }
   }`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 27;

}

function p28Func() {

   document.getElementById("problem").innerHTML = "<p>Takes in Values until a number less than the previous number is inputted</p>";
   document.getElementById("flowchart").setAttribute("src", "flow4.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var numNew = prompt("enter a natural number");
   var last;
   do {
      last = numNew;
      alert(last);
      numNew = prompt("enter a natural number");
   } while (parseFloat(numNew) < parseFloat(last));
   break;
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 28;

}

function p29Func() {

   document.getElementById("problem").innerHTML = "<p>I used an array for this problem so I do not have to press ok a 98 times.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow5.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 29;

}

function p30Func() {

   document.getElementById("problem").innerHTML = "<p>for example if the inputs are {1, 2, 3, 1, 1, 3, 1, 1, 1} the output will be 3.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow6.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 30;

}

function p31Func() {
   document.getElementById("problem").innerHTML = "<p>Multiplayer game: Player 1 draws a random card from a deck of cards then Player 2 draws another random card from the same deck of cards. Whichever person has the bigger number is the winner. Ace is considered the biggest number in this game.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow8.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `var suits = ["spades", "clubs", "hearts", "diamonds"];
   var card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
   function cardsuit() {
      var s = suits[Math.floor(Math.random() * 4)];
      return s;
   }
   function cardnumber() {
      var v = card[Math.floor(Math.random() * 13)];
      return v;
   }
   function cardnumberName(v) {
      if (v == 11) {
         return "JACK";
      } else if (v == 12) {
         return "QUEEN";
      } else if (v == 13) {
         return "KING";
      } else if (v == 14) {
         return "ACE";
      } else {
         return v;
      }
   }

   var playerOneNumber = cardnumber();
   var playerTwoNumber = cardnumber();

   var playerOneSuit = cardsuit();
   var playerTwoSuit = cardsuit();

   var playerOne = cardnumberName(playerOneNumber) + ' of ' + playerOneSuit;
   var playerTwo = cardnumberName(playerTwoNumber) + ' of ' + playerTwoSuit;

   while (playerTwo == playerOne) {
      playerTwoNumber = cardnumber();
      playerTwoSuit = cardsuit();
      playerTwo = cardnumberName(playerTwoNumber) + playerTwoSuit;
   }

   alert(\`playerOne: \${playerOne} \\nplayerTwo: \${playerTwo}\`);
   if (playerOneNumber > playerTwoNumber) {
      alert('playerOne wins');
   } else if (playerOneNumber < playerTwoNumber) {
      alert('playerTwo wins');
   } else {
      alert('draw');
   }
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 31;
}

function p32Func() {
   document.getElementById("problem").innerHTML = "<p>calculates n choose r</p>";
   document.getElementById("flowchart").setAttribute("src", "flow9.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `n = prompt("enter n, must be a positive integer");
   r = prompt("enter r, must be a positive integer");
   var answer = factorial(n) / (factorial(r) * (factorial(n - r)));

   function factorial(num) {
      if (num == 0) {
         return 1;
      } else {
         return num * factorial(num - 1);
      }
   }
   alert(answer);
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 32;
}

function p33Func() {
   document.getElementById("problem").innerHTML = "<p>Calculates n permute r</p>";
   document.getElementById("flowchart").setAttribute("src", "flow10.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `n = prompt("enter n, must be a positive integer");
   r = prompt("enter r, must be a positive integer");
   var answer = factorial(n) / factorial(n - r);

   function factorial(num) {
      if (num == 0) {
         return 1;
      } else {
         return num * factorial(num - 1);
      }
   }
   alert(answer);
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 33;
}

function p34Func() {
   document.getElementById("problem").innerHTML = "<p>Draw 5 cards from a deck of cards see output if you got any of the following poker hands: staight flush (0.002%), Four-of-a-kind (0.026%), Full-house (0.17%), Flush (0.367%), Straight (0.76%), Three-of-a-kind (2.113%), two-pair (4.753%), pair (42.257%), none (50.118%).</p>";
   document.getElementById("flowchart").setAttribute("src", "flow11.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = ` var suits = ["spades", "clubs", "hearts", "diamonds"];<br>\
         var card = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];<br>\
         function cardsuit() {<br>\
            var s = suits[Math.floor(Math.random() * 4)];<br>\
            return s<br>\
         }<br>\
         function cardnumber() {<br>\
            var v = card[Math.floor(Math.random() * 13)];<br>\
            return v;<br>\
         }<br>\
         function cardnumberName(v) {<br>\
            if (v == 11) {<br>\
               return "JACK";<br>\
            } else if (v == 12) {<br>\
               return "QUEEN";<br>\
            } else if (v == 13) {<br>\
               return "KING";<br>\
            } else if (v == 14) {<br>\
               return "ACE";<br>\
            } else {<br>\
               return v;<br>\
            }<br>\
         }<br>\
         var draw = [0, 1, 2, 3, 4];<br>\
         var drawSuit = [0, 1, 2, 3, 4];<br>\
         var drawNum = [0, 1, 2, 3, 4];<br>\
         drawSuit[0] = cardsuit();<br>\
         drawNum[0] = cardnumberName(cardnumber());<br>\
         draw[0] = ' ' + drawNum[0] + ' of ' + drawSuit[0];<br>\
         for (let i = 1; i < 5; i++) {<br>\
            do {<br>\
               drawSuit[i] = cardsuit();<br>\
               drawNum[i] = cardnumberName(cardnumber())<br>\
               draw[i] = ' ' + drawNum[i] + ' of ' + drawSuit[i];<br>\
            } while (<br>\
               draw[0] == draw[1] || draw[0] == draw[2] ||<br>\
               draw[0] == draw[3] || draw[0] == draw[4] ||<br>\
<br>\
               draw[1] == draw[2] || draw[1] == draw[3] ||<br>\
               draw[1] == draw[4] ||<br>\
<br>\
               draw[2] == draw[3] ||<br>\
               draw[2] == draw[4] ||<br>\
<br>\
               draw[3] == draw[4]<br>\
            );<br>\
         }<br>\
         alert(draw);<br>\
         var match =0;<br>\
         var straight =0;<br>\
         var flush =0;<br>\
         for (let index = 0; index < 5; index++) {               <br>\
            for (let index2 = index+1; index2 < 5; index2++) {<br>\
               if (drawNum[index]==drawNum[index2]) {match++;}<br>\
               if (drawSuit[index]==drawSuit[index2]) {flush++;}<br>\
            }<br>\
         }<br>\
         const DrawNumSorted = mergeSort(drawNum);<br>\
         for (let index = 0; index < 5; index++) {<br>\
            if (DrawNumSorted[index]==DrawNumSorted[index+1]+1) {straight++;}<br>\
         }<br>\
         if (match==1) {<br>\
            alert("pair");<br>\
         } else if (match==2) {<br>\
            alert("two pair");<br>\
         } else if (match==3) {<br>\
            alert("three of a kind");<br>\
         } else if (match==4) {<br>\
            alert("Full house!");<br>\
         } else if (match==6) {<br>\
            alert("four of a kind!");<br>\
         } else if (straight==4 && flush!=10) {<br>\
            alert("Straight!");<br>\
         } else if (straight!=4 && flush==10) {<br>\
            alert("Flush!");<br>\
         } else if (straight==4 && flush==10) {<br>\
            alert("Straight Flush!!");<br>\
         }`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").setAttribute("src", "images/jujeh/jujeh2.jpg");
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 34;
}

function p35Func() {
   document.getElementById("problem").innerHTML = "<p>Multiply using a recursive method.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `function multiply(m, n) {
            if (n === 0) {
               return 0;
            } else {
               return parseInt(multiply(m, (n - 1))) + parseInt(m);
            }
         }
         var m = parseInt(prompt("enter multiplicand", "2"));
         var n = parseInt(prompt("enter multiplier", "2"));
         var answer = multiply(m, n);
         alert(answer);
         break;`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 35;
}

function p36Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 36;
}

function p37Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 37;
}

function p38Func() {
   document.getElementById("problem").innerHTML = "<p>Given a square matrix output its determinant.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `m = prompt("enter the nxn matrix size");
         var A = [];
         for (let i = 0; i < m; i++) {
            A[i] = [];
            for (let j = 0; j < m; j++) {
               A[i][j] = parseInt(prompt(\`enter number for row \${i} and coloumn \${j}\`));
            }
         }
         
         for (let k = 1; k <= m; k++) {
            alert(\`matrix P: row \${k} \${A[k - 1]}\`);
         }
         alert(det(A, m));

         function det(A, m) {
            if (m==2) {
               return A[0][0]*A[1][1] - A[0][1]*A[1][0];
            } else if (m==1) {
               return A[0][0];
            }
            var sum = 0;
            var B = [];
            
            for (let index = 0; index < A.length; index++) {
               for (let row = 0; row < m-1; row++) {
                  B[row] = []; var bcol = 0;
                  for (let col = 0; col < m; col++) {
                     if (col == index) {
                     } else {B[row][bcol] = A[row+1][col]; bcol++;}
                  }
               }
               sum += Math.pow(-1, index)*A[0][index]*det(B, m-1);
            }
            return sum;
         }`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 38;
}

function p39Func() {
   document.getElementById("problem").innerHTML = "<p>Check if your series of numbers are only either monotonic (i.e either the series never decreases or never increases) or increases then decreases or decreases then increases. But does not increase then decrease then increase for example.</p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `
var a = [];<br>\
for (let i = 0; i < 10; i++) {<br>\
   a[i] = parseFloat(prompt("enter a number"));<br>\
}<br>\
<br>\
var atmost = 0;<br>\
var l = 0;<br>\
for (let j = 0; j < 10; j++) {<br>\
   if (isMonotonic(a, l, j) == false) {<br>\
      atmost += 1;<br>\
      l = j;<br>\
   }<br>\
}<br>\
<br>\
atmost += 1;<br>\
if (atmost <= 2) {<br>\
   alert("true");<br>\
} else {<br>\
   alert("false");<br>\
}<br>\
<br>\
function isMonotonic(array, from, to) {<br>\
   var i = from;<br>\
   var j = from;<br>\
   var mono = true;<br>\
<br>\
   while (mono && i <= (to - 1)) {<br>\
      if (array[i] <= array[i + 1]) {<br>\
      } else {<br>\
         mono = false;<br>\
      }<br>\
      i++;<br>\
   }<br>\
<br>\
   if (mono) {<br>\
      return mono;<br>\
   } else {<br>\
      mono = true;<br>\
      while (mono && j <= (to - 1)) {<br>\
         if (array[j] >= array[j + 1]) {<br>\
         } else {<br>\
            mono = false;<br>\
         }<br>\
         j++;<br>\
      }<br>\
      return mono;<br>\
   }<br>\
}<br>\
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 39;
}

function p40Func() {
   document.getElementById("problem").innerHTML = "<p>Uses merge sort to sort your array</p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = `
var alpha = parseInt(prompt("length of array?"));<br>\
var A = [];<br>\
for (let i = 0; i < alpha; i++) {<br>\
   A[i] = parseFloat(prompt("enter a number"));<br>\
}<br>\
alert(mergeSort(A));<br>\
<br>\
function mergeSort(A) {<br>\
   var A1 = [];<br>\
   var A2 = [];<br>\
   var m = parseInt(Math.floor((A.length) / 2));<br>\
   console.log(m);<br>\
   for (let j = 0; j < m; j++) {<br>\
      A1[j] = A[j];<br>\
   }<br>\
   console.log(A1);<br>\
   for (let k = m; k < A.length; k++) {<br>\
      A2[k - m] = A[k];<br>\
      console.log(A2[k - m]);<br>\
   }<br>\
   console.log(A2);<br>\
   flag = isSorted(A1);<br>\
   flag2 = isSorted(A2);<br>\
   if (flag == true && flag2 == true) {<br>\
      return merge(A1, A2);<br>\
   } else {<br>\
      return merge(mergeSort(A1), mergeSort(A2));<br>\
   }<br>\
}<br>\
<br>\
function isSorted(A) {<br>\
   var flag = true;<br>\
   for (let i = 0; i < (A.length - 1); i++) {<br>\
      if (A[i] <= A[i + 1]) {<br>\
      } else {<br>\
         flag = false;<br>\
         break;<br>\
      }<br>\
   }<br>\
   return flag;<br>\
}<br>\
<br>\
function merge(A, B) {<br>\
   var c = (A.length + B.length) - 1;<br>\
   var C = [];<br>\
   var a = A.length - 1;<br>\
   var b = B.length - 1;<br>\
   while (c >= 0) {<br>\
      if (A[a] > B[b] && A[a] != null || B[b] == null) {<br>\
         C[c] = A[a];<br>\
         if (a > 0) {<br>\
            a--; <br>\
         } else if (a == 0) {<br>\
            a = null;<br>\
         }<br>\
         c--; <br>\
         console.log(C);<br>\
      } else {<br>\
         C[c] = B[b];<br>\
         if (b > 0) {<br>\
            b--; <br>\
         } else if (b == 0) {<br>\
            b = null;<br>\
         }<br>\
         c--; <br>\
         console.log(C);<br>\
      }<br>\
   }<br>\
   return C;<br>\
}<br>\
`;
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none"; 
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 40;
}

function p41Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 41;
}

function p42Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 42;
}

function p43Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 43;
}

function p44Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 44;
}

function p45Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 45;
}

function p46Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 46;
}

function p47Func() {
   document.getElementById("problem").innerHTML = "<p></p>";
   document.getElementById("flowchart").setAttribute("src", "flow12.jpg");
   document.getElementById("flowchart").style.display = "none";
   document.getElementById("js").innerHTML = "";
   document.getElementById("js").style.display = "none";
   document.getElementById("another").innerHTML = "";
   document.getElementById("another").style.display = "none";
   document.getElementById("check1").checked = false;
   document.getElementById("check2").checked = false;
   document.getElementById("check3").checked = false;
   problem_selector = 47;
}


function checkUncheck1() {

   if (document.getElementById("check1").checked == true) {
      document.getElementById("flowchart").style.display = "inline";
   }
   else {
      document.getElementById("flowchart").style.display = "none";
   }
}

function checkUncheck2() {

   if (document.getElementById("check2").checked == true) {
      document.getElementById("js").style.display = "block";
   }
   else {
      document.getElementById("js").style.display = "none";
   }
}


function checkUncheck3() {
   if (document.getElementById("check3").checked == true) {

      document.getElementById("another").style.display = "block";

   }
   else {

      document.getElementById("another").style.display = "none";

   }
}



function zoomIn(x) {
   document.getElementById(x).style.width = "200%";
}
function zoomOut(x) {
   document.getElementById(x).style.width = "100%";
}
