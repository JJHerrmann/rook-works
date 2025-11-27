(function () {
  const { createElement: h } = React;

  function RookworksHero() {
    return h(
      "section",
      { className: "..." },
      h("h1", null, "Systems that scale without squeaks"),
      h("p", null, "Ops audits, training flows, and AI patterns")
    );
  }

  window.RookworksHero = RookworksHero;
})();// JavaScript Document