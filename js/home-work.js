// JavaScript Document
(function () {
  const { createElement: h, useMemo } = React;
  const key = "#3a2a6f";
  const key2 = "#6a329f";
  const line = "#1b1f2a";

  function RookworksWork() {
    const projects = useMemo(
      function () {
        return [
          {
            t: "Training attendance architecture",
            d: "Rebuilt manual training tracking into a structured, export ready workbook with fake USPS style data.",
            img: "/img/excel_vba_pa.png",
            href: "/projects/training-attendance.html"
          },
          {
            t: "Rookworks card kit",
            d: "Accessible HTML Tailwind card patterns for fast landing pages.",
            href: "/projects/card-kit.html"
          },
          {
            t: "Challenger Bazaar",
            d: "eBay listing templates and a photo to listing pipeline.",
            href: "/projects/challenger-bazaar.html"
          },
          {
            t: "Agent_99",
            d: "Budget watchdog and decision reports wired through an LLM core.",
            img: "/img/aipersona.png",
            href: "/projects/agent-99.html"
          }
        ];
      },
      []
    );

    return h(
      "section",
      { id: "work", className: "mx-auto max-w-7xl px-4 pt-6 pb-14" },
      h(
        "div",
        { className: "flex items-end justify-between" },
        h(
          "h2",
          { className: "text-2xl font-semibold" },
          "Recent work"
        ),
        h(
          "a",
          {
            className: "text-sm text-slate-300 hover:text-white",
            href: "/projects/index.html"
          },
          "All projects ->"
        )
      ),
      h(
        "div",
        { className: "mt-5 grid gap-4 md:grid-cols-12" },
        projects.map(function (p, i) {
          return h(
            "a",
            {
              key: i,
              href: p.href || "#",
              className:
                "md:col-span-6 lg:col-span-3 border rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-slate-400",
              style: { borderColor: line }
            },
            h(
              "div",
              { className: "h-36 relative overflow-hidden" },
              p.img
                ? h("img", {
                    src: p.img,
                    alt: p.t,
                    className:
                      "w-full h-full object-cover transition-transform duration-150 group-hover:scale-[1.03]"
                  })
                : h("div", {
                    className: "w-full h-full",
                    style: {
                      background:
                        "linear-gradient(120deg, " +
                        key +
                        "33, " +
                        key2 +
                        "33), radial-gradient(600px 300px at 70% -10%, " +
                        key +
                        "22, transparent), #101217"
                    }
                  })
            ),
            h(
              "div",
              { className: "p-4" },
              h(
                "h3",
                { className: "font-semibold group-hover:text-white" },
                p.t
              ),
              h(
                "p",
                { className: "text-sm text-slate-300" },
                p.d
              )
            )
          );
        })
      )
    );
  }

  window.RookworksWork = RookworksWork;
})();
