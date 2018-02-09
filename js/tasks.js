var newItem = '<div class="task-line"><div class="check-box"><svg height="28" width="28"><circle cx="14" cy="14" r="10" stroke="#979797" fill="none" stroke-width="3" /></svg></div><input type="text" class="task" placeholder="Write a task..." onkeydown="enterHandler(event)">';


function enterHandler(e){
  var keycode = e.charCode || e.keyCode;
  if (keycode  == 13) { //Enter key's
    $(".task-list").append(newItem);
    e.preventDefault();
    e.target.parentElement.nextElementSibling.childNodes[1].focus();
  }
  if(keycode == 38){
      e.target.parentElement.previousElementSibling.childNodes[1].focus();
      e.preventDefault();
  }
  if(keycode == 40){
      e.target.parentElement.nextElementSibling.childNodes[1].focus();
      e.preventDefault();
  }
}
