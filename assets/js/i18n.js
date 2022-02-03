window.addEventListener('load', function () {
  $('#year').text(new Date().getFullYear() || '');

  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  let locale = params.get('lang') || 'fr';
  if (locale && locale === 'fr') {
    i18n(locale);
    return closeOverlay();
  }

  if (locale && locale !== 'en') {
    locale = 'en';
  }

  i18n(locale);

  axios.get(`/locales/${locale}.json`)
    .then(function (response) {
      if (response && response.status !== 200) {
        return console.error('Failed to get ezPAARSE translation');
      }

      let translations = response.data;
      translations.locale = locale;

      let i18nTags = document.querySelectorAll('[data-i18n]');
      if (i18nTags) {
        i18nTags.forEach(function (tag) {
          if (!tag.dataset.i18nAttr) {
            tag.innerHTML = translations[tag.dataset.i18n];
          }

          if (tag.dataset.i18nAttr) {
            if (tag.dataset.i18nAttr === 'lang') {
              tag.lang = locale;
            } else if (tag.dataset.i18nAttr === 'content') {
              tag.content = translations[tag.dataset.i18n];
            } if (tag.dataset.i18nAttr === 'title') {
              tag.title = translations[tag.dataset.i18n];
            } else {
              tag[tag.dataset.i18nAttr].innerHTML = translations[tag.dataset.i18n];
            }
          }
        })
      }
      closeOverlay();      
    })
    .catch (function (error) {
      closeOverlay();
      console.log(error);
    });
});

async function closeOverlay() {
  $('#loading').fadeOut(500, counter());
}

function i18n(locale) {
  if (locale === 'fr') {
    $('.frItem').addClass('uk-active');
    $('.enItem').removeClass('uk-active');
    $('#localeImg').attr('src', 'assets/img/fr.png');
    $('#currentLocale').text('Français');
  }
  if (locale === 'en') {
    $('.enItem').addClass('uk-active');
    $('.frItem').removeClass('uk-active');
    $('#localeImg').attr('src', 'assets/img/en.png');
    $('#currentLocale').text('English');
  }
  let lang = locale === 'fr' ? 'en' : 'fr';
  let language = locale === 'fr' ? 'English' : 'Français';
  $('#i18n')
    .attr('href', '?lang=' + lang)
    .attr('title', language)
    .attr('uk-tooltip', 'title: ' + language);
  $('#18n-picto').attr('src', 'assets/img/picto-' + lang + '.svg');
}