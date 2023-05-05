// Navigation Transitions
let navigation = function() {
  var scrollLastPosition = window.pageYOffset
  var scrollDirection = 'down'
  var scrollDirectionCounter = 0

  window.addEventListener('scroll', function(e) {
    animateOnScroll(window.pageYOffset)
    if (window.pageYOffset < 30) {
      document
        .getElementsByClassName('nav-bar')[0]
        .classList.remove('m-smaller')
      document
        .getElementById('navbarSupportedContent1')
        .classList.remove('m-smaller')
    } else {
      if (scrollLastPosition - window.pageYOffset > 0) {
        if (scrollDirection === 'up') {
          scrollDirectionCounter = scrollDirectionCounter + 1
        } else {
          scrollDirectionCounter = 0
        }
        scrollDirection = 'up'
      } else if (scrollLastPosition - window.pageYOffset <= 0) {
        if (scrollDirection === 'down') {
          scrollDirectionCounter = scrollDirectionCounter + 1
        } else {
          scrollDirectionCounter = 0
        }
        scrollDirection = 'down'
      }

      if (scrollDirectionCounter > 30 && scrollDirection === 'down') {
        document.getElementsByClassName('nav-bar')[0].classList.add('m-smaller')
        document
          .getElementsByClassName('get-started')[0]
          .classList.add('m-smaller')
        document
          .getElementById('navbarSupportedContent1')
          .classList.add('m-smaller')
      } else if (scrollDirectionCounter > 30 && scrollDirection === 'up') {
        document
          .getElementsByClassName('nav-bar')[0]
          .classList.remove('m-smaller')
        document
          .getElementsByClassName('get-started')[0]
          .classList.remove('m-smaller')
        document
          .getElementById('navbarSupportedContent1')
          .classList.remove('m-smaller')
      }
    }
    scrollLastPosition = window.pageYOffset
  })
  animateOnScroll(window.pageYOffset)
}

function openModal() {
  document.getElementsByClassName('modal-overlay')[0].scrollTo(0, 0)
  document.getElementsByClassName('modal-overlay')[0].style.display = 'block'
  document.getElementsByClassName(
    'register-modal register-form'
  )[0].style.display = 'block'
}

var clickEvents = function() {
  document.getElementById('logo-click').onclick = function(e) {
    window.scrollTo(0, 0)
  }
  document.getElementsByClassName('register-button')[0].onclick = function(e) {
    openModal()
  }
  document.getElementsByClassName('register-button')[1].onclick = function(e) {
    openModal()
  }

  document.getElementById('register-mobile').onclick = function(e) {
    document.getElementsByClassName('modal-overlay')[0].scrollTo(0, 0)
    document.getElementsByClassName('modal-overlay')[0].style.display = 'block'
    document.getElementsByClassName(
      'register-modal register-form'
    )[0].style.display = 'block'
  }
  document.getElementById('close-register').onclick = function() {
    document.getElementsByClassName('modal-overlay')[0].style.display = 'none'
  }
  document.getElementsByClassName('navbar-toggler')[0].onclick = function() {
    if (
      document
        .getElementById('navbarSupportedContent1')
        .classList.contains('show')
    ) {
      document
        .getElementById('navbarSupportedContent1')
        .classList.remove('show')
    } else {
      document.getElementById('navbarSupportedContent1').classList.add('show')
    }
  }
  var nav = document.getElementsByClassName('nav-item')
  for (var i = 0; i < nav.length; i++) {
    nav[i].addEventListener(
      'click',
      function() {
        document
          .getElementById('navbarSupportedContent1')
          .classList.remove('show')
      },
      false
    )
  }
}

var animate = function() {
  document
    .getElementsByClassName('banner-page-section')[0]
    .classList.remove('hidden')
  setTimeout(function() {
    var primaryButtons = document.getElementsByClassName('btn-primary')
    for (var item = 0; item < primaryButtons.length; item++) {
      primaryButtons[item].classList.remove('hidden')
    }
    document
      .getElementsByClassName('page-section-information-slider')[0]
      .classList.remove('hidden')
  }, 400)
}

var animateOnScroll = function(posX) {
  var elements = []
  elements = [].concat(
    elements,
    [].slice.call(document.getElementsByClassName('scroll-in-view-cycle'))
  )

  for (var item = 0; item < elements.length; item++) {
    if (elementInViewport(elements[item])) {
      elements[item].classList.remove('scroll-in-view-cycle')
    }
  }
  // if (elementInViewport(document.getElementById('double-screen'))) {
    // document.getElementById('double-screen').classList.remove('outside-screen')
  // }
  if (
    elementInViewport(
      document.getElementById('background-image-laptop-screen'),
      false
    )
  ) {
    const top =
      (document
        .getElementById('background-image-laptop-screen')
        .getBoundingClientRect().top +
        60) /
      16
    document.getElementById(
      'background-image-laptop-screen'
    ).style.backgroundPosition = 'center -' + top + 'px'
  }
}

var onResize = function(priceSlide, featureSlide) {
  window.onresize = function() {
    priceSlide.params.slidesPerView =
      window.innerWidth <= 1065 ? (window.innerWidth <= 700 ? 1 : 2) : 4
    priceSlide.params.autoHeight = window.innerWidth <= 1065
    priceSlide.params.calculateHeight = window.innerWidth <= 1065

    featureSlide.params.slidesPerView = window.innerWidth <= 1065 ? 1 : 'auto'
    featureSlide.params.autoHeight = window.innerWidth <= 1065
    featureSlide.params.calculateHeight = window.innerWidth <= 1065
  }
}

var createSliders = function() {
  // Features Slider
  // aboutFeature = new Swiper('.swiper-container.information-section', {
  //   calculateHeight: true,
  //   autoHeight: true,
  //   pagination: {
  //     clickable: true,
  //     el: '.swiper-pagination',
  //   },
  // })
  // aboutFeature.on('slideChange', function() {
  //   animateOnScroll(window.pageYOffset)
  // })

  // Feature Information Slider
  feature = new Swiper('.swiper-container-multi-view.feature-swiper', {
    slidesPerView: window.innerWidth <= 1065 ? 1 : 3,
    spaceBetween: 30,
    observer: true,
    centeredSlides: true,
    initialSlide: 1,
    // loop: true,
    centeredSlidesBounds: true,
    calculateHeight: window.innerWidth <= 1065,
    enabled: true,
    autoHeight: window.innerWidth <= 1065,
    navigation: {
      clickable: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // Price Information Slider
  price = new Swiper('.swiper-container-multi-view.pricing-swiper', {
    slidesPerView:
      window.innerWidth <= 1065 ? (window.innerWidth <= 700 ? 1 : 2) : 4,
    spaceBetween: '2%',
    centeredSlides: false,
    loop: false,
    calculateHeight: window.innerWidth <= 1065,
    autoHeight: window.innerWidth <= 1065,
    navigation: {
      clickable: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

var autocomplete
var selected = false,
  selectedPostal = false

function initAutocomplete() {
  // Create the address auto complete and check data
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    { types: ['geocode'] }
  )
  autocomplete.addListener('place_changed', fillInAddress(false))
  document.getElementById('autocomplete').addEventListener('blur', function(e) {
    if (!selected) {
      document.getElementById('autocomplete').value = ''
    }
  })
  document
    .getElementById('autocomplete')
    .addEventListener('focus', function(e) {
      selected = false
    })

  // // Create the postal address auto complete and check data
  // autocompletePostal = new google.maps.places.Autocomplete(document.getElementById('autocompletePostal'), {types: ['geocode']});
  // autocompletePostal.addListener('place_changed', fillInAddress(true));
  // document.getElementById('autocompletePostal').addEventListener('blur', function (e) {
  //     if (!selected) {
  //         document.getElementById('autocompletePostal').value = "";
  //     }
  geolocate // });
  // document.getElementById('autocompletePostal').addEventListener('focus', function (e) {
  //     selected = false;
  // });
}

function fillInAddress(isPostal) {
  return function() {
    if (!isPostal) {
      selected = true
    } else {
      selectedPostal = true
    }

    var place = autocomplete.getPlace()
    var streetNumber = place.address_components
      .filter((_) => _.types.indexOf('street_number') > -1)
      .head((_) => _.long_name)
    var street = place.address_components
      .filter((_) => _.types.indexOf('route') > -1)
      .head((_) => _.long_name)
    var city = place.address_components
      .filter((_) => _.types.indexOf('locality') > -1)
      .head((_) => _.long_name)
    var state = place.address_components
      .filter((_) => _.types.indexOf('administrative_area_level_1') > -1)
      .head((_) => _.long_name)
    var postal = place.address_components
      .filter((_) => _.types.indexOf('postal_code') > -1)
      .head((_) => _.long_name)
    var country = place.address_components
      .filter((_) => _.types.indexOf('country') > -1)
      .head((_) => _.long_name)

    document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_street'
    ).value = (streetNumber === null ? '' : streetNumber + ' ') + street
    document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_city'
    ).value = city
    document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_state'
    ).value = state
    document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_post_code'
    ).value = postal
    document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_country_id'
    ).value = country
    var select = document.getElementById(
      (isPostal ? 'postal_' : '') + 'address_country_id'
    )
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].text === country) {
        select.selectedIndex = i
        break
      }
    }
  }
}

function geolocateGeneric(autocompleteObject) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      })
      autocompleteObject.setBounds(circle.getBounds())
    })
  }
}

function geolocate() {
  geolocateGeneric(autocomplete)
}

// Generic functions
Array.prototype.head = function(internalObject) {
  if (this.length > 0) {
    if (typeof internalObject !== 'undefined' && internalObject !== null) {
      var item = internalObject(this[0])
      if (typeof item === 'undefined') {
        return this[0]
      } else {
        return item
      }
    } else {
      return this[0]
    }
  } else {
    return null
  }
}

function elementInViewport(el, extra) {
  var top = el.offsetTop
  var left = el.offsetLeft
  var width = el.offsetWidth
  var height = el.offsetHeight
  while (el.offsetParent) {
    el = el.offsetParent
    top += el.offsetTop
    left += el.offsetLeft
  }
  return (
    top < window.pageYOffset + window.innerHeight - (extra ? -300 : 100) &&
    top + height > window.pageYOffset
  )
}

// Initial Functions
var feature = null,
  price = null
window.onload = function() {
  createSliders()
  onResize(feature, price)
  navigation()
  clickEvents()
  animate()
  loadYouTubeVideo()
}

const handleOpenYouTubeModalButtonClick = (event, buttonId, playerId) => {
  const watchButton = document.getElementById(buttonId)
  const getStartedButton = document.getElementById('get-started-button')
  watchButton.style.opacity = '1'
  getStartedButton.style.opacity = '1'
  const videoModal = document.getElementById('video-modal-overlay')
  const video = event.target
  watchButton.onclick = function() {
    document.getElementById(playerId).style.display = 'flex'
    videoModal.scrollTo(0, 0)
    videoModal.style.display = 'flex'
    video.playVideo()
  }
  videoModal.addEventListener('click', function() {
    document.getElementById(playerId).style.display = 'none'
    video.stopVideo()
    videoModal.style.display = 'none'
  })
}

const loadYouTubeVideo = function() {
  const height = '480'
  const width = '720'

  const DEMO_PLAYER = 'demo-player'
  const demoPlayer = new YT.Player(DEMO_PLAYER, {
    height,
    width,
    videoId: 'pL2qzV_5WxQ',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'watch-demo-button',
          DEMO_PLAYER
        )
      },
    },
  })

  const LOCATIONS_PLAYER = 'locations-player'
  const locationsPlayer = new YT.Player(LOCATIONS_PLAYER, {
    height,
    width,
    videoId: 'Sz944BLijCE',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'locations-demo-button',
          LOCATIONS_PLAYER
        )
      },
    },
  })

  const SUPPLIERS_PLAYER = 'suppliers-player'
  const suppliersPlayer = new YT.Player(SUPPLIERS_PLAYER, {
    height,
    width,
    videoId: '73wGlr1FS9c',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'suppliers-demo-button',
          SUPPLIERS_PLAYER
        )
      },
    },
  })

  const CREW_CAST_PLAYER = 'crew-cast-player'
  const crewCastPlayer = new YT.Player(CREW_CAST_PLAYER, {
    height,
    width,
    videoId: 'sEYanB0QRz8',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'crew-cast-demo-button',
          CREW_CAST_PLAYER
        )
      },
    },
  })

  const APP_USER_PLAYER = 'app-user-player'
  const appUserPlayer = new YT.Player(APP_USER_PLAYER, {
    height,
    width,
    videoId: '6Qq6qOiJcpY',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'app-user-demo-button',
          APP_USER_PLAYER
        )
      },
    },
  })

  const CALLSHEET_PLAYER = 'callsheet-player'
  const callsheetPlayer = new YT.Player(CALLSHEET_PLAYER, {
    height,
    width,
    videoId: 'JEznUhzj_aI',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'callsheet-demo-button',
          CALLSHEET_PLAYER
        )
      },
    },
  })

  const TIME_LOGS_PLAYER = 'time-logs-player'
  const timeLogsPlayer = new YT.Player(TIME_LOGS_PLAYER, {
    height,
    width,
    videoId: 'IWb2hYaJVMs',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'time-logs-demo-button',
          TIME_LOGS_PLAYER
        )
      },
    },
  })

  const PRODUCTION_BOOKLET_PLAYER = 'production-booklet-player'
  const productionBookletPlayer = new YT.Player(PRODUCTION_BOOKLET_PLAYER, {
    height,
    width,
    videoId: 'ZnMZhQu0lMU',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'production-booklet-demo-button',
          PRODUCTION_BOOKLET_PLAYER
        )
      },
    },
  })

  const PRODUCTION_SCHEDULES_PLAYER = 'production-schedules-player'
  const productionSchedulesPLayer = new YT.Player(PRODUCTION_SCHEDULES_PLAYER, {
    height,
    width,
    videoId: 'P8hFkmhC0SY',
    events: {
      onReady: function(event) {
        handleOpenYouTubeModalButtonClick(
          event,
          'production-schedules-demo-button',
          PRODUCTION_SCHEDULES_PLAYER
        )
      },
    },
  })
}
