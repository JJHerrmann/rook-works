(function () {
  const { createElement: h } = React;

  function HexdecaformPage() {
    return h(
      window.RookLayout,
      null,
      h(
        "main",
        { className: "mx-auto max-w-7xl px-4 py-16" },
        h(
          "p",
          {
            className:
              "text-[11px] uppercase tracking-[0.18em] text-slate-400",
          },
          "Case study"
        ),
        h(
          "h1",
          { className: "mt-2 text-3xl md:text-4xl font-semibold" },
          "Support Hexdecaform"
        ),
        h(
          "p",
          { className: "mt-4 max-w-2xl text-sm md:text-base text-slate-300" },
          "If you can read this, the React page is rendering and RookLayout is working on this project page."
        )
      )
    );
  }

  const rootEl = document.getElementById("root");
  const root = ReactDOM.createRoot(rootEl);
  root.render(h(HexdecaformPage));
})();
