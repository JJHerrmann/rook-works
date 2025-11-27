// JavaScript Document(function () {
  const { createElement: h } = React;
  const line = "#1b1f2a";

  function RookworksServices() {
    const cards = [
      {
        eyebrow: "Ops",
        title: "Process tune ups",
        body:
          "Audits, SOPs, and training flows to cut time to competence and error rates."
      },
      {
        eyebrow: "Design",
        title: "Card first UI kits",
        body:
          "Reusable components for sites, dashboards, and storefronts."
      },
      {
        eyebrow: "Data",
        title: "Dashboards that answer",
        body:
          "XLOOKUP and XLSX to BI stacks; clear visuals, no clown charts."
      },
      {
        eyebrow: "AI",
        title: "Agentic automations",
        body:
          "LLM flows that plan, verify, and log, useful, safe, auditable."
      }
    ];

    return h(
      "section",
      { id: "services", className: "mx-auto max-w-7xl px-4 pb-6 md:pb-10" },
      h(
        "div",
        { className: "grid gap-4 md:grid-cols-12" },
        cards.map(function (c, i) {
          return h(
            "article",
            {
              key: i,
              className:
                "md:col-span-6 border rounded-2xl p-5 transition-transform hover:-translate-y-0.5",
              style: {
                borderColor: line,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.25))"
              }
            },
            h(
              "div",
              {
                className:
                  "text-[11px] uppercase tracking-[0.18em] text-slate-400"
              },
              c.eyebrow
            ),
            h(
              "h3",
              { className: "mt-2 text-xl font-semibold" },
              c.title
            ),
            h(
              "p",
              { className: "mt-1 text-sm text-slate-300" },
              c.body
            )
          );
        })
      )
    );
  }

  window.RookworksServices = RookworksServices;
})();
