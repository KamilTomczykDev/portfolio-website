import SYSTEMIX_IMG from "../assets/systemix.jpeg";
import DRAWORATTACK_IMG from "../assets/draw-or-attack.png";

export const projects = [
  {
    name: "Systemix.com.pl",
    img: SYSTEMIX_IMG,
    liveDemoUrl: "https://systemix.com.pl",
    codeUrl: "https://github.com/KamilTomczykDev/systemix.com.pl",
    url: "systemix",
    description:
      "Systemix is a company I used to work in. I once mentioned about my coding journey and I got my first client. Systemix.com.pl is a very simple project that I did in my first months of programming. This website was created to mainly practice html and css",
    used: ["HTML", "CSS", "JavaScript", "NPM"],
  },
  {
    name: "Draw or Attack",
    img: DRAWORATTACK_IMG,
    liveDemoUrl: "https://fastidious-cocada-daa60a.netlify.app",
    codeUrl: "https://github.com/KamilTomczykDev/drawOrAttack",
    url: "draworattack",
    description:
      "Browser web game inspired by 'Heartstone'. Goal of the game is to defeat an enemy with a deck of cards. Every round is different because starting 'hand' is always different. In this project I wanted to show my abilities of Javascript web development.",
    used: ["HTML", "CSS", "JavaScript", "NPM", "MVC"],
  },
];
