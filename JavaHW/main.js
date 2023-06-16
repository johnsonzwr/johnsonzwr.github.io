const guessInput = document.getElementById("guess-input");
      const hintArea = document.querySelector(".hint");
      const guessBtn = document.querySelector(".guess");
      const restartBtn = document.querySelector(".reStart");
      const showAnswerBtn = document.querySelector(".look");

      let minNum, maxNum, answerNum, guessNum;

      showAnswerBtn.addEventListener("click", function () {
        alert(answerNum);
      });

      restartBtn.addEventListener("click", function () {
        init();
      });

      guessBtn.addEventListener("click", guess);

      window.onload = function () {
        init();
      };

      function guess() {
        const val = guessInput.value.trim()
        if (val === "" || isNaN(val) || val[0] === "0") {
          alert("請輸入正確的數字");
          guessInput.value = ""
          return
        }
        guessNum = parseInt(val);

        if (isInValidNumRange()) 
        return;

        if (guessNum === answerNum) {
          alert(`GG 答案是${answerNum}`);
          init();
          return;
        } else if (guessNum < answerNum) {
          minNum = guessNum;
        } else if (guessNum > answerNum) {
          maxNum = guessNum;
        }
        guessInput.value = "";
        showHint();
      }
      function isInValidNumRange(){
            if(guessNum < minNum || guessNum > maxNum){
                showHint()
                guessInput.value = ''
                alert('請確認輸入範圍')
                return true
            }
            return false
        }

      function showHint() {
        hintArea.textContent = `請輸入${minNum}-${maxNum}之間的數字`;
      }

      function init() {
        // guessInput.value = "";
        minNum = 1;
        maxNum = 100;
        answerNum = generateAnswer();
        showHint();
      }

      function generateAnswer() {
        return getRandomIntInclusive(minNum, maxNum);
      }

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }