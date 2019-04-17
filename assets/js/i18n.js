window.addEventListener('load', function () {
  var url = new URL(window.location.href);
  var params = new URLSearchParams(url.search);
  var locale = params.get('lang') || 'fr';

  axios.get(`/locales/${locale}.json`)
    .then(function (response) {
      if (response && response.status !== 200) {
        return console.error('Failed to get ezPAARSE translation');
      }

      var translations = response.data;
      translations.locale = locale;

      var i18nTags = document.querySelectorAll('[data-i18n]');
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

      counter();
    })
    .catch (function (error) {
      counter();
      console.log(error)
    });
});
