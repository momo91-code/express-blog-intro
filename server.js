const express = require('express')


const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    const bacheca = [
        {
            Titolo: "Struttura di un server backend",
            Contenuto: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            Immagine: "/immagine1.png",
            Tags: ["backend", "server", "architettura"]
        },
        {
            Titolo: "Le rotte e le richieste HTTP",
            Contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            Immagine: "/immagine2.png",
            Tags: ["http", "rotte", "api"]

        },
        {
            Titolo: "Dati statici e dati dinamici",
            Contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            Immagine: "/immagine3.webp",
            Tags: ["dati", "statici", "dinamici"]
        },
        {
            Titolo: "Gestione delle risorse statiche",
            Contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            Immagine: "/immagine4.png",
            Tags: ["asset", "immagini", "backend"]
        },
        {
            Titolo: "Testare le API",
            Contenuto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            Immagine: "/immagine5.webp",
            Tags: ["api", "test", "backend"]
        },
    ];
    res.json(bacheca);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})