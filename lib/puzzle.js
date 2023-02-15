// hint logic
const button = document.querySelector("#show-hint")
const hint = document.querySelector(".hint");
button.addEventListener("click", () => {
  hint.classList.toggle("active");
})


// _______________________________________________________________________


const onTileClick = (e) => {
  if (canMove(e.currentTarget)) {

    // 5. swap tile & empty space
    moveTile(e.currentTarget);
  }
};

const canMove = (tile) => {
  // 4. if it has an empty neighbour
  const empty = document.querySelector(".empty");
  const emptyX = empty.cellIndex;
  const emptyY = empty.parentElement.rowIndex;
  const clickedX = tile.cellIndex;
  const clickedY = tile.parentElement.rowIndex;
  // in other words: one coordinate matches, the other is one off
  // return  emptyX === clickedX && emptyY === clickedY + 1 ||
  //         emptyX === clickedX && emptyY === clickedY - 1 ||
  //         emptyX === clickedX + 1 && emptyY === clickedY ||
  //         emptyX === clickedX - 1 && emptyY === clickedY;
  return Math.abs(clickedX - emptyX) + Math.abs(clickedY - emptyY) === 1;
};

const moveTile = (tile) => {
  const empty = document.querySelector(".empty");
  // switch class empty
  tile.classList.add("empty");
  empty.classList.remove("empty");
  // switch inner text
  empty.innerText = tile.innerText;
  tile.innerText = "";

  // check if game is done
  if (gameWon()) alert("Nicely done!");
};

const gameWon = () => {
  const tiles = document.querySelectorAll("td");
  return (
    Array.from(tiles)
      .map((el) => el.innerText)
      .join(",") === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"
  );
};

// TODO:
// 1. Select all tiles
const tiles = document.querySelectorAll("td");

// 2. for each tile
tiles.forEach((tile) => {
  // 3. listen to click event
  tile.addEventListener("click", onTileClick)
});
