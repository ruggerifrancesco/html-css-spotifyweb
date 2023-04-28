const myMenu = document.getElementById('js-event-nav-aside');

myMenu.onclick=e=>  // JS event delegation
  {
  if (e.target.tagName.toLowerCase() != 'a' ) return; // only
  e.preventDefault;
  let LI = e.target.parentElement;

  if (!LI.classList.contains('nav-active'))
    {
    myMenu.querySelector('li.nav-active').classList.remove('nav-active');
    }
  LI.classList.add('nav-active');
  }