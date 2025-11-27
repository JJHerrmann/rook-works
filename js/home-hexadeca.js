// JavaScript Document
(function () {
  const { createElement: h } = React;
  const key = "#3a2a6f";
  const key2 = "#6a329f";
  const line = "#1b1f2a";

  function RookworksHexdecaSection() {
    return h(
      "section",
      {
        id: "hexdecaform",
        className: "mx-auto max-w-7xl px-4 pb-14"
      },
      h(
        "div",
        { className: "flex items-end justify-between mb-4" },
        h(
          "div",
          null,
          h(
            "div",
            {
              className:
                "text-[11px] uppercase tracking-[0.18em] text-slate-400"
            },
            "Case study"
          ),
          h(
            "h2",
            { className: "mt-1 text-2xl font-semibold" },
            "Support Hexdecaform"
          ),
          h(
            "p",
            { className: "mt-1 text-sm text-slate-300 max-w-prose" },
            "One intake form driving sixteen downstream flows: requests, offboarding, preferences, and development paths in a large federal HR environment."
          )
        ),
        h(
          "a",
          {
            href: "#contact",
            className:
              "hidden md:inline-flex rounded-full border px-4 py-2 text-xs",
            style: { borderColor: line }
          },
          "Talk about a similar build"
        )
      ),
      h(
        "div",
        { className: "grid gap-6 md:grid-cols-12 items-stretch" },

        // left card
        h(
          "article",
          {
            className: "md:col-span-4 border rounded-2xl p-4 md:p-5",
            style: {
              borderColor: line,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.25))"
            }
          },
          h(
            "h3",
            { className: "text-lg font-semibold" },
            "What it is"
          ),
          h(
            "p",
            { className: "mt-2 text-sm text-slate-300" },
            "Central intake pattern: one Microsoft Form, sixteen flows routed by type into HR, IT, facilities, training, and scheduling teams."
          ),
          h("div", {
            className: "mt-3 h-px",
            style: { background: line }
          }),
          h(
            "ul",
            { className: "mt-3 grid gap-2 text-sm text-slate-300" },
            h(
              "li",
              null,
              "RBAC checks on who can trigger sensitive actions"
            ),
            h(
              "li",
              null,
              "SharePoint logging for audit and reporting"
            ),
            h(
              "li",
              null,
              "Outlook Teams notifications and SLA timers"
            )
          ),
          h(
            "p",
            { className: "mt-3 text-xs text-slate-400" },
            "The live demo below uses anonymized flows and fake data; the structure matches the production pattern."
          )
        ),

        // right iframe
        h(
          "div",
          { className: "md:col-span-8" },
          h("div", {
            className: "rounded-2xl border mb-2",
            style: {
              borderColor: line,
              background:
                "linear-gradient(120deg, " +
                key +
                "22, " +
                key2 +
                "22), #05060a"
            }
          }),
          h("iframe", {
            src: "/projects/hexadecaform.html",
            title: "Support Hexdecaform demo",
            className: "w-full rounded-2xl border",
            style: {
              borderColor: line,
              minHeight: "520px",
              background: "#05060a"
            },
            loading: "lazy"
          })
        )
      )
    );
  }

  window.RookworksHexdecaSection = RookworksHexdecaSection;
})();
