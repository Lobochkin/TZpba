'use strict';

(function () {
  var popupUser = document.querySelector('.layout__user');
  var exit = document.querySelector('.popup-user__item--exit');
  var layoutPopup = document.querySelector('.layout__popup');
  var softs = document.querySelectorAll('.layout__el');

  popupUser.addEventListener('click', function() {
    if (layoutPopup.classList.contains('layout__popup--off')) {
      layoutPopup.classList.remove('layout__popup--off');
    } else {
      layoutPopup.classList.add('layout__popup--off');
    }
  });

  exit.addEventListener('click', function() {
    layoutPopup.classList.add('layout__popup--off');
    event.stopPropagation();
  });


  softs.forEach(function(item) {
    item.addEventListener('mouseover', createDiscript);
  });

  softs.forEach(function(item) {
    item.addEventListener('mouseout', removeDiscript);
  });

  function createDiscript(evt) {
    if(!evt.currentTarget.children[1]) {
      var discript = document.createElement('div');
      discript.className = 'discript';
      discript.innerHTML = evt.currentTarget.children[0].name;
      discript.style.left = '50px';
      discript.style.top = '0px';
      evt.currentTarget.appendChild(discript);
    }
  }

  function removeDiscript(evt) {
    var tooltips = document.querySelectorAll('.discript');
    if(evt.currentTarget.children[1]) {
      evt.currentTarget.children[1].remove();
    }
  }

}
)();
