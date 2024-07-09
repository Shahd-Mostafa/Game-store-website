import { webUI } from "./ui.js";
export class Details {
  constructor(gameID) {
    this.ui = new webUI();
    document.getElementById("closeBtn").addEventListener("click", function () {
      document.querySelector(".website-header").classList.remove("d-none");
      document.querySelector(".navigation").classList.remove("d-none");
      document.querySelector(".navigation").classList.add("sticky-top");
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.gameDetails(gameID);
  }
  async gameDetails(gameID) {
    document.querySelector(".loader-screen").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8275d23750msh28164f998bd3533p130becjsn461e21c0641f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.ui.displayGamesDetails(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      document.querySelector(".loader-screen").classList.add("d-none");
    }
  }
}
