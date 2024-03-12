document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#monFormulaire");
  const mainImages = document.querySelector("#imageChange");
  const inputAnswer = document.querySelector("#inputAnswer");
  const buttonHint = document.querySelector("#buttonHint");
  const submit = document.querySelector("#boutonSubmit");

  const arrayImages = [
    {
      source: "photos/Allemagne.jpg",
      posibleAnswers: ["allemagne"],
      attemps: 5,
      hint: "Le pays qui a inventer les burger !",
      askForHint: false,
    },
    {
      source: "photos/Angleterre.jpg",
      posibleAnswers: ["angleterre"],
      attemps: 5,
      hint: "Ce pays est connu pour son thé de l'après-midi",
      askForHint: false,
    },
    {
      source: "photos/Australie.jpg",
      posibleAnswers: ["australie"],
      attemps: 5,
      hint: "Pays connu pour ses kangourous et l'Opéra de Sydney.",
      askForHint: false,
    },
    {
      source: "photos/Brazil.jpg",
      posibleAnswers: ["bresil"],
      attemps: 5,
      hint: "Le pays du carnaval de Rio et du Christ Rédempteur.",
      askForHint: false,
    },
    {
      source: "photos/Canada.jpg",
      posibleAnswers: ["canada"],
      attemps: 5,
      hint: "La feuille d'érable et les vastes étendues sauvages.",
      askForHint: false,
    },
    {
      source: "photos/Chine.jpg",
      posibleAnswers: ["chine"],
      attemps: 5,
      hint: "La Grande Muraille et la cité interdite.",
      askForHint: false,
    },
    {
      source: "photos/Espagne.jpg",
      posibleAnswers: ["espagne"],
      attemps: 5,
      hint: "La patrie de la paella et du flamenco.",
      askForHint: false,
    },
    {
      source: "photos/France.jpg",
      posibleAnswers: ["france"],
      attemps: 5,
      hint: "La tour Eiffel et les dégustations de vin.",
      askForHint: false,
    },
    {
      source: "photos/Grèce.jpg",
      posibleAnswers: ["grece", "grèce"],
      attemps: 5,
      hint: "Berçeau de la démocratie et des Jeux Olympiques.",
      askForHint: false,
    },
    {
      source: "photos/Inde.jpg",
      posibleAnswers: ["inde"],
      attemps: 5,
      hint: "Le pays du Taj Mahal et du curry épicé.",
      askForHint: false,
    },
    {
      source: "photos/Italie.jpg",
      posibleAnswers: ["italie"],
      attemps: 5,
      hint: "La patrie de la pizza, des pâtes et du Colisée.",
      askForHint: false,
    },
    {
      source: "photos/Japon.jpg",
      posibleAnswers: ["japon"],
      attemps: 5,
      hint: "Le pays du soleil levant, des sushis et des samouraïs.",
      askForHint: false,
    },
    {
      source: "photos/Norvège.jpg",
      posibleAnswers: ["norvege", "norvège"],
      attemps: 5,
      hint: "Fjords majestueux et aurores boréales.",
      askForHint: false,
    },
    {
      source: "photos/Philippine.jpg",
      posibleAnswers: ["philippine"],
      attemps: 5,
      hint: "Archipel aux plages de rêve et rizières en terrasse.",
      askForHint: false,
    },
    {
      source: "photos/Portugal.jpg",
      posibleAnswers: ["portugal"],
      attemps: 5,
      hint: "Les pasteis de nata et les explorateurs maritimes.",
      askForHint: false,
    },
    {
      source: "photos/Russie.jpg",
      posibleAnswers: ["russie"],
      attemps: 5,
      hint: "Le pays des tsars, du Kremlin et du ballet classique.",
      askForHint: false,
    },
    {
      source: "photos/Suisse.jpg",
      posibleAnswers: ["suisse"],
      attemps: 5,
      hint: "Horlogerie de précision et chocolats fins.",
      askForHint: false,
    },
    {
      source: "photos/Tahiti.jpg",
      posibleAnswers: ["tahiti"],
      attemps: 5,
      hint: "Îles paradisiaques et danses traditionnelles polynésiennes.",
      askForHint: false,
    },
    {
      source: "photos/Tunisie.jpg",
      posibleAnswers: ["tunisie"],
      attemps: 5,
      hint: "Ruines de Carthage et souks animés.",
      askForHint: false,
    },
    {
      source: "photos/Turquie.jpg",
      posibleAnswers: ["turquie"],
      attemps: 5,
      hint: "Le pont entre l'Europe et l'Asie, connu pour son bazar et ses mosquées.",
      askForHint: false,
    },
  ];

  let score = 0;

  let currentIndex = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let currentImage = arrayImages[currentIndex];

    if (
      inputAnswer.value.toLowerCase().trim() ==
      arrayImages[currentIndex].posibleAnswers
    ) {
      score += 10;
      currentIndex += 1;
      document.querySelector("#score").innerHTML = score;
      document.querySelector("#succesFailesMessage").innerHTML =
        "Bonne réponse !";
      mainImages.src = arrayImages[currentIndex].source;
      inputAnswer.value = "";
      document.querySelector("#hint").innerHTML = "";
    } else {
      currentImage.attemps -= 1;
      document.querySelector("#succesFailesMessage").innerHTML =
        "Oups, mauvaise réponse, il vous reste " +
        arrayImages[currentIndex].attemps +
        " essaies";
      inputAnswer.value = "";
      if (currentImage.attemps == 0 && currentIndex < arrayImages.length - 1) {
        currentIndex += 1;
        mainImages.src = arrayImages[currentIndex].source;
      }
    }
  });

  buttonHint.addEventListener("click", function () {
    if (!arrayImages[currentIndex].askForHint) {
      arrayImages[currentIndex].askForHint = true;
      document.querySelector("#hint").innerHTML =
        arrayImages[currentIndex].hint;
    }
  });
});
