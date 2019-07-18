window.addEventListener('load', function () {
  axios.get(`https://bibliomap.inist.fr/`)
  .then(function (response) {
    if (response && response.status !== 200) {
      hideBibliomapLive();
      displayBibliomapOffline();
    }

    hideBibliomapOffline();
    displayBibliomapLive();
  })
  .catch (function (error) {
    hideBibliomapLive();
    displayBibliomapOffline();
  });
});

function displayBibliomapLive () {
  $('#bibliomapLive').removeClass('hidden');
  $('#exampleLive').removeClass('hidden');
}

function hideBibliomapLive () {
  $('#bibliomapLive').addClass('hidden');
  $('#exampleLive').addClass('hidden');
}

function displayBibliomapOffline () {
  $('#bibliomapOff').removeClass('hidden');
  $('#example').removeClass('hidden');
}

function hideBibliomapOffline () {
  $('#bibliomapOff').addClass('hidden');
  $('#example').addClass('hidden');
}
