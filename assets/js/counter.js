function counter () {
  let nodes = {
    docs: document.getElementById('counter1'),
    days: document.getElementById('counter2'),
    indices: document.getElementById('counter3'),
    titles: document.getElementById('counter4'),
    platforms: document.getElementById('counter5'),
    // badgesContributors: document.getElementById('counter6'),
    // badgesIssues: document.getElementById('counter7'),
  };

  const lang = document.querySelector('html').getAttribute('lang');
  console.log(lang);

  function startCounter(metrics) {
    setTimeout(function () {
      for (let p in nodes) {
        if (metrics[p]) {
          let counter = new countUp.CountUp(nodes[p], metrics[p] || 0, {
            startVal: 0,
            duration: 3,
            separator: lang === 'fr' ? ' ' : ',',
            decimal: lang === 'fr' ? ',' : '.',
          });
          counter.start();
        }
      }
    }, 500);
  }

  let currentYear = new Date().getFullYear();

  let defaultMetrics = {
    docs: nodes.docs.getAttribute('data-nb'),
    dateCoverage: {
      min: new Date(`${currentYear}-01-01`),
      max: new Date(`${currentYear}-12-31`),
    },
    days: nodes.days.getAttribute('data-nb'),
    titles: nodes.titles.getAttribute('data-nb'),
    platforms: nodes.platforms.getAttribute('data-nb'),
    indices: nodes.indices.getAttribute('data-nb'),
    // badgesIssues: nodes.badgesIssues.getAttribute('data-nb'),
    // badgesContributors: nodes.badgesContributors.getAttribute('data-nb'),
  };

  let ezmesure = axios.create({
    baseURL: 'https://ezmesure.couperin.org/api',
    timeout: 3000,
  });

  const metricsData = async function() {
    let partners;
    try {
      partners = await ezmesure.get('/partners');
    } catch (err) {
      console.error('Failed to fetch ezMESURE partners');
      console.error(err);
    }

    let ezmesureMetrics;
    try {
      ezmesureMetrics = await ezmesure.get('/metrics');
    } catch (err) {
      console.error('Failed to fetch ezMESURE metrics');
      console.error(err);
    }

    // let badgesIssues;
    // let badgesContributors;
    // try {
    //   const { data } = await axios.get('http://analyses.ezpaarse.org/api/badges/metrics');
    //   let badgesData = data.data
    //   for (let d in badgesData.metrics) {
    //     badgesIssues = (badgesIssues + badgesData.metrics[d].issues.app)
    //   }
    //   badgesContributors = badgesData.contributors;
    // } catch (err) {
    //   console.error('Failed to fetch ezpaarse-badge metrics');
    //   console.error(err);
    // }

    return Promise.resolve({
      indices: partners?.data?.length || defaultMetrics.indices,
      docs: ezmesureMetrics?.data?.docs || defaultMetrics.docs,
      days: ezmesureMetrics?.data?.metrics.days || defaultMetrics.days,
      titles: ezmesureMetrics?.data?.metrics.titles || defaultMetrics.titles,
      platforms: ezmesureMetrics?.data?.metrics.platforms || defaultMetrics.platforms,
      // badgesIssues,
      // badgesContributors,
    });
  };

  metricsData()
    .then((res) => startCounter({ ...defaultMetrics, ...res }))
    .catch((err) => startCounter(defaultMetrics));
}