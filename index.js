document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // create a list of pending moves
  let moves = []

  // ADD CODE HERE!

  //create listeners for directional button presses, add Li's for text display, add move to move list
  document.addEventListener("keydown", function(event){
    event.preventDefault()
    if (event.which === 37){
      moves.push('left')
      var taskDescription = "Move Left!"
      var node = document.createElement("LI");
      var textnode = document.createTextNode(taskDescription);
      node.appendChild(textnode);
      document.getElementById("moves-container").appendChild(node);
    }
    else if (event.which === 39){
      moves.push('right')
      var taskDescription = "Move Right!"
      var node = document.createElement("LI");
      var textnode = document.createTextNode(taskDescription);
      node.appendChild(textnode);
      document.getElementById("moves-container").appendChild(node);
    }
    else if (event.which === 38){
      moves.push('up')
      var taskDescription = "Move Up!"
      var node = document.createElement("LI");
      var textnode = document.createTextNode(taskDescription);
      node.appendChild(textnode);
      document.getElementById("moves-container").appendChild(node);
    }
    else if (event.which === 40){
      moves.push('down')
      var taskDescription = "Move Down!"
      var node = document.createElement("LI");
      var textnode = document.createTextNode(taskDescription);
      node.appendChild(textnode);
      document.getElementById("moves-container").appendChild(node);
    }
    else if (event.which === 8){
      moves.pop()
      document.getElementById("moves-container").lastElementChild.remove()
    }
  })

  //locate move button, execute list of moves when clicked 
  const moveButton = document.querySelector("#move-button")
  moveButton.addEventListener("click", function(event){
    const direction = moves.shift()
    if (direction){
      move(direction)
      const movesList = document.getElementById("moves-container")
      movesList.firstElementChild.remove()
    }
  })
})
