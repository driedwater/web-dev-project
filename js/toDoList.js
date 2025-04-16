// Create a "close" button and append it to each list item
var ul = document.getElementById('myUL');
displayItems()

// Create a new list item when clicking on the "Add" button

function newElement() {
  var button = document.createElement("button")
  var input = document.getElementById('myInput');
  if (input.value == '') {
    alert('Write something!')
  } else {
    ul.innerHTML += '<li class="w3-display-container">' + input.value + '<button class="w3-right w3-btn w3-small" onclick="removeItem(this)" type="button">x</button>' +'</li>';
    storeItems()
    input.value = "";
  }
}

function storeItems() {
  localStorage.myitems = ul.innerHTML;
}

function displayItems() {
  var storedValues = localStorage.myitems;
  if (!storedValues) {
    ul.innerHTML = ' ';
  } else {
    ul.innerHTML = storedValues;
  }
}

function removeItem(e) {
  e.parentElement.remove();
  localStorage.setItem('myitems', ul.innerHTML)
}

function clearList() {
  ul.innerHTML = '';
  localStorage.clear();
}