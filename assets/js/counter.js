function counter () {
  var nodes = {
    indices: document.getElementById('counter3') || 78,
    days: document.getElementById('counter2') || 365,
    docs: document.getElementById('counter1') || 646060453,
    platforms: document.getElementById('counter5') || 245,
    titles: document.getElementById('counter4') || 161908,
    contributors: document.getElementById('counter6'),
    issues: document.getElementById('counter7')
  };

  function startCounter(metrics) {
    setTimeout(function () {
      for (var p in nodes) {
        if (metrics[p]) {
          var counter = new CountUp(nodes[p], 0, metrics[p] || 0, 0, 3);
          counter.start();
        }
      }
    }, 500);
  }

  axios.get('https://ezmesure.couperin.org/api/metrics')
    .then(function (response) {
      if (response.status !== 200) {
        return console.error('Failed to fetch ezMESURE metrics');
      }

      var metrics = response.data.metrics;
      metrics.docs = response.data.docs;

      axios.get('https://ezmesure.couperin.org/api/partners')
      .then(function (response) {
        if (response.status !== 200) {
          return console.error('Failed to fetch ezMESURE metrics');
        }
        metrics.indices = response.data.length;

        // axios.get('http://analyses.ezpaarse.org/api/badges/metrics')
        // .then(function (response) {
        //   if (response.status !== 200) {
        //     return console.error('Failed to fetch ezpaarse-badge metrics');
        //   }

        //   var badgesData = response.data.data
        //   var issues = 0;
        //   for (var d in badgesData.metrics) {
        //     issues = (issues + badgesData.metrics[d].issues.app)
        //   }
        //   metrics.issues = issues
        //   metrics.contributors = badgesData.contributors

        //   startCounter(metrics);
        // })
        // .catch (function (error) {
        //   console.error(error);
        //   startCounter(metrics);
        // });

        startCounter(metrics);
      });
    })
    .catch (console.error);
}