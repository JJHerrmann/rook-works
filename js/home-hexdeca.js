(function () {
  const { createElement: h } = React;

  function RookworksHexdecaSection() {
    return h(
      "section",
      {
        className:
          "border-t border-white/5 bg-slate-950/40"
      },
      h(
        "div",
        {
          className:
            "mx-auto max-w-7xl px-4 py-16 grid gap-8 md:grid-cols-12 items-start"
        },
        h(
          "div",
          { className: "md:col-span-5" },
          h(
            "p",
            {
              className:
                "uppercase text-xs tracking-[0.2em] text-slate-400"
            },
            "Hexadecaform"
          ),
          h(
            "h2",
            {
              className:
                "mt-3 text-2xl md:text-3xl font-semibold text-slate-50"
            },
            "One form, sixteen clean data paths"
          ),
          h(
            "p",
            { className: "mt-3 text-sm text-slate-300 max-w-prose" },
            "This is a placeholder for the Hexadecaform flow map. Swap this section later for the full SVG or dashboard once it is ready."
          )
        ),
        h(
          "div",
          { className: "md:col-span-7" },
          h(
            "div",
            {
              className:
                "rounded-2xl border border-white/10 p-4 md:p-6 text-xs text-slate-300"
            },
            h(
              "p",
              { className: "font-medium text-slate-100 mb-2" },
              "Preview layout"
            ),
            h(
              "p",
              null,
              "Imagine a 4x4 grid of nodes here, each representing one route from intake to outcome: training, audits, payroll, metrics, and so on. This stub keeps React happy while you design the real thing."
            )
          )
        )
      )
    );
  }

  // Expose globally so page-home.js can render it
  window.RookworksHexdecaSection = RookworksHexdecaSection;
})();
