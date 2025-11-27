(function () {
  const { createElement: h } = React;

  const key = "#3a2a6f";   // Future Dusk approx
  const key2 = "#6a329f";
  const mist = "#0b0c11";
  const line = "#1b1f2a";

  function RookHeader() {
    return h(
      "header",
      {
        className: "sticky top-0 z-40 backdrop-blur border-b",
        style: { borderColor: line, background: "rgba(0,0,0,0.3)" }
      },
      h(
        "div",
        { className: "mx-auto max-w-7xl px-4 py-3 flex items-center gap-6" },

        // brand block
        h(
          "div",
          { className: "flex items-center gap-3" },
          h("img", {
            src: "/img/rook-mask.svg",
            className: "w-8 h-8 rounded-lg",
            alt: "Rook.works"
          }),
          h(
            "span",
            { className: "font-semibold tracking-wide" },
            "Rook.works"
          )
        ),

        // nav
        h(
          "nav",
          {
            className:
              "ml-auto hidden md:flex items-center gap-6 text-sm text-slate-300"
          },
          h("a", { className: "hover:text-white", href: "#work" }, "Work"),
          h("a", { className: "hover:text-white", href: "#services" }, "Services"),
          h("a", { className: "hover:text-white", href: "#case" }, "Case studies"),
          h("a", { className: "hover:text-white", href: "#contact" }, "Contact")
        ),

        // CTA
        h(
          "a",
          {
            href: "#contact",
            className:
              "ml-auto md:ml-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border",
            style: {
              borderColor: line,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15))"
            }
          },
          "Start a project"
        )
      )
    );
  }

  function RookFooter() {
    const year = new Date().getFullYear();
    return h(
      "footer",
      { className: "border-t mt-10", style: { borderColor: line } },

      // 4 column footer
      h(
        "div",
        {
          className:
            "mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4 text-sm"
        },

        // Col 1: Brand
        h(
          "div",
          null,
          h(
            "div",
            { className: "flex items-center gap-2 mb-3" },
            h("img", {
              src: "/img/rook-mask.svg",
              className: "w-7 h-7 rounded-lg",
              alt: "Rook.works"
            }),
            h(
              "span",
              { className: "font-semibold tracking-wide" },
              "Rook.works"
            )
          ),
          h(
            "p",
            { className: "text-slate-300 max-w-xs" },
            "I build HR workflows, automations, and tooling that calm chaos in large organizations."
          ),
          h(
            "p",
            { className: "mt-2 text-xs text-slate-400" },
            "Current focus: HR automation, people analytics, internal tools roles."
          )
        ),

        // Col 2: HR Systems
        h(
          "div",
          null,
          h(
            "h4",
            {
              className:
                "text-xs font-semibold tracking-[0.18em] uppercase text-slate-400"
            },
            "HR SYSTEMS"
          ),
          h(
            "ul",
            { className: "mt-3 space-y-1 text-slate-300" },
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "/projects/training-attendance.html",
                  className: "hover:text-white"
                },
                "Training compliance tracker"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "/projects/hexadecaform.html",
                  className: "hover:text-white"
                },
                "Hexdecaform intake pattern"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                { href: "#work", className: "hover:text-white" },
                "More HR projects"
              )
            )
          )
        ),

        // Col 3: AI & Tools Lab
        h(
          "div",
          null,
          h(
            "h4",
            {
              className:
                "text-xs font-semibold tracking-[0.18em] uppercase text-slate-400"
            },
            "AI & TOOLS LAB"
          ),
          h(
            "ul",
            { className: "mt-3 space-y-1 text-slate-300" },
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "/projects/agent-99.html",
                  className: "hover:text-white"
                },
                "Agent_99 decision assistant"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "/projects/card-kit.html",
                  className: "hover:text-white"
                },
                "Internal UI card kit"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                { href: "#case", className: "hover:text-white" },
                "LLM guardrail patterns"
              )
            )
          )
        ),

        // Col 4: Worlds & Shops
        h(
          "div",
          null,
          h(
            "h4",
            {
              className:
                "text-xs font-semibold tracking-[0.18em] uppercase text-slate-400"
            },
            "WORLDS & SHOPS"
          ),
          h(
            "ul",
            { className: "mt-3 space-y-1 text-slate-300" },
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "https://bloodline.rook.works",
                  className: "hover:text-white"
                },
                "Bloodline: Spirits of the Smokies"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "/projects/challenger-bazaar.html",
                  className: "hover:text-white"
                },
                "Challenger Bazaar listing system"
              )
            ),
            h(
              "li",
              null,
              h(
                "a",
                {
                  href: "https://shop.rook.works",
                  className: "hover:text-white"
                },
                "Card and merch experiments"
              )
            )
          )
        )
      ),

      // bottom bar
      h(
        "div",
        { className: "border-t", style: { borderColor: line } },
        h(
          "div",
          {
            className:
              "mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 flex flex-wrap gap-3 justify-between"
          },
          h("span", null, "© " + year + " Rook.works"),
          h(
            "span",
            null,
            "Future Dusk palette. Systems first, gradients second."
          )
        )
      )
    );
  }

  function RookLayout(props) {
    return h(
      "div",
      {
        className: "relative min-h-screen text-slate-100",
        style: {
          background:
            "radial-gradient(1200px 600px at 10% -10%, " +
            key +
            "22, transparent)," +
            "radial-gradient(900px 500px at 110% 0%, " +
            key2 +
            "1f, transparent)," +
            mist
        }
      },
      h(RookHeader),
      props.children,
      h(RookFooter)
    );
  }


  window.RookLayout = RookLayout;
})();
