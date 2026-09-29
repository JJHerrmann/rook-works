// Keeps the Bloodline card's "N episodes filed" line in sync with
// bloodline.rook.works's own production ledger (content/publication.json),
// the same source status.js reads. Runs after load so it never races the
// homepage's own hydration; only touches a text node via textContent, so
// there is nothing for client-side rendering to fight over.
(function () {
  function updateCount() {
    var scope = document.querySelector('a.written-card.red .scope');
    if (!scope) return;
    fetch('https://bloodline.rook.works/content/publication.json', { cache: 'no-store' })
      .then(function (response) {
        return response.ok ? response.json() : Promise.reject(new Error('unavailable'));
      })
      .then(function (data) {
        var episodes = data.episodes || [];
        var count = episodes.filter(function (episode) {
          return episode.status === 'public';
        }).length;
        if (count > 0) {
          scope.textContent = scope.textContent.replace(/^\d+/, String(count));
        }
      })
      .catch(function () {
        // Leave the last-published static count in place.
      });
  }

  if (document.readyState === 'complete') {
    updateCount();
  } else {
    window.addEventListener('load', updateCount);
  }
})();
