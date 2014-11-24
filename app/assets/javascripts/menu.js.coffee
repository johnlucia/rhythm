$ ->
  $('.menu-toggle').click( (event) ->
    $('nav.menu').slideToggle().toggleClass('menu-open')
    event.stopPropagation();
  )

  $('html').click( ->
    $('nav.menu').slideUp().removeClass('menu-open')
  )

  $('nav.menu').click((event) ->
    event.stopPropagation();
  )