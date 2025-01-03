let Questions = [
    { question: "Quel pays a remporté la Coupe du Monde de la FIFA en 2018 ?", options: ["France", "Brésil", "Allemagne", "Italie"], answerIndex: 0 },
    { question: "Qui est connu comme le 'Roi du Football' ?", options: ["Pelé", "Maradona", "Messi", "Ronaldo"], answerIndex: 0 },
    { question: "Quel est le nombre maximum de joueurs autorisés sur le terrain pour une équipe durant un match de football ?", options: ["9", "10", "11", "12"], answerIndex: 2 },
    { question: "Quel joueur détient le record du plus grand nombre de buts en Coupe du Monde ?", options: ["Marta", "Ronaldo", "Gerd Müller", "Miroslav Klose"], answerIndex: 3 },
    { question: "Quelle est la durée d'un match de football standard (hors temps additionnel) ?", options: ["60 minutes", "75 minutes", "90 minutes", "120 minutes"], answerIndex: 2 },
];

  
  let score = 0;
  let index = 0;
  const images = [
    "../assests/hero-img.png", 
    "../assests/hero-img-2.png",
    "../assests/hero-img-3.png",
    "../assests/hero-img-4.png",
    "../assests/rb_2513.png",

  ];
  
  function AfficherlesQ() {
    document.querySelector(".quiz-container").style.display = "block";
    document.getElementById("result").classList.add("hidden");
  
    document.getElementById("Options").innerHTML = "";
    document.getElementById("question-title").textContent = "Q" + (index + 1) + ". " + Questions[index].question;
  
    document.getElementById("quiz-image").src = images[index];
  
    Questions[index].options.forEach((option, i) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("form-check");
  
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quizOption";
      input.id = `option${i}`;
      input.value = i;
      input.onclick = () => Selected(i);
  
      const label = document.createElement("label");
      label.htmlFor = `option${i}`;
      label.classList.add("form-check-label");
      label.textContent = option;
  
      optionDiv.appendChild(input);
      optionDiv.appendChild(label);
      document.getElementById("Options").appendChild(optionDiv);
    });
  }
  
  function nextQuestion() {
    if (index < Questions.length - 1) {
      index++;
      AfficherlesQ();
    } else {
      Resultat();
    }
  }
  
  function PreviousQ() {
    if (index > 0) {
      index--;
      AfficherlesQ();
    }
  }
  
 
  function Selected(selectedOption) {
    if (selectedOption == Questions[index].answerIndex) {
      score++;
    }
  //  console.log(score);
   
  }
  
  function Resultat() {
    
    
    console.log(score);
    document.querySelector(".quiz-container").style.display = "none"; 
    document.getElementById("result").classList.remove("hidden"); 
    document.getElementById("score").textContent = `Score: ${score} / ${Questions.length}`;
  }
  
  function NextPage() {
    score = 0;
    index = 0;
    AfficherlesQ();
  }
  
  window.onload = AfficherlesQ;
  