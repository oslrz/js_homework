function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

AddBttn.onclick = () => {
  let data = document.getElementById("newValue");
  data = data.value;
  if (data) {
    if(!addNewValue(data)){
        alert('Too much')
    }
  } else {
    alert("Empty String");
  }
};

function addNewValue(value) {
  let itemsLength = localStorage.length;
  console.log('length',itemsLength)
  if (itemsLength > 19) {
      return false
  } else {
    let key = getRndInteger(0, 100);
    localStorage.setItem(key, value);
    let Field = document.getElementById("MainField");
    Field.insertAdjacentHTML(
      "afterbegin",
      "<div class='Fields_item' id=" +
        key +
        "><div class='p_item'>" +
        value +
        "</div><button type='button' "+
        'onclick=Delete("' +
        key +
        '")' +" class='btn btn-danger'>Delete</button></div>"
    );
    return true
  }
}

(function Start() {
  console.log(localStorage);
  let Field = document.getElementById("MainField");
  for (let key in localStorage) {
    if (localStorage.getItem(key) !== null) {
      console.log(key, localStorage.getItem(key));
      Field.insertAdjacentHTML(
        "afterbegin",
        "<div class='Fields_item' id=" +
          key +
          "><div class='p_item'>" +
          localStorage.getItem(key) +
          "</div><button type='button' " +
          'onclick=Delete("' +
          key +
          '")' +
          " class='btn btn-danger'>Delete</button></div>"
      );
    }
  }
})();

function Delete(key) {
  console.log("key", key);
  localStorage.removeItem(key);
  let item = document.getElementById(key);
  item.remove();
}
