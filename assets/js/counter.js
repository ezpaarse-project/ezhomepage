window.addEventListener('load', function () {
  var nodes = {
    indices: document.getElementById('counter3'),
    days: document.getElementById('counter2'),
    docs: document.getElementById('counter1'),
    platforms: document.getElementById('counter5'),
    titles: document.getElementById('counter4'),
    contributors: document.getElementById('counter6'),
    issues: document.getElementById('counter7')
  };

  axios.get('https://ezmesure.couperin.org/api/metrics')
    .then(function (response) {
      if (response.status !== 200) {
        return console.error('Failed to fetch ezMESURE metrics');
      }

      var metrics = response.data.metrics;
      metrics.docs = response.data.docs;

      axios.get('http://analyses.ezpaarse.org/api/badges/metrics')
        .then(function (response) {
          if (response.status !== 200) {
            console.error('Failed to fetch ezpaarse-badge metrics');
          } else {
            var badgesData = response.data.data
            var issues = 0;
            for (var d in badgesData.metrics) {
              issues = (issues + badgesData.metrics[d].issues.app)
            }
            metrics.issues = issues
            metrics.contributors = badgesData.contributors
          }

          setTimeout(function () {
            for (var p in nodes) {
              if (metrics[p]) {
                var counter = new CountUp(nodes[p], 0, metrics[p] || 0, 0, 3);
                counter.start();
              }
            }
          }, 500);

        })
        .catch (console.error);
    })
    .catch (console.error);

})
