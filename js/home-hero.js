(function () {
  const { createElement: h, useMemo } = React;
  const key = "#3a2a6f";
  const key2 = "#6a329f";
  const line = "#1b1f2a";

  function RookworksHero() {
    const heroSlides = useMemo(
      function () {
        return [
          {
            title: "Systems that scale without squeaks",
            kicker: "Rookworks",
            body:
              "Ops audits, training rebuilds, and dashboards that get your team from hand wavy to hands free.",
            cta: "See the playbook"
          },
          {
            title: "Design that behaves itself",
            kicker: "Brand + Build",
            body:
              "Cards, comps, and component libraries with Appalachian grit and enterprise polish.",
            cta: "Browse components"
          },
          {
            title: "Agentic automation, minus the chaos gremlins",
            kicker: "AI, sensibly",
            body:
              "We wire LLM workflows that pass audits, ship faster, and stay out of HR trouble.",
            cta: "How we do AI"
          }
        ];
      },
      []
    );

    const slide = useMemo(
      function () {
        return heroSlides[Math.floor(Math.random() * heroSlides.length)];
      },
      [heroSlides]
    );

    return h(
      "section",
      { className: "relative" },
      h(
        "div",
        {
          className:
            "mx-auto max-w-7xl px-4 pt-16 pb-20 grid gap-8 items-start md:grid-cols-12"
        },
        h(
          "div",
          { className: "md:col-span-7" },
          h(
            "p",
            {
              className:
                "uppercase text-xs tracking-[0.2em] text-slate-400"
            },
            slide.kicker
          ),
          h(
            "h1",
            {
              className:
                "mt-3 text-4xl md:text-6xl font-semibold leading-[1.05]"
            },
            slide.title
          ),
          h(
            "p",
            { className: "mt-4 text-slate-300 max-w-prose" },
            slide.body
          ),
          h(
            "div",
            { className: "mt-8 flex flex-wrap gap-3" },
            h(
              "a",
              {
                href: "#playbook",
                className: "rounded-full px-5 py-3 text-sm font-medium",
                style: {
                  background:
                    "linear-gradient(90deg, " + key + ", " + key2 + ")",
                  boxShadow: "0 8px 24px " + key + "55"
                }
              },
              slide.cta
            ),
            h(
              "a",
              {
                href: "#work",
                className:
                  "rounded-full px-5 py-3 text-sm font-medium border border-white/10"
              },
              "Explore work"
            )
          )
        ),
        h(
          "div",
          { className: "md:col-span-5" },
          h(
            "div",
            {
              className: "rounded-2xl border p-4 md:p-6 shadow-xl",
              style: {
                borderColor: line,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.35))",
                boxShadow: "0 10px 40px " + key + "33"
              }
            },
            h(
              "div",
              { className: "text-sm text-slate-300" },
              "Rookworks focus"
            ),
            h(
              "ul",
              { className: "mt-3 grid gap-3 text-sm text-slate-200" },
              h(
                "li",
                { className: "flex items-center gap-2" },
                h("span", {
                  className: "w-2 h-2 rounded-full",
                  style: { background: key }
                }),
                "Ops and training rebuilds"
              ),
              h(
                "li",
                { className: "flex items-center gap-2" },
                h("span", {
                  className: "w-2 h-2 rounded-full",
                  style: { background: key }
                }),
                "Excel and BI dashboards"
              ),
              h(
                "li",
                { className: "flex items-center gap-2" },
                h("span", {
                  className: "w-2 h-2 rounded-full",
                  style: { background: key }
                }),
                "Component driven web design"
              ),
              h(
                "li",
                { className: "flex items-center gap-2" },
                h("span", {
                  className: "w-2 h-2 rounded-full",
                  style: { background: key }
                }),
                "LLM workflows with guardrails"
              )
            ),
            h("div", {
              className: "mt-4",
              style: { height: "1px", background: line }
            }),
            h(
              "div",
              {
                className:
                  "mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300"
              },
              h(
                "div",
                { className: "space-y-1" },
                h(
                  "p",
                  { className: "font-medium text-slate-100" },
                  "For humans"
                ),
                h(
                  "p",
                  null,
                  "Plain language docs, training, and diagrams that stop the shoulder taps."
                )
              ),
              h(
                "div",
                { className: "space-y-1" },
                h(
                  "p",
                  { className: "font-medium text-slate-100" },
                  "For systems"
                ),
                h(
                  "p",
                  null,
                  "Data models, automations, and flows that stop breaking every quarter."
                )
              )
            )
          )
        )
      )
    );
  }

  // Expose to the global scope so page-home.js can see it
  window.RookworksHero = RookworksHero;
})();