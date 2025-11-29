// /js/page-hexadecaform.js
(function () {
  const { createElement: h } = React;

  function HexdecaformPage() {
    const line = "#1b1f2a";

    return h(
      window.RookLayout,
      null,
      h(
        "main",
        { className: "mx-auto max-w-7xl px-4 py-12 md:py-16" },

        // Eyebrow
        h(
          "p",
          {
            className:
              "text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2",
          },
          "Case study"
        ),

        // Title
        h(
          "h1",
          { className: "text-3xl md:text-4xl font-semibold mb-3" },
          "Support Intake Hexdecaform"
        ),

        // Intro copy
        h(
          "p",
          {
            className: "max-w-2xl text-sm md:text-base text-slate-300 mb-6",
          },
          "One intake form driving sixteen downstream flows: headset requests, offboarding, accommodations, preferences, and acting roles in a large HR shared services environment."
        ),

        // CTA-ish label above the demo
        h(
          "p",
          {
            className: "text-xs uppercase tracking-[0.16em] text-slate-500 mb-2",
          },
          "Interactive flow map"
        ),

        // Frame around iframe
        h(
          "div",
          {
            className: "rounded-2xl border overflow-hidden",
            style: {
              borderColor: line,
              background:
                "linear-gradient(120deg,#0e102022,#13173422), #05060a",
            },
          },
          h("iframe", {
            // this is the raw HTML you pasted with SVG + modal logic
            src: "/projects/hexdecaform.html",
            title: "Support Intake Hexdecaform demo",
            className: "w-full",
            style: {
              minHeight: "640px",
              border: "0",
              background: "#05060a",
            },
            loading: "lazy",
          })
        ),

        // Footnote
        h(
          "p",
          {
            className: "mt-3 text-xs text-slate-400 max-w-prose",
          },
          "Demo uses anonymized flows and fake data. Structure and patterns match the real system."
        )
      )
    );
  }

  const rootEl = document.getElementById("root");
  const root = ReactDOM.createRoot(rootEl);
  root.render(h(HexdecaformPage));
})();
