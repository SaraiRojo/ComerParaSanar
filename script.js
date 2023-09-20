const memeContainer = document.getElementById("meme-container");

// Ejemplo de datos de memes (pueden provenir de una API)
const memes = [
    { title: "Meme 1", imageUrl: "meme1.jpg" },
    { title: "Meme 2", imageUrl: "meme2.jpg" },
    { title: "Meme 3", imageUrl: "meme3.jpg" },
    // ... más memes ...
];

// Cargar los memes en el contenedor
memes.forEach(meme => {
    const memeCard = document.createElement("div");
    memeCard.classList.add("meme-card");

    const memeImage = document.createElement("img");
    memeImage.src = meme.imageUrl;
    memeImage.alt = meme.title;

    const memeTitle = document.createElement("p");
    memeTitle.textContent = meme.title;

    memeCard.appendChild(memeImage);
    memeCard.appendChild(memeTitle);

    memeContainer.appendChild(memeCard);
});
