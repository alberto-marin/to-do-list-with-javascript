document.addEventListener('DOMContentLoaded',function(){
  // https://github.com/gionkunz/chartist-js/issues/85
  var todolist = document.getElementById('todolist');

  var elements = todolist.querySelectorAll('li');
  var inputs = todolist.querySelectorAll('input');

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', editElement);
    inputs[i].addEventListener('blur', updateElement);
    inputs[i].addEventListener('keypress', elementKeyPress);
  }

  function editElement() {
    this.className = 'edit';
    var input = this.querySelector('input');
    input.focus();
    input.setSelectionRange(0, input.value.length);
  }
  /* Update the element only when Enter is press */
  function updateElement(event) {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = 'list-group-item';
  }

  function elementKeyPress(event) {
    if (event.which === 13) {
      updateElement.call(this);
    }
  }


});
