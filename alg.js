const btn = document.getElementById("btn")

const validator = () => {
  try {
    const word = document.getElementById("input").value
    let vowel = ["a", "e", "i", "o", "u"]
    let count = 0
    

    if (word.trim() == "") {
      alert("Please input a word")
      return
    }

    if (word.trim().length > 30) {
      alert("Please input words and not sentences!")
      return
    }

    let filter = word.split("")
    let newWord = filter.filter((item) => {
      return item !== " "
    })

    for (let i = 0; i < newWord.length; i++) {
      if (!vowel.includes(newWord[i])) {
        count += 1
      } else {
        count = 0
      }

      if (count == 6) {
        alert("Word is not pronounceable, don't input gibberish!")
        return
      }
    }
    
    


    if ("speechSynthesis" in window) {
      let message = new SpeechSynthesisUtterance()
      message.text = word
      message.voice = speechSynthesis.getVoices()[0]
      let ratespeed;
      let radiospeed = document.querySelectorAll(".radiospeed")
      radiospeed.forEach((item) => {
          if(item.checked){
              ratespeed = parseFloat(item.value)
          }
      })
      message.rate = ratespeed
      
      let rate;
      let radio = document.querySelectorAll(".radio")
      radio.forEach((item) => {
          if(item.checked){
              rate = parseFloat(item.value)
          }
      })
      message.rate = ratespeed
      message.pitch = rate
      speechSynthesis.speak(message)
    }else{
        alert("Speech Synthesis not supported in your browser, Please try again later!")
    }

  } catch (error) {
    console.error("An error occurred:", error.message)
    alert("Speech Synthesis not supported in your browser, Please try again later!")
  }
}

btn.addEventListener("click",validator)
