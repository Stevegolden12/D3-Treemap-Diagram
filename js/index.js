// Queue up datasets using d3 Queue
d3.queue()
  .defer(d3.json, "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json") //Kickstarters info
  .defer(d3.json, "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json") //Movie info
  .defer(d3.json, "https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json") //Video game info
  .await(ready);

// Ready Function, runs when data is loaded
function ready(error, kick, movie, game) {
  if (error) throw error;

  console.log(kick);
  console.log(movie);
  console.log(game);

}