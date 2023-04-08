function preloader () {
  const preloaderHTML = document.querySelector('.preloader')

  window.addEventListener('load', () => {
    preloaderHTML.style.display = 'none'
  })
}

function darkMode () {
  const navbarIconMoonHTML = document.querySelector('.navbar__icon-moon')
  const navbarIconSunHTML = document.querySelector('.navbar__icon-sun')
  const moonIconHTML = document.querySelector('.bx-moon')
  const sunIconHTML = document.querySelector('.bxs-sun')
  const bodyHTML = document.querySelector('body')

  moonIconHTML.addEventListener('click', function () {
    bodyHTML.classList.toggle('dark-theme')
    navbarIconMoonHTML.classList.toggle('logo__darkmode')
    navbarIconSunHTML.classList.toggle('logo__darkmode')

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('dark-mode', 'true')
    } else {
      localStorage.setItem('dark-mode', 'false')
    }
  })

  sunIconHTML.addEventListener('click', function () {
    bodyHTML.classList.toggle('dark-theme')
    navbarIconMoonHTML.classList.toggle('logo__darkmode')
    navbarIconSunHTML.classList.toggle('logo__darkmode')

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('dark-mode', 'true')
    } else {
      localStorage.setItem('dark-mode', 'false')
    }
  })
}

function saveDarkMode () {
  const bodyHTML = document.querySelector('body')
  const navbarIconMoonHTML = document.querySelector('.navbar__icon-moon')
  const navbarIconSunHTML = document.querySelector('.navbar__icon-sun')

  if (localStorage.getItem('dark-mode') === 'true') {
    bodyHTML.classList.add('dark-theme')
    navbarIconMoonHTML.classList.add('logo__darkmode')
    navbarIconSunHTML.classList.remove('logo__darkmode')
  } else {
    bodyHTML.classList.remove('dark-theme')
    navbarIconMoonHTML.classList.remove('logo__darkmode')
    navbarIconSunHTML.classList.add('logo__darkmode')
  }
}

function main () {
  preloader()
  darkMode()
  saveDarkMode()
}

main()
