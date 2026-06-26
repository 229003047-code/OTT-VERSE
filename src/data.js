// src/data.js

//------------------------------------------------
// OTT LOGOS
//------------------------------------------------

export const ottLogos = {

  Netflix:
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",

  "Prime Video":
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",

  Hotstar:
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg",

  SonyLIV:
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/SonyLIV_logo.svg",

  Zee5:
    "https://upload.wikimedia.org/wikipedia/commons/7/75/ZEE5_logo.svg",

  Crunchyroll:
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png"

};


//------------------------------------------------
// MOVIES DATABASE (20 MOVIES - IMDb DESC)
//------------------------------------------------

export const movies = [

{
id:1,
title:"The Shawshank Redemption",
year:1994,
rating:9.3,
genre:"Drama",
industry:"Hollywood",
director:"Frank Darabont",
actors:"Tim Robbins, Morgan Freeman",
poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
backdrop:"https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
trailer:"https://www.youtube.com/embed/6hB3S9bIaco",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A banker wrongly imprisoned forms a life-changing friendship and finds hope inside Shawshank prison."
},

{
id:2,
title:"The Godfather",
year:1972,
rating:9.2,
genre:"Crime",
industry:"Hollywood",
director:"Francis Ford Coppola",
actors:"Marlon Brando, Al Pacino",
poster:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
backdrop:"https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
trailer:"https://www.youtube.com/embed/sY1S34973zA",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"The aging patriarch transfers control of his powerful crime empire to his reluctant son."
},

{
id:3,
title:"The Dark Knight",
year:2008,
rating:9.0,
genre:"Action",
industry:"Hollywood",
director:"Christopher Nolan",
actors:"Christian Bale, Heath Ledger",
poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
backdrop:"https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"},
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Batman faces the Joker, a criminal mastermind spreading chaos across Gotham city."
},

{
id:4,
title:"Schindler's List",
year:1993,
rating:9.0,
genre:"Drama",
industry:"Hollywood",
director:"Steven Spielberg",
actors:"Liam Neeson, Ralph Fiennes",
poster:"https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
backdrop:"https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
trailer:"https://www.youtube.com/embed/gG22XNhtnoY",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A businessman saves over a thousand Jews during the Holocaust through courage and sacrifice."
},

{
id:5,
title:"The Lord of the Rings Return of the King",
year:2003,
rating:9.0,
genre:"Fantasy",
industry:"Hollywood",
director:"Peter Jackson",
actors:"Elijah Wood, Viggo Mortensen",
poster:"https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
backdrop:"https://image.tmdb.org/t/p/original/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
trailer:"https://www.youtube.com/embed/r5X-hFf6Bwo",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"The final battle for Middle-earth begins as Frodo reaches Mount Doom."
},

{
id:6,
title:"Pulp Fiction",
year:1994,
rating:8.9,
genre:"Crime",
industry:"Hollywood",
director:"Quentin Tarantino",
actors:"John Travolta, Samuel L Jackson",
poster:"https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
backdrop:"https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
trailer:"https://www.youtube.com/embed/s7EdQ4FqbhY",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Multiple interconnected crime stories unfold in Tarantino's cult masterpiece."
},

{
id:7,
title:"Fight Club",
year:1999,
rating:8.8,
genre:"Drama",
industry:"Hollywood",
director:"David Fincher",
actors:"Brad Pitt, Edward Norton",
poster:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
backdrop:"https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
trailer:"https://www.youtube.com/embed/qtRKdVHc-cE",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"An insomniac and soap maker create an underground fight club that evolves into chaos."
},

{
id:8,
title:"Inception",
year:2010,
rating:8.8,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Christopher Nolan",
actors:"Leonardo DiCaprio, Joseph Gordon-Levitt",
poster:"https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
backdrop:"https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
trailer:"https://www.youtube.com/embed/YoHD9XEInc0",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A thief enters dreams to steal secrets but faces his toughest mission yet."
},

{
id:9,
title:"Interstellar",
year:2014,
rating:8.7,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Christopher Nolan",
actors:"Matthew McConaughey, Anne Hathaway",
poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
backdrop:"https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Astronauts travel through a wormhole in search of a new home for humanity."
},

{
id:10,
title:"Parasite",
year:2019,
rating:8.6,
genre:"Thriller",
industry:"K-Drama",
director:"Bong Joon Ho",
actors:"Song Kang-ho, Lee Sun-kyun",
poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
backdrop:"https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
trailer:"https://www.youtube.com/embed/5xH0HfJHsaY",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A poor family infiltrates a wealthy household in this Oscar-winning thriller."
},

{
id:11,
title:"Avengers Endgame",
year:2019,
rating:8.4,
genre:"Action",
industry:"Hollywood",
director:"Russo Brothers",
actors:"Robert Downey Jr, Chris Evans",
poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
backdrop:"https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Avengers assemble for one final mission to defeat Thanos."
},

{
id:12,
title:"Joker",
year:2019,
rating:8.4,
genre:"Drama",
industry:"Hollywood",
director:"Todd Phillips",
actors:"Joaquin Phoenix",
poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
backdrop:"https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
trailer:"https://www.youtube.com/embed/zAGVQLHvwOY",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"The psychological origin story of Batman's greatest enemy."
},

{
id:13,
title:"RRR",
year:2022,
rating:8.3,
genre:"Action",
industry:"Indian",
director:"S S Rajamouli",
actors:"NTR, Ram Charan",
poster:"https://image.tmdb.org/t/p/w500/lrKjQZgYJ9lM8BHGhQJQx4YdLzY.jpg",
backdrop:"https://image.tmdb.org/t/p/original/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
trailer:"https://www.youtube.com/embed/f_vbAtFSEc0",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Two revolutionaries unite to fight against British rule."
},

{
id:14,
title:"Baahubali The Beginning",
year:2015,
rating:8.0,
genre:"Action",
industry:"Indian",
director:"S S Rajamouli",
actors:"Prabhas, Rana Daggubati",
poster:"https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
backdrop:"https://image.tmdb.org/t/p/original/5BGU9FmICjYvG6S7IY4vYkKQOQ3.jpg",
trailer:"https://www.youtube.com/embed/sOEg_YZQsTI",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A young man learns about his royal heritage and destiny."
},

{
id:15,
title:"Baahubali The Conclusion",
year:2017,
rating:8.2,
genre:"Action",
industry:"Indian",
director:"S S Rajamouli",
actors:"Prabhas, Anushka Shetty",
poster:"https://image.tmdb.org/t/p/w500/21sC2assImQIYCedaVhYf1P8X7X.jpg",
backdrop:"https://image.tmdb.org/t/p/original/6PrJw0xAFWb4xX0h7Wn9aAJhDig.jpg",
trailer:"https://www.youtube.com/embed/G62HrubdD6o",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"The truth behind Baahubali's death is revealed."
}
,
{
id:16,
title:"Dangal",
year:2016,
rating:8.4,
genre:"Drama",
industry:"Indian",
director:"Nitesh Tiwari",
actors:"Aamir Khan, Fatima Sana Shaikh",
poster:"https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGw1No4XK.jpg",
backdrop:"https://image.tmdb.org/t/p/original/wdS5EiC0YkzK5K9iCj5kD6tCE8r.jpg",
trailer:"https://www.youtube.com/embed/x_7YlGv9u1g",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A father trains his daughters to become world-class wrestlers."
},

{
id:17,
title:"3 Idiots",
year:2009,
rating:8.4,
genre:"Comedy",
industry:"Indian",
director:"Rajkumar Hirani",
actors:"Aamir Khan, R Madhavan, Sharman Joshi",
poster:"https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
backdrop:"https://image.tmdb.org/t/p/original/q2C6XhXx0nXIkj5q4U9zLJrVN6M.jpg",
trailer:"https://www.youtube.com/embed/K0eDlFX9GMc",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Three friends navigate engineering college and discover life's true meaning."
},

{
id:18,
title:"Gladiator",
year:2000,
rating:8.5,
genre:"Action",
industry:"Hollywood",
director:"Ridley Scott",
actors:"Russell Crowe, Joaquin Phoenix",
poster:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
trailer:"https://www.youtube.com/embed/owK1qxDselE",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A betrayed Roman general fights his way back as a gladiator."
},

{
id:19,
title:"The Matrix",
year:1999,
rating:8.7,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Wachowski Sisters",
actors:"Keanu Reeves, Laurence Fishburne",
poster:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
trailer:"https://www.youtube.com/embed/vKQi3bBA1y8",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A hacker discovers reality is a simulation and becomes humanity’s savior."
},

{
id:20,
title:"Forrest Gump",
year:1994,
rating:8.8,
genre:"Drama",
industry:"Hollywood",
director:"Robert Zemeckis",
actors:"Tom Hanks",
poster:"https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
backdrop:"https://image.tmdb.org/t/p/original/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
trailer:"https://www.youtube.com/embed/bLvqoHBptjg",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"The life journey of a simple man witnessing historic moments."
},

{
id:21,
title:"The Lion King",
year:1994,
rating:8.5,
genre:"Animation",
industry:"Hollywood",
director:"Roger Allers",
actors:"Matthew Broderick, Jeremy Irons",
poster:"https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
backdrop:"https://image.tmdb.org/t/p/original/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
trailer:"https://www.youtube.com/embed/7TavVZMewpY",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A lion cub must reclaim his throne and embrace his destiny."
},

{
id:22,
title:"Spider-Man No Way Home",
year:2021,
rating:8.3,
genre:"Action",
industry:"Hollywood",
director:"Jon Watts",
actors:"Tom Holland, Zendaya",
poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
backdrop:"https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Spider-Man faces multiverse villains after identity exposure."
},

{
id:23,
title:"Avengers Infinity War",
year:2018,
rating:8.4,
genre:"Action",
industry:"Hollywood",
director:"Russo Brothers",
actors:"Robert Downey Jr, Chris Hemsworth",
poster:"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
backdrop:"https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Avengers battle Thanos to save half of the universe."
},

{
id:24,
title:"Titanic",
year:1997,
rating:7.9,
genre:"Romance",
industry:"Hollywood",
director:"James Cameron",
actors:"Leonardo DiCaprio, Kate Winslet",
poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fVcZErSWaBq1hYI3GXbYhW9UO9K.jpg",
trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A tragic love story aboard the doomed Titanic ship."
},

{
id:25,
title:"John Wick",
year:2014,
rating:7.4,
genre:"Action",
industry:"Hollywood",
director:"Chad Stahelski",
actors:"Keanu Reeves",
poster:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
backdrop:"https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
trailer:"https://www.youtube.com/embed/2AUmvWm5ZDQ",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A retired assassin returns for revenge after losing everything."
},

{
id:26,
title:"The Batman",
year:2022,
rating:7.9,
genre:"Action",
industry:"Hollywood",
director:"Matt Reeves",
actors:"Robert Pattinson",
poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
backdrop:"https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
trailer:"https://www.youtube.com/embed/mqqft2x_Aa4",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Batman hunts the Riddler in a dark crime mystery."
},

{
id:27,
title:"KGF Chapter 2",
year:2022,
rating:8.4,
genre:"Action",
industry:"Indian",
director:"Prashanth Neel",
actors:"Yash, Sanjay Dutt",
poster:"https://image.tmdb.org/t/p/w500/khNvXT8tm2Yb0Vru0Tq3D4VqD3.jpg",
backdrop:"https://image.tmdb.org/t/p/original/zfWq2o9ZQ9KZ0e0L1YyfisSCDtn.jpg",
trailer:"https://www.youtube.com/embed/JKa05nyUmuQ",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Rocky becomes king of the gold mafia world."
},

{
id:28,
title:"Your Name",
year:2016,
rating:8.4,
genre:"Anime",
industry:"Anime",
director:"Makoto Shinkai",
actors:"Ryunosuke Kamiki",
poster:"https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
backdrop:"https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
trailer:"https://www.youtube.com/embed/xU47nhruN-Q",
platforms:[
{name:"Crunchyroll",link:"https://www.crunchyroll.com"}
],
description:"Two teenagers mysteriously swap bodies and form a deep connection."
},

{
id:29,
title:"Train to Busan",
year:2016,
rating:7.6,
genre:"Thriller",
industry:"K-Drama",
director:"Yeon Sang-ho",
actors:"Gong Yoo",
poster:"https://image.tmdb.org/t/p/w500/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fVpFOcQyHJM2di9upgSIwWD5wac.jpg",
trailer:"https://www.youtube.com/embed/pyWuHv2-Abk",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Passengers fight to survive during a zombie outbreak on a train."
},

{
id:30,
title:"Money Heist",
year:2017,
rating:8.2,
genre:"Crime",
industry:"K-Drama",
director:"Alex Pina",
actors:"Alvaro Morte",
poster:"https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
backdrop:"https://image.tmdb.org/t/p/original/6Lwy0jvMpmjoSxXZs5CqZzPZlKb.jpg",
trailer:"https://www.youtube.com/embed/_InqQJRqGW4",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A mastermind leads the biggest heist in history."
}
,
{
id:31,
title:"The Prestige",
year:2006,
rating:8.5,
genre:"Drama",
industry:"Hollywood",
director:"Christopher Nolan",
actors:"Christian Bale, Hugh Jackman",
poster:"https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
backdrop:"https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
trailer:"https://www.youtube.com/embed/RLtaA9fFNXU",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Two rival magicians engage in a dangerous battle of illusion and obsession."
},

{
id:32,
title:"Whiplash",
year:2014,
rating:8.5,
genre:"Drama",
industry:"Hollywood",
director:"Damien Chazelle",
actors:"Miles Teller, J.K. Simmons",
poster:"https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
trailer:"https://www.youtube.com/embed/7d_jQycdQGo",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A young drummer faces brutal training under a ruthless instructor."
},

{
id:33,
title:"The Departed",
year:2006,
rating:8.5,
genre:"Crime",
industry:"Hollywood",
director:"Martin Scorsese",
actors:"Leonardo DiCaprio, Matt Damon",
poster:"https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
backdrop:"https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
trailer:"https://www.youtube.com/embed/iojhqm0JTW4",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"An undercover cop and mole try to identify each other."
},

{
id:34,
title:"The Green Mile",
year:1999,
rating:8.6,
genre:"Drama",
industry:"Hollywood",
director:"Frank Darabont",
actors:"Tom Hanks, Michael Clarke Duncan",
poster:"https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
backdrop:"https://image.tmdb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
trailer:"https://www.youtube.com/embed/Ki4haFrqSrw",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A prison guard discovers supernatural secrets about a death row inmate."
},

{
id:35,
title:"Se7en",
year:1995,
rating:8.6,
genre:"Thriller",
industry:"Hollywood",
director:"David Fincher",
actors:"Brad Pitt, Morgan Freeman",
poster:"https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
backdrop:"https://image.tmdb.org/t/p/original/ba4CpvnaxvAgff2jHiaqJrVpZJ5.jpg",
trailer:"https://www.youtube.com/embed/znmZoVkCjpI",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Detectives hunt a serial killer using seven deadly sins."
},

{
id:36,
title:"The Silence of the Lambs",
year:1991,
rating:8.6,
genre:"Thriller",
industry:"Hollywood",
director:"Jonathan Demme",
actors:"Anthony Hopkins, Jodie Foster",
poster:"https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
backdrop:"https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
trailer:"https://www.youtube.com/embed/W6Mm8Sbe__o",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A young FBI agent seeks help from a cannibal serial killer."
},

{
id:37,
title:"Saving Private Ryan",
year:1998,
rating:8.6,
genre:"War",
industry:"Hollywood",
director:"Steven Spielberg",
actors:"Tom Hanks, Matt Damon",
poster:"https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
backdrop:"https://image.tmdb.org/t/p/original/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
trailer:"https://www.youtube.com/embed/zwhP5b4tD6g",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Soldiers risk their lives to save one man during WWII."
},



{
id:39,
title:"The Wolf of Wall Street",
year:2013,
rating:8.2,
genre:"Drama",
industry:"Hollywood",
director:"Martin Scorsese",
actors:"Leonardo DiCaprio",
poster:"https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
backdrop:"https://image.tmdb.org/t/p/original/uhYoytlNaq46dG81wLmHqaSuzWu.jpg",
trailer:"https://www.youtube.com/embed/iszwuX1AK6A",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"The rise and fall of a corrupt stockbroker."
},

{
id:40,
title:"Shutter Island",
year:2010,
rating:8.2,
genre:"Thriller",
industry:"Hollywood",
director:"Martin Scorsese",
actors:"Leonardo DiCaprio",
poster:"https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
backdrop:"https://image.tmdb.org/t/p/original/9Bb6K6l88XzPqTn5AtjQvYJqYjM.jpg",
trailer:"https://www.youtube.com/embed/5iaYLCiq5RM",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A detective investigates a disappearance in a mental asylum."
},

{
id:41,
title:"Doctor Strange",
year:2016,
rating:7.5,
genre:"Action",
industry:"Hollywood",
director:"Scott Derrickson",
actors:"Benedict Cumberbatch",
poster:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
backdrop:"https://image.tmdb.org/t/p/original/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg",
trailer:"https://www.youtube.com/embed/HSzx-zryEgM",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A surgeon becomes the most powerful sorcerer."
},

{
id:42,
title:"Black Panther",
year:2018,
rating:7.3,
genre:"Action",
industry:"Hollywood",
director:"Ryan Coogler",
actors:"Chadwick Boseman",
poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
backdrop:"https://image.tmdb.org/t/p/original/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
trailer:"https://www.youtube.com/embed/xjDjIWPwcPU",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"The king of Wakanda must defend his throne."
},



{
id:44,
title:"Jai Bhim",
year:2021,
rating:8.8,
genre:"Drama",
industry:"Indian",
director:"TJ Gnanavel",
actors:"Suriya",
poster:"https://image.tmdb.org/t/p/w500/okJ8eW5t0n0Xo3Zl0Yt6k4t7PZC.jpg",
backdrop:"https://image.tmdb.org/t/p/original/3Xc5V4pZk90un0nLB522Ssqn1H6.jpg",
trailer:"https://www.youtube.com/embed/nnXpbTFrqXA",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A lawyer fights for justice in a tribal case."
},

{
id:45,
title:"Weathering With You",
year:2019,
rating:7.5,
genre:"Anime",
industry:"Anime",
director:"Makoto Shinkai",
actors:"Kotaro Daigo",
poster:"https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
backdrop:"https://image.tmdb.org/t/p/original/7F53cMWdV4kJxF6m1ZxgL9S1J0K.jpg",
trailer:"https://www.youtube.com/embed/Q6iK6DjV_iE",
platforms:[
{name:"Crunchyroll",link:"https://www.crunchyroll.com"}
],
description:"A boy meets a girl who can control the weather."
}
,


{
id:47,
title:"The Lion King",
year:1994,
rating:8.5,
genre:"Animation",
industry:"Hollywood",
director:"Roger Allers",
actors:"Matthew Broderick, Jeremy Irons",
poster:"https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
backdrop:"https://image.tmdb.org/t/p/original/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
trailer:"https://www.youtube.com/embed/lFzVJEksoDY",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A lion prince fights to reclaim his rightful throne."
},

{
id:48,
title:"Terminator 2 Judgment Day",
year:1991,
rating:8.6,
genre:"Sci-Fi",
industry:"Hollywood",
director:"James Cameron",
actors:"Arnold Schwarzenegger",
poster:"https://image.tmdb.org/t/p/w500/weVXMD5QBGeQil4HEATZqAkXeEc.jpg",
backdrop:"https://image.tmdb.org/t/p/original/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
trailer:"https://www.youtube.com/embed/CRRlbK5w8AE",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A cyborg protects a boy who will save humanity."
},

{
id:49,
title:"Back to the Future",
year:1985,
rating:8.5,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Robert Zemeckis",
actors:"Michael J Fox",
poster:"https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
backdrop:"https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
trailer:"https://www.youtube.com/embed/qvsgGtivCgs",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A teen travels back in time accidentally."
},

{
id:50,
title:"Alien",
year:1979,
rating:8.5,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Ridley Scott",
actors:"Sigourney Weaver",
poster:"https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
backdrop:"https://image.tmdb.org/t/p/original/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
trailer:"https://www.youtube.com/embed/jQ5lPt9edzQ",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A spaceship crew encounters deadly alien life."
},

{
id:51,
title:"Spider-Man No Way Home",
year:2021,
rating:8.3,
genre:"Action",
industry:"Hollywood",
director:"Jon Watts",
actors:"Tom Holland",
poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
backdrop:"https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Spider-Man faces villains from multiple universes."
},



{
id:53,
title:"Django Unchained",
year:2012,
rating:8.4,
genre:"Drama",
industry:"Hollywood",
director:"Quentin Tarantino",
actors:"Jamie Foxx, Leonardo DiCaprio",
poster:"https://image.tmdb.org/t/p/w500/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
backdrop:"https://image.tmdb.org/t/p/original/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
trailer:"https://www.youtube.com/embed/_iH0UBYDI4g",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A freed slave seeks revenge with a bounty hunter."
},

{
id:54,
title:"The Truman Show",
year:1998,
rating:8.2,
genre:"Drama",
industry:"Hollywood",
director:"Peter Weir",
actors:"Jim Carrey",
poster:"https://image.tmdb.org/t/p/w500/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",
backdrop:"https://image.tmdb.org/t/p/original/9V5iHtf0yMOG3Jm1zE9e4kKDAdM.jpg",
trailer:"https://www.youtube.com/embed/dlnmQbPGuls",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A man discovers his entire life is a TV show."
},

{
id:55,
title:"Mad Max Fury Road",
year:2015,
rating:8.1,
genre:"Action",
industry:"Hollywood",
director:"George Miller",
actors:"Tom Hardy, Charlize Theron",
poster:"https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
backdrop:"https://image.tmdb.org/t/p/original/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
trailer:"https://www.youtube.com/embed/hEJnMQG9ev8",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Survivors flee through a desert wasteland."
},





{
id:59,
title:"Spirited Away",
year:2001,
rating:8.6,
genre:"Anime",
industry:"Anime",
director:"Hayao Miyazaki",
actors:"Rumi Hiiragi",
poster:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
backdrop:"https://image.tmdb.org/t/p/original/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
trailer:"https://www.youtube.com/embed/ByXuk9QqQkk",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A girl enters a magical spirit world."
},

{
id:60,
title:"Demon Slayer Mugen Train",
year:2020,
rating:8.3,
genre:"Anime",
industry:"Anime",
director:"Haruo Sotozaki",
actors:"Natsuki Hanae",
poster:"https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
backdrop:"https://image.tmdb.org/t/p/original/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
trailer:"https://www.youtube.com/embed/ATJYac_dORw",
platforms:[
{name:"Crunchyroll",link:"https://www.crunchyroll.com"}
],
description:"Demon slayers fight powerful demons on a train."
}
,
{
id:61,
title:"The Batman",
year:2022,
rating:7.8,
genre:"Action",
industry:"Hollywood",
director:"Matt Reeves",
actors:"Robert Pattinson, Zoe Kravitz",
poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
backdrop:"https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
trailer:"https://www.youtube.com/embed/mqqft2x_Aa4",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Batman uncovers corruption while hunting the Riddler."
},

{
id:62,
title:"Doctor Strange",
year:2016,
rating:7.5,
genre:"Sci-Fi",
industry:"Hollywood",
director:"Scott Derrickson",
actors:"Benedict Cumberbatch",
poster:"https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
backdrop:"https://image.tmdb.org/t/p/original/2iZfJG1g9b0p9Z3rL4mYJdRzZkI.jpg",
trailer:"https://www.youtube.com/embed/HSzx-zryEgM",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A surgeon becomes the Sorcerer Supreme."
},

{
id:63,
title:"Iron Man",
year:2008,
rating:7.9,
genre:"Action",
industry:"Hollywood",
director:"Jon Favreau",
actors:"Robert Downey Jr",
poster:"https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
backdrop:"https://image.tmdb.org/t/p/original/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
trailer:"https://www.youtube.com/embed/8hYlB38asDY",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Tony Stark becomes Iron Man."
},

{
id:64,
title:"Thor Ragnarok",
year:2017,
rating:7.9,
genre:"Action",
industry:"Hollywood",
director:"Taika Waititi",
actors:"Chris Hemsworth",
poster:"https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
backdrop:"https://image.tmdb.org/t/p/original/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
trailer:"https://www.youtube.com/embed/ue80QwXMRHg",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Thor fights to save Asgard."
},

{
id:65,
title:"Black Panther",
year:2018,
rating:7.3,
genre:"Action",
industry:"Hollywood",
director:"Ryan Coogler",
actors:"Chadwick Boseman",
poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
backdrop:"https://image.tmdb.org/t/p/original/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
trailer:"https://www.youtube.com/embed/xjDjIWPwcPU",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"King protects Wakanda from enemies."
},

{
id:66,
title:"Avatar The Way of Water",
year:2022,
rating:7.7,
genre:"Sci-Fi",
industry:"Hollywood",
director:"James Cameron",
actors:"Sam Worthington",
poster:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
backdrop:"https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
trailer:"https://www.youtube.com/embed/d9MyW72ELq0",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Jake protects his family on Pandora."
},

{
id:67,
title:"KGF Chapter 1",
year:2018,
rating:8.2,
genre:"Action",
industry:"Indian",
director:"Prashanth Neel",
actors:"Yash",
poster:"https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
backdrop:"https://image.tmdb.org/t/p/original/kdG0s1i3L5F7G7zyBbs6k8ZZrPm.jpg",
trailer:"https://www.youtube.com/embed/-KfsY-qwBS0",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Rise of Rocky in KGF mines."
},

{
id:68,
title:"Pushpa The Rise",
year:2021,
rating:7.6,
genre:"Action",
industry:"Indian",
director:"Sukumar",
actors:"Allu Arjun",
poster:"https://image.tmdb.org/t/p/w500/6ziBFh7L9q3Xy9Jvxyh5qL8FLbT.jpg",
backdrop:"https://image.tmdb.org/t/p/original/1f7KxX5c1Zf9pYXn4SkU0ub6nO0.jpg",
trailer:"https://www.youtube.com/embed/Q1NKMPhP8PY",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Pushpa rises in sandalwood smuggling world."
},

{
id:69,
title:"Kantara",
year:2022,
rating:8.3,
genre:"Drama",
industry:"Indian",
director:"Rishab Shetty",
actors:"Rishab Shetty",
poster:"https://image.tmdb.org/t/p/w500/r4vRWwAqvLpx9TKnw8CaxXvS4uF.jpg",
backdrop:"https://image.tmdb.org/t/p/original/jkBzjZlV3mOrY5S0rGUNShUMHbS.jpg",
trailer:"https://www.youtube.com/embed/8mrVmf239GU",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A man defends his village traditions."
},

{
id:70,
title:"Drishyam",
year:2015,
rating:8.2,
genre:"Thriller",
industry:"Indian",
director:"Nishikant Kamat",
actors:"Ajay Devgn",
poster:"https://image.tmdb.org/t/p/w500/kBaEoFMiRrSG0Zonp2M4z9nEfxK.jpg",
backdrop:"https://image.tmdb.org/t/p/original/7w06baRS9VPm7P8s4cN6iYG3wxY.jpg",
trailer:"https://www.youtube.com/embed/AuuX2j14NBg",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A father protects his family with intelligence."
},

{
id:71,
title:"Weathering With You",
year:2019,
rating:7.5,
genre:"Anime",
industry:"Anime",
director:"Makoto Shinkai",
actors:"Kotaro Daigo",
poster:"https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
backdrop:"https://image.tmdb.org/t/p/original/aFJbNQqHQNd3VZ8S4iFZpFazTAp.jpg",
trailer:"https://www.youtube.com/embed/Q6iK6DjV_iE",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A boy meets a girl who controls weather."
},

{
id:72,
title:"Suzume",
year:2022,
rating:7.8,
genre:"Anime",
industry:"Anime",
director:"Makoto Shinkai",
actors:"Nanoka Hara",
poster:"https://image.tmdb.org/t/p/w500/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
backdrop:"https://image.tmdb.org/t/p/original/oZQxw5G6c29P6z5LZV6eEphMdyC.jpg",
trailer:"https://www.youtube.com/embed/5pTcio2hTSw",
platforms:[
{name:"Crunchyroll",link:"https://www.crunchyroll.com"}
],
description:"Girl travels to close disaster doors."
},

{
id:73,
title:"Train to Busan",
year:2016,
rating:7.6,
genre:"Thriller",
industry:"K-Drama",
director:"Yeon Sang-ho",
actors:"Gong Yoo",
poster:"https://image.tmdb.org/t/p/w500/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fVpFOcQyHJM2di9upgSIwWD5wac.jpg",
trailer:"https://www.youtube.com/embed/pyWuHv2-Abk",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Passengers fight zombies on a train."
},

{
id:74,
title:"Oldboy",
year:2003,
rating:8.4,
genre:"Thriller",
industry:"K-Drama",
director:"Park Chan-wook",
actors:"Choi Min-sik",
poster:"https://image.tmdb.org/t/p/w500/pWDtjs568ZfOT5I4vYzK9IkdEEs.jpg",
backdrop:"https://image.tmdb.org/t/p/original/jxkV8UQ9oLqzVZKkxzgv2Fne5DE.jpg",
trailer:"https://www.youtube.com/embed/2HkjrJ6IK5E",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A man seeks revenge after imprisonment."
},

{
id:75,
title:"The Social Network",
year:2010,
rating:7.8,
genre:"Drama",
industry:"Hollywood",
director:"David Fincher",
actors:"Jesse Eisenberg",
poster:"https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
backdrop:"https://image.tmdb.org/t/p/original/gVTo7X5a1eEHiQFzFGL6MZPdb1U.jpg",
trailer:"https://www.youtube.com/embed/lB95KLmpLR4",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Story behind Facebook creation."
},

{
id:76,
title:"Logan",
year:2017,
rating:8.1,
genre:"Action",
industry:"Hollywood",
director:"James Mangold",
actors:"Hugh Jackman",
poster:"https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
backdrop:"https://image.tmdb.org/t/p/original/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
trailer:"https://www.youtube.com/embed/Div0iP65aZo",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"Logan protects a young mutant girl."
},

{
id:77,
title:"Deadpool",
year:2016,
rating:8.0,
genre:"Action",
industry:"Hollywood",
director:"Tim Miller",
actors:"Ryan Reynolds",
poster:"https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
backdrop:"https://image.tmdb.org/t/p/original/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
trailer:"https://www.youtube.com/embed/Xithigfg7dA",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A mercenary gains superpowers."
},

{
id:78,
title:"Jujutsu Kaisen 0",
year:2021,
rating:7.8,
genre:"Anime",
industry:"Anime",
director:"Sunghoo Park",
actors:"Megumi Ogata",
poster:"https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
backdrop:"https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
trailer:"https://www.youtube.com/embed/UPRqnFnnrr8",
platforms:[
{name:"Crunchyroll",link:"https://www.crunchyroll.com"}
],
description:"A boy joins jujutsu sorcerers."
},


{
id:81,
title:"The Wolf of Wall Street",
year:2013,
rating:8.2,
genre:"Drama",
industry:"Hollywood",
director:"Martin Scorsese",
actors:"Leonardo DiCaprio, Jonah Hill",
poster:"https://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
backdrop:"https://image.tmdb.org/t/p/original/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg",
trailer:"https://www.youtube.com/embed/iszwuX1AK6A",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A stockbroker rises to wealth through corruption."
},





{
id:84,
title:"Django Unchained",
year:2012,
rating:8.4,
genre:"Drama",
industry:"Hollywood",
director:"Quentin Tarantino",
actors:"Jamie Foxx, Leonardo DiCaprio",
poster:"https://image.tmdb.org/t/p/w500/5WJnxuw41sddupf8cwOxYftuvJG.jpg",
backdrop:"https://image.tmdb.org/t/p/original/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
trailer:"https://www.youtube.com/embed/eUdM9vrCbow",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A freed slave rescues his wife."
},

{
id:85,
title:"1917",
year:2019,
rating:8.3,
genre:"War",
industry:"Hollywood",
director:"Sam Mendes",
actors:"George MacKay",
poster:"https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
backdrop:"https://image.tmdb.org/t/p/original/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
trailer:"https://www.youtube.com/embed/YqNYrYUiMfg",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Soldiers deliver a critical message."
},

{
id:86,
title:"The Revenant",
year:2015,
rating:8.0,
genre:"Adventure",
industry:"Hollywood",
director:"Alejandro González Iñárritu",
actors:"Leonardo DiCaprio",
poster:"https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg",
backdrop:"https://image.tmdb.org/t/p/original/8dXy4bJ7iJk1fT8ZfZc2I5gPq1V.jpg",
trailer:"https://www.youtube.com/embed/LoebZZ8K5N0",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A frontiersman survives the wilderness."
},

{
id:87,
title:"A Silent Voice",
year:2016,
rating:8.2,
genre:"Anime",
industry:"Anime",
director:"Naoko Yamada",
actors:"Miyu Irino",
poster:"https://image.tmdb.org/t/p/w500/drlyoSKzY2GJopHR9v0E3r5GgIu.jpg",
backdrop:"https://image.tmdb.org/t/p/original/5d3x4K2Q9QHNWfJzTtDkV6gKJc0.jpg",
trailer:"https://www.youtube.com/embed/nfK6UgLra7g",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A boy seeks redemption after bullying."
},




{
id:90,
title:"Memories of Murder",
year:2003,
rating:8.1,
genre:"Thriller",
industry:"K-Drama",
director:"Bong Joon-ho",
actors:"Song Kang-ho",
poster:"https://image.tmdb.org/t/p/w500/Ag7Yc62uLz0qO6iR4a5L8Hk3hUu.jpg",
backdrop:"https://image.tmdb.org/t/p/original/v0nM5q9W6Y0B4K7jHGhEqTG3OCB.jpg",
trailer:"https://www.youtube.com/embed/0n_HQwQU8ls",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Detectives hunt a serial killer."
},



{
id:93,
title:"PK",
year:2014,
rating:8.1,
genre:"Drama",
industry:"Indian",
director:"Rajkumar Hirani",
actors:"Aamir Khan",
poster:"https://image.tmdb.org/t/p/w500/dfcy7lI4beJpH7wTn0N3d4g6jIh.jpg",
backdrop:"https://image.tmdb.org/t/p/original/9JUEiK6N5Q8kXQ6JQ6hVn7q4YqP.jpg",
trailer:"https://www.youtube.com/embed/SOXWc32k4zA",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"An alien questions human beliefs."
},

{
id:94,
title:"Lagaan",
year:2001,
rating:8.1,
genre:"Drama",
industry:"Indian",
director:"Ashutosh Gowariker",
actors:"Aamir Khan",
poster:"https://image.tmdb.org/t/p/w500/6cZkZx6iH3zN8wHZ8rZBzjvBz9J.jpg",
backdrop:"https://image.tmdb.org/t/p/original/f0F1WQXjT3s5ZJ4WQm0k5M9WqzQ.jpg",
trailer:"https://www.youtube.com/embed/oSIGQ0YcZ7E",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Villagers play cricket against British rulers."
},

{
id:95,
title:"Zindagi Na Milegi Dobara",
year:2011,
rating:8.2,
genre:"Drama",
industry:"Indian",
director:"Zoya Akhtar",
actors:"Hrithik Roshan",
poster:"https://image.tmdb.org/t/p/w500/z5n4Kk0f9y0kR9pHk0kPq7hG3YF.jpg",
backdrop:"https://image.tmdb.org/t/p/original/g0fWQzKjYQ7XQj7kYQ9kX9YkQ.jpg",
trailer:"https://www.youtube.com/embed/FJrpcDgC3zU",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"Friends rediscover life on a road trip."
},

{
id:96,
title:"Vikram",
year:2022,
rating:8.3,
genre:"Action",
industry:"Indian",
director:"Lokesh Kanagaraj",
actors:"Kamal Haasan",
poster:"https://image.tmdb.org/t/p/w500/7c4Tz4TzYdQpZz4TzYdQpZz4TzY.jpg",
backdrop:"https://image.tmdb.org/t/p/original/kd9E6mKdf9O0uN7EzWLKQEiC5E.jpg",
trailer:"https://www.youtube.com/embed/OKBMCL-frPU",
platforms:[
{name:"Hotstar",link:"https://www.hotstar.com"}
],
description:"A special agent fights crime syndicates."
},

{
id:97,
title:"Master",
year:2021,
rating:7.4,
genre:"Action",
industry:"Indian",
director:"Lokesh Kanagaraj",
actors:"Vijay, Vijay Sethupathi",
poster:"https://image.tmdb.org/t/p/w500/1Yz2xW8sE4iigFsMghvYDn8ApX2.jpg",
backdrop:"https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
trailer:"https://www.youtube.com/embed/UTiXQcrLlv4",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A professor clashes with a gangster."
},

{
id:98,
title:"Leo",
year:2023,
rating:7.3,
genre:"Action",
industry:"Indian",
director:"Lokesh Kanagaraj",
actors:"Vijay",
poster:"https://image.tmdb.org/t/p/w500/8h4FZ7QG0x0pZzY6pZ0WgAvFp8Z.jpg",
backdrop:"https://image.tmdb.org/t/p/original/cz0tP7dXjHBOH4Zz2oxEd4pqco3.jpg",
trailer:"https://www.youtube.com/embed/Po3jStA673E",
platforms:[
{name:"Netflix",link:"https://www.netflix.com"}
],
description:"A man hides his violent past."
},

{
id:99,
title:"Jailer",
year:2023,
rating:7.6,
genre:"Action",
industry:"Indian",
director:"Nelson",
actors:"Rajinikanth",
poster:"https://image.tmdb.org/t/p/w500/jailerposter.jpg",
backdrop:"https://image.tmdb.org/t/p/original/jailerbackdrop.jpg",
trailer:"https://www.youtube.com/embed/Y5BeWdODPqo",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"A retired jailer hunts criminals."
},

{
id:100,
title:"Oppenheimer",
year:2023,
rating:8.4,
genre:"Drama",
industry:"Hollywood",
director:"Christopher Nolan",
actors:"Cillian Murphy",
poster:"https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
backdrop:"https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
trailer:"https://www.youtube.com/embed/uYPbbksJxIg",
platforms:[
{name:"Prime Video",link:"https://www.primevideo.com"}
],
description:"Story of atomic bomb creator."
}
];
//------------------------------------------------
// ROWS
//------------------------------------------------

export const rows = [

{
title:"Trending Now",
filter:(movie)=>movie.rating>=8.5
},

{
title:"Top Rated",
filter:(movie)=>movie.rating>=9
},

{
title:"Netflix",
filter:(movie)=>movie.platforms.some(p=>p.name==="Netflix")
},

{
title:"Prime Video",
filter:(movie)=>movie.platforms.some(p=>p.name==="Prime Video")
},

{
title:"Hotstar",
filter:(movie)=>movie.platforms.some(p=>p.name==="Hotstar")
},

{
title:"Anime",
filter:(movie)=>movie.industry==="Anime"
},

{
title:"Indian",
filter:(movie)=>movie.industry==="Indian"
},

{
title:"K-Drama",
filter:(movie)=>movie.industry==="K-Drama"
},

{
title:"Action Movies",
filter:(movie)=>movie.genre==="Action"
},

{
title:"Sci-Fi Movies",
filter:(movie)=>movie.genre==="Sci-Fi"
}

];
export const safeMovies = movies.map(movie => ({
  ...movie,
  poster: movie.poster || "https://via.placeholder.com/300x450",
  backdrop: movie.backdrop || "https://via.placeholder.com/1280x720",
  trailer: movie.trailer?.includes("embed")
    ? movie.trailer
    : "https://www.youtube.com/embed/dQw4w9WgXcQ"
}));