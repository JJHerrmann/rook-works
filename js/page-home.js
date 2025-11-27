(function () {
  const { createElement: h } = React;

  function HomePage() {
    return h(
      React.Fragment,
      null,
      h(RookworksHero),
      h(RookworksServices),
      h(RookworksWork),
      h(RookworksHexdecaSection),
      h(RookworksCaseFocus),
      h(RookworksContact)
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    h(RookLayout, null, h(HomePage))
  );
})();
