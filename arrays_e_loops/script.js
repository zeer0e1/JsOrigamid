var videoGames = ["Switch", "PS4", "XBOX"];

for (let i = 0; i < 10; i++) {
  console.log(i);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

function iniciaOloop() {
  for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === "PS4") {
      break;
    }
  }
}

videoGames.forEach(function (item) {
  console.log(item);
});
