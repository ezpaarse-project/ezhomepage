window.addEventListener('load', function () {
  var nodes = {
    indices: document.getElementById('counter3'),
    days: document.getElementById('counter2'),
    docs: document.getElementById('counter1'),
    platforms: document.getElementById('counter5'),
    titles: document.getElementById('counter4')
  };

  axios.get('https://ezmesure.couperin.org/api/metrics')
    .then(function (response) {
      if (response.status !== 200) {
        return console.error('Failed to fetch ezMESURE metrics');
      }

      var metrics = response.data.metrics;
      metrics.docs = response.data.docs;

      setTimeout(function () {
        for (var p in nodes) {
          var counter = new CountUp(nodes[p], 0, metrics[p] || 0, 0, 3);
          counter.start();
        }
      }, 500);
    })
    .catch (console.error);
})
