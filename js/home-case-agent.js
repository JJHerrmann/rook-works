// JavaScript Document(function () {
  const { createElement: h } = React;
  const key = "#3a2a6f";
  const key2 = "#6a329f";
  const line = "#1b1f2a";

  function RookworksCaseFocus() {
    return h(
      "section",
      { id: "case", className: "mx-auto max-w-7xl px-4 pb-14" },
      h(
        "div",
        { className: "grid gap-6 md:grid-cols-12 items-stretch" },

        h(
          "article",
          {
            className: "md:col-span-7 border rounded-2xl p-6",
            style: { borderColor: line }
          },
          h(
            "div",
            {
              className:
                "text-[11px] uppercase tracking-[0.18em] text-slate-400"
            },
            "Case study"
          ),
          h(
            "h3",
            { className: "mt-2 text-2xl font-semibold" },
            "Training rebuild: from chaos to cadence"
          ),
          h(
            "p",
            { className: "mt-2 text-slate-300" },
            "Three step migration: extract patterns, design SOPs, ship dashboards. Result: faster ramp, fewer errors, calmer managers."
          ),
          h(
            "a",
            {
              className:
                "mt-4 inline-flex rounded-full border px-4 py-2 text-sm",
              style: { borderColor: line },
              href: "#"
            },
            "Read the breakdown"
          )
        ),

        h(
          "aside",
          {
            className: "md:col-span-5 border rounded-2xl p-6",
            style: { borderColor: line }
          },
          h(
            "div",
            {
              className:
                "text-[11px] uppercase tracking-[0.18em] text-slate-400"
            },
            "Agentic block"
          ),
          h(
            "h4",
            { className: "mt-2 text-xl font-semibold" },
            "LLM with guardrails"
          ),
          h(
            "ul",
            { className: "mt-3 grid gap-2 text-sm text-slate-300" },
            h("li", null, "Plan -> do -> check loops"),
            h("li", null, "Red team prompts and audit logs"),
            h("li", null, "PII scrubs and data minimization")
          ),
          h(
            "a",
            {
              className:
                "mt-4 inline-flex rounded-full px-4 py-2 text-sm",
              href: "#",
              style: {
                background:
                  "linear-gradient(90deg, " + key + ", " + key2 + ")"
              }
            },
            "See a live flow"
          )
        )
      )
    );
  }

  window.RookworksCaseFocus = RookworksCaseFocus;
})();
