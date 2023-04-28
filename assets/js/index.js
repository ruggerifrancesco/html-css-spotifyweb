const myMenu = document.getElementById('js-event-nav-aside');

myMenu.onclick=e=>  // JS event delegation
  {
  if (e.target.tagName.toLowerCase() != 'a' ) return; // only
  e.preventDefault;
  let A = e.target.parentElement;

  if (!A.classList.contains('nav-active'))
    {
    myMenu.querySelector('a.nav-active').classList.remove('nav-active');
    }
  A.classList.add('nav-active');
  }