// JavaScript Document
(function () {
  const { createElement: h } = React;
  const key = "#3a2a6f";
  const key2 = "#6a329f";
  const line = "#1b1f2a";

  function RookworksContact() {
    return h(
      "section",
      { id: "contact", className: "mx-auto max-w-7xl px-4 pb-20" },
      h(
        "div",
        {
          className: "border rounded-2xl p-6 md:p-8",
          style: { borderColor: line }
        },
        h(
          "div",
          { className: "grid gap-6 md:grid-cols-12 items-center" },
          h(
            "div",
            { className: "md:col-span-7" },
            h(
              "h3",
              { className: "text-2xl font-semibold" },
              "Got friction? Lets sand it down."
            ),
            h(
              "p",
              { className: "mt-2 text-slate-300 max-w-prose" },
              "Drop a line with your messiest problem. We will scope a tidy, measurable fix and ship a plan in plain English."
            )
          ),
          h(
            "form",
            {
              className: "md:col-span-5 grid gap-3",
              onSubmit: function (e) {
                e.preventDefault();
              }
            },
            h("input", {
              className: "rounded-xl bg-black/30 border px-3 py-2",
              placeholder: "Name",
              style: { borderColor: line }
            }),
            h("input", {
              className: "rounded-xl bg-black/30 border px-3 py-2",
              placeholder: "Email",
              style: { borderColor: line }
            }),
            h("textarea", {
              className: "rounded-xl bg-black/30 border px-3 py-2 h-24",
              placeholder: "What needs fixing?",
              style: { borderColor: line }
            }),
            h(
              "button",
              {
                className: "rounded-full px-5 py-3 text-sm font-medium",
                style: {
                  background:
                    "linear-gradient(90deg, " + key + ", " + key2 + ")"
                }
              },
              "Send"
            )
          )
        )
      )
    );
  }

  window.RookworksContact = RookworksContact;
})();
