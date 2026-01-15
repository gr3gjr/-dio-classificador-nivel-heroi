const heroes = [
  { name: "Herói 1", xp: 950 },
  { name: "Herói 2", xp: 1800 },
  { name: "Herói 3", xp: 4200 },
  { name: "Herói 4", xp: 6700 },
  { name: "Herói 5", xp: 8200 },
  { name: "Herói 6", xp: 9800 },
  { name: "ThHerói 7", xp: 10500 }
];

for (let i = 0; i < heroes.length; i++) {
  const hero = heroes[i];
  let level = "";

  if (hero.xp < 1000) {
    level = "Ferro";
  } else if (hero.xp >= 1001 && hero.xp <= 2000) {
    level = "Bronze";
  } else if (hero.xp >= 2001 && hero.xp <= 5000) {
    level = "Prata";
  } else if (hero.xp >= 5001 && hero.xp <= 7000) {
    level = "Ouro";
  } else if (hero.xp >= 7001 && hero.xp <= 8000) {
    level = "Platina";
  } else if (hero.xp >= 8001 && hero.xp <= 9000) {
    level = "Ascendente";
  } else if (hero.xp >= 9001 && hero.xp <= 10000) {
    level = "Imortal";
  } else {
    level = "Radiante";
  }

  console.log(`O Herói de nome ${hero.name} está no nível de ${level}`);
}