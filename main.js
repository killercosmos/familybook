var memebers = [
"Paramjit Singh(Father)",
"Aarti Sihra(Mother)",
"Preesha Singh(Big Sister)",
"Jairaj Singh(Big brother)"
];
var photos = [
    "download.jpg",
    "mummy.png",
    "sister.png",
    "brother.jpg"
];

var i=0;  
function nextmember()
{
      document.getElementById("name1").innerHTML=memebers[i];
      document.getElementById("img1").src=photos[i];
      i++;
}
