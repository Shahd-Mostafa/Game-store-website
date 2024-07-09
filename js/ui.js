export class webUI {
  displayGamesInfo(info) {
    let storage = ``;
    for (var i = 0; i < info.length; i++) {
      storage += `<div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card bg-transparent h-100" data-id="${info[i].id}">
                <div class="card-body">
                  <div class="position-relative">
                                    <img
                  src="${info[i].thumbnail}"
                  class="card-img-top h-100 object-fit-cover"
                  alt="game thumbnail"
                  />
                  </div>
                  <div
                    class="image-caption d-flex justify-content-between align-items-center pt-3"
                  >
                    <h3 class="h6 text-capitalize text-white small">${
                      info[i].title
                    }</h3>
                    <span class="bg-primary badge p-2">Free</span>
                  </div>
                  <p class="card-text text-center small opacity-50 text-white">
                  ${info[i].short_description.split(" ", 8)}
                  </p>
                </div>
                <div
                  class="card-footer text-body-secondary d-flex justify-content-between align-items-center"
                >
                  <span class="badge small text-capitalize">${
                    info[i].genre
                  }</span>
                  <span class="badge small text-capitalize">${
                    info[i].platform
                  }</span>
                </div>
              </div>
            </div>`;
    }
    document.getElementById("gameInfo").innerHTML = storage;
  }
  displayGamesDetails(details) {
    let storage = `<div class="col-md-4">
              <div>
                <img
                  src="${details.thumbnail}"
                  alt="game thumbnail"
                  class="w-100"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="game-info text-white">
                <h3>
                  Title:
                  <span>${details.title}</span>
                </h3>
                <p>
                  Category:
                  <span class="badge bg-info text-black"
                    >${details.genre}</span
                  >
                </p>
                <p>
                  Platform:
                  <span class="badge bg-info text-black"
                    >${details.platform}</span
                  >
                </p>
                <p>
                  Status:
                  <span class="badge bg-info text-black"
                    >${details.status}</span
                  >
                </p>
                <div class="caption" id="gameCaption">
                  <p class="small">
                  ${details.description}
                  </p>
                </div>
                <a
                  class="btn btn-outline-warning text-white"
                  href="${details.game_url}"
                  target="_blank"
                >
                  Show Game
                </a>
              </div>
            </div>`;
    document.getElementById("gameDetails").innerHTML = storage;
  }
}
