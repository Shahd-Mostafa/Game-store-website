import { webUI } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    this.getGame("mmorpg");
    const navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", (e) => {
        document.querySelector(".navigation").classList.remove("sticky-top");
        document.querySelector(".nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.getGame(e.target.dataset.category);
      });
    }
    this.ui = new webUI();
  }
  async getGame(gameCategory) {
    document.querySelector(".loader-screen").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8275d23750msh28164f998bd3533p130becjsn461e21c0641f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.displayGamesInfo(result);
      const cards = document.querySelectorAll(".card");
      for (let k = 0; k < cards.length; k++) {
        cards[k].addEventListener("click", () => {
          const detail = new Details(cards[k].dataset.id);
          document.querySelector(".website-header").classList.add("d-none");
          document.querySelector(".navigation").classList.remove("sticky-top");
          document.querySelector(".navigation").classList.add("d-none");
          document.querySelector(".games").classList.add("d-none");
          document.querySelector(".details").classList.remove("d-none");
        });
      }
      document.querySelector(".loader-screen").classList.add("d-none");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
