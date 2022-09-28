const series = [
    {
        title: "Dark",
        cast: "Louis Hofmann, Lisa Vicari",
        genre: "Misterio",
        trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA",
        poster: "./images/dark.png",
        seasons: 3,
        release: 2017,
        number: 1
    },
    {
        title: "Stranger Things",
        cast: "Millie Bobby Brown, Finn Wolfhard, David Harbour, Winona Ryder",
        genre: "Ciencia ficción",
        trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        poster: "./images/stranger.png",
        seasons: 4,
        release: 2016,
        number: 2
    },
    {
        title: "Sense8",
        cast: "Brian J. Smith, Tuppence Middleton, Miguel Ángel Silvestre",
        genre: "Ciencia ficción",
        trailer: "https://www.youtube.com/watch?v=ryzWVVuJi5g",
        poster: "./images/sense8.png",
        seasons: 2,
        release: 2015,
        number: 3
    },
    {
        title: "Black Mirror",
        cast: "Daniel Kaluuya, Anthony Mackie, Miley Cyrus, Jon Hamm, Cristin Milioti",
        genre: "Distopía",
        trailer: "https://www.youtube.com/watch?v=dYgrHBqupjA",
        poster: "./images/black.png",
        seasons: 6,
        release: 2011,
        number: 4
    },
    {
        title: "Altered Carbon",
        cast: "Joel Kinnaman, Martha Higareda, Dichen Lachman",
        genre: "Cyberpunk",
        trailer: "https://www.youtube.com/watch?v=-Yt89b5AcwY",
        poster: "./images/altered.png",
        seasons: 2,
        release: 2018,
        number: 5
    },
    {
        title: "BoJack Horseman",
        cast: "Will Arnett, Aaron Paul, Alison Brie, Amy Sedaris",
        genre: "Comedia",
        trailer: "https://www.youtube.com/watch?v=i1eJMig5Ik4",
        poster: "./images/bojack.png",
        seasons: 6,
        release: 2014,
        number: 6
    },
    {
        title: "Rick and Morty",
        cast: "Justin Roiland, Spencer Grammer, Chris Parnell, Sarah Chalke, Maurice LaMarche",
        genre: "Comedia",
        trailer: "https://www.youtube.com/watch?v=fJ1np6NnMYU",
        poster: "./images/rick.png",
        seasons: 6,
        release: 2013,
        number: 7
    },
    {
        title: "Vikings",
        cast: "Travis Fimmel, Katheryn Winnick, Clive Standen, Gustaf Skarsgård",
        genre: "Drama histórico",
        trailer: "https://www.youtube.com/watch?v=9GgxinPwAGc",
        poster: "./images/vikings.png",
        seasons: 6,
        release: 2013,
        number: 8
    },
    {
        title: "Outlander",
        cast: "Sam Heughan, Caitriona Balfe, Sophie Skelton, Richard Rankin",
        genre: "Drama histórico",
        trailer: "https://www.youtube.com/watch?v=YnaqypyJDHs",
        poster: "./images/outlander.png",
        seasons: 6,
        release: 2014,
        number: 9
    },
    {
        title: "Arcane",
        cast: "Hailee Steinfeld, Katie Leung, Ella Purnell, Kevin Alejandro",
        genre: "Drama",
        trailer: "https://www.youtube.com/watch?v=fXmAurh012s",
        poster: "./images/arcane.png",
        seasons: 1,
        release: 2021,
        number: 10
    },
    {
        title: "The Witcher",
        cast: "Henry Cavill, Anya Chalotra",
        genre: "Fantasía",
        trailer: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
        poster: "./images/witcher.png",
        seasons: 2,
        release: 2019,
        number: 11
    },
    {
        title: "Sex Education",
        cast: "Asa Butterfield, Emma Mackey, Ncuti Gatwa, Gillian Anderson",
        genre: "Drama",
        trailer: "https://www.youtube.com/watch?v=Hd2ldTR-WpI",
        poster: "./images/education.png",
        seasons: 3,
        release: 2019,
        number: 12
    },
    {
        title: "Gambito de Dama",
        cast: "Anya Taylor-Joy, Moses Ingram, Harry Melling",
        genre: "Drama",
        trailer: "https://www.youtube.com/watch?v=kwrQzTz16w4",
        poster: "./images/queen.png",
        seasons: 6,
        release: 2013,
        number: 13
    },
    {
        title: "Peaky Blinders",
        cast: "Cillian Murphy, Paul Anderson, Helen McCrory, Sophie Rundle, Natasha O'Keeffe, Packy Lee",
        genre: "Drama",
        trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        poster: "./images/peaky.png",
        seasons: 3,
        release: 2017,
        number: 14
    },
    {
        title: "Big Mouth",
        cast: "Nick Kroll, John Mulaney, Maya Rudolph",
        genre: "Comedia",
        trailer: "https://www.youtube.com/watch?v=v8DlpO5UOnI",
        poster: "./images/mouth.png",
        seasons: 6,
        release: 2017,
        number: 15
    },
    {
        title: "Brooklyn Nine-Nine",
        cast: "Andy Samberg, Melissa Fumero, Joe Lo Truglio, Terry Crews, Chelsea Peretti",
        genre: "Comedia",
        trailer: "https://www.youtube.com/watch?v=sEOuJ4z5aTc",
        poster: "./images/brooklyn.png",
        seasons: 8,
        release: 2013,
        number: 16
    },
    {
        title: "Mindhunter",
        cast: "Jonathan Groff, Holt McCallany, Anna Torv, Hannah Gross",
        genre: "Policial",
        trailer: "https://www.youtube.com/watch?v=DHJO6VR6TYY",
        poster: "./images/mind.png",
        seasons: 2,
        release: 2017,
        number: 17
    },
    {
        title: "The Sinner",
        cast: "Jessica Biel, Bill Pullman, Christopher Abbott",
        genre: "Policial",
        trailer: "https://www.youtube.com/watch?v=ZEfnpFuzxnE",
        poster: "./images/sinner.png",
        seasons: 4,
        release: 2017,
        number: 18
    }
];

series.forEach(series => {
    db.collection("series").add(series)
});