// Script random image and sculpture generation
function ArtPiece(image, name, artist, price) {
    this.image = image;
    this.name = name;
    this.artist = artist;
    this.desc;
    this.price = price;
}

var painters = new Array();
painters[0] = 'Leonardo Da Vinci';
painters[1] = 'Pablo Picasso';
painters[2] = 'Salvador Dali';
painters[3] = 'Vincent Van Gogh';

var sculptures = new Array();
sculptures[0] = 'Aguste Rodin';
sculptures[1] = 'Donatello';
sculptures[2] = 'Henry Moore';
sculptures[3] = 'Michelangelo';

//--------------------------Painters-------------------------------

// Leonardo Da Vinci
var leo1 = new ArtPiece('img/paintings/leanardo-da-vinci/mona-lisa.png', 'Mona Lisa', painters[0], '500$');
var leo2 = new ArtPiece('img/paintings/leanardo-da-vinci/last-supper.jpg', 'Last Supper', painters[0], '100$');
var leo3 = new ArtPiece('img/paintings/leanardo-da-vinci/lady-with-an-ermine.png', 'Lady With an Ermine', painters[0], '200$');
var leo4 = new ArtPiece('img/paintings/leanardo-da-vinci/salvator-mundi.png', 'Salvator Mundi', painters[0], '95$');

// Pablo Picasso
var pic1 = new ArtPiece('img/paintings/pablo-picasso/family-of-saltimbanques.jpg', 'Family of Saltimbanques', painters[1], '200$');
var pic2 = new ArtPiece('img/paintings/pablo-picasso/portrait-of-gertrude-stein.png', 'Portrait of Gertrude Stein', painters[1], '300$');
var pic3 = new ArtPiece('img/paintings/pablo-picasso/the-old-guitarist.png', 'The Old Guitarist', painters[1], '100$');
var pic4 = new ArtPiece('img/paintings/pablo-picasso/the-weeping-woman.png', 'The Weeping Woman', painters[1], '400$');

// Salvador Dali
var dali1 = new ArtPiece('img/paintings/salvador-dali/melting-watch.png', 'Melting Watch', painters[2], '300$');
var dali2 = new ArtPiece('img/paintings/salvador-dali/reflecting-elephants.png', 'Reflecting Animals', painters[2], '250$');
var dali3 = new ArtPiece('img/paintings/salvador-dali/the-burning-giraffe.png', 'The Burning Giraffe', painters[2], '95$');
var dali4 = new ArtPiece('img/paintings/salvador-dali/the-persistence-of-memory.jpg', 'The Persistence of Memory', painters[2], '200$');

// Vincent Van Gogh
var van1 = new ArtPiece('img/paintings/vincent-van-gogh/cafe-terrace-at-night.png', 'Caffe Terrace at Night', painters[3], '200$');
var van2 = new ArtPiece('img/paintings/vincent-van-gogh/self-portrait.png', 'Self Portrait', painters[3], '100$');
var van3 = new ArtPiece('img/paintings/vincent-van-gogh/starry-night.png', 'Starry Night', painters[3], '350$');
var van4 = new ArtPiece('img/paintings/vincent-van-gogh/wheatfield-with-crows.png', 'Wheatfield With Crows', painters[3], '110$');

//----------------------------------Sculptures---------------------------------

// Aguste Rodin
var aug1 = new ArtPiece('img/sculptures/auguste-rodin/man-with-broken-nose.png', 'Man With Broken Nose', sculptures[0], '100$');
var aug2 = new ArtPiece('img/sculptures/auguste-rodin/the-burghers-of-calais.png', 'The Burghers of Calais', sculptures[0], '120$');
var aug3 = new ArtPiece('img/sculptures/auguste-rodin/the-cathedral.png', 'The Cathedral', sculptures[0], '200$');
var aug4 = new ArtPiece('img/sculptures/auguste-rodin/the-thinker.png', 'The Thinker', sculptures[0], '300$');

// Donatello
var don1 = new ArtPiece('img/sculptures/donatello/equestrian-statue-of-gattamelata.png', 'Equestrian Statue of Gattamelata', sculptures[1], '220$');
var don2 = new ArtPiece('img/sculptures/donatello/john-the-evangelist.png', 'John the Evangelist', sculptures[1], '120$');
var don3 = new ArtPiece('img/sculptures/donatello/saint-mark.png', 'Saint Mark', sculptures[1], '110$');
var don4 = new ArtPiece('img/sculptures/donatello/zuccone.png', 'Zuccone', sculptures[1], '540$');

// Henry Moore
var hen1 = new ArtPiece('img/sculptures/henry-moore/nuclear-energy.png', 'Nuclear Energy', sculptures[2], '300$');
var hen2 = new ArtPiece('img/sculptures/henry-moore/seated-woman.png', 'Seated Woman', sculptures[2], '200$');
var hen3 = new ArtPiece('img/sculptures/henry-moore/three-standing-figures.png', 'Three Standing Figure', sculptures[2], '100$');
var hen4 = new ArtPiece('img/sculptures/henry-moore/two-piece-reclining-figure-points.png', 'Two Piece Reclining Figure Points', sculptures[2], '500$');

// Michelangelo
var mic1 = new ArtPiece('img/sculptures/michelangelo/david.png', 'David', sculptures[3], '200$');
var mic2 = new ArtPiece('img/sculptures/michelangelo/madonna-of-bruges.png', 'Modanno of Bruges', sculptures[3], '100$');
var mic3 = new ArtPiece('img/sculptures/michelangelo/moses.png', 'Moses', sculptures[3], '400$');
var mic4 = new ArtPiece('img/sculptures/michelangelo/pieta.png', 'Pieta', sculptures[3], '100$');

var randomArtPieceArray = new Array();

randomArtPieceArray.push(leo1); randomArtPieceArray.push(leo2); randomArtPieceArray.push(leo3); randomArtPieceArray.push(leo4);
randomArtPieceArray.push(pic1); randomArtPieceArray.push(pic2); randomArtPieceArray.push(pic3); randomArtPieceArray.push(pic4);
randomArtPieceArray.push(dali1); randomArtPieceArray.push(dali2); randomArtPieceArray.push(dali3); randomArtPieceArray.push(dali4);
randomArtPieceArray.push(van1); randomArtPieceArray.push(van2); randomArtPieceArray.push(van3); randomArtPieceArray.push(van4);

randomArtPieceArray.push(aug1); randomArtPieceArray.push(aug2); randomArtPieceArray.push(aug3); randomArtPieceArray.push(aug4);
randomArtPieceArray.push(don1); randomArtPieceArray.push(don2); randomArtPieceArray.push(don3); randomArtPieceArray.push(don4);
randomArtPieceArray.push(hen1); randomArtPieceArray.push(hen2); randomArtPieceArray.push(hen3); randomArtPieceArray.push(hen4);
randomArtPieceArray.push(mic1); randomArtPieceArray.push(mic2); randomArtPieceArray.push(mic3); randomArtPieceArray.push(mic4);

console.log(randomArtPieceArray);

var mainPageArtPieceArray = new Array();


function getRandom(array) {
    return array[Math.floor((Math.random()*array.length))];
}

for (i=0; i<9; i++) {
    mainPageArtPieceArray.push(getRandom(randomArtPieceArray));
}

console.log(mainPageArtPieceArray);

// Direk koddan yaratılan resim
document.getElementById('gallery').innerHTML = "<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[0].image+"'>"+
"<img src='"+mainPageArtPieceArray[0].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[0].name+"<br>"+
"Artist: "+mainPageArtPieceArray[0].artist+"<div class='price'>Price: "+mainPageArtPieceArray[0].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[1].image+"'>"+
"<img src='"+mainPageArtPieceArray[1].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[1].name+"<br>"+
"Artist: "+mainPageArtPieceArray[1].artist+"<div class='price'>Price: "+mainPageArtPieceArray[1].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[2].image+"'>"+
"<img src='"+mainPageArtPieceArray[2].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[2].name+"<br>"+
"Artist: "+mainPageArtPieceArray[2].artist+"<div class='price'>Price: "+mainPageArtPieceArray[2].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[3].image+"'>"+
"<img src='"+mainPageArtPieceArray[3].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[3].name+"<br>"+
"Artist: "+mainPageArtPieceArray[3].artist+"<div class='price'>Price: "+mainPageArtPieceArray[3].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[4].image+"'>"+
"<img src='"+mainPageArtPieceArray[4].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[4].name+"<br>"+
"Artist: "+mainPageArtPieceArray[4].artist+"<div class='price'>Price: "+mainPageArtPieceArray[4].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[5].image+"'>"+
"<img src='"+mainPageArtPieceArray[5].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[5].name+"<br>"+
"Artist: "+mainPageArtPieceArray[5].artist+"<div class='price'>Price: "+mainPageArtPieceArray[5].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[6].image+"'>"+
"<img src='"+mainPageArtPieceArray[6].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[6].name+"<br>"+
"Artist: "+mainPageArtPieceArray[6].artist+"<div class='price'>Price: "+mainPageArtPieceArray[6].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>"
+
"<div class='gallery'><a target='_blank' href='"+mainPageArtPieceArray[7].image+"'>"+
"<img src='"+mainPageArtPieceArray[7].image+"' width='300' height='200'></a>"+"<div class='desc'>Art Piece: "+mainPageArtPieceArray[7].name+"<br>"+
"Artist: "+mainPageArtPieceArray[7].artist+"<div class='price'>Price: "+mainPageArtPieceArray[7].price+"</div><a href='sign.html'><button class='buy'>Buy</button></a>"+
"</div></div>";