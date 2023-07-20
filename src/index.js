var m = require("mithril")
let portals = []

const button = () => {
    return m("button", {
        "class": "rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",
        "type": "button",
        onclick: () => initialize({ name: "Portal", content: "Portal content" },)
    },
        "New Portal"
    )
}

const topLevel = {
    view: function (vnode) {
        return m("div", { "class": "absolute w-full" }, [
            portals.map((element, i) => {
                return m(nonModalWindow, { idx: i })
            })
        ])
    }
}

const nonModalWindow = {
    view: function (vnode) {
        return m("div", { "class": "absolute top-0 right-0 -translate-x-6 translate-y-6", "style": `z-index: ${vnode.attrs.idx}` }, [
            m("div", { "class": "w-screen max-w-md bg-white rounded-lg shadow-xl overflow-hidden" }, [
                //m("div", {"class": "text-base font-semibold leading-6 text-gray-900"}, "New portal opened!")
                m("div", { "class": "bg-gray-200 px-4 py-4 sm:px-6" },
                    [
                        m("div", { "class": "flex items-center justify-between" },
                            [
                                m("h2", { "class": "text-base font-bold leading-6", "id": "dialogTitle" },
                                    "New Portal"
                                ),
                                m("div", {"class": "flex items-center justify-between space-x-4"}, [
                                    m("svg", {"class":"w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor"}, 
                                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 12h-15"})
                                    ),
                                    m("svg", { "class": "w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor" },
                                        m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M6 18L18 6M6 6l12 12" })
                                    )
                                ])
                            ]
                        ),
                    ]
                ),
                m("div", {"class": "p-4" }, "{Title: 'New Portal'}")
            ])
        ])
    }
}

const initialize = (p) => {
    portals.push(p)
    m.mount(document.getElementById("portals"), topLevel)
}

m.render(document.getElementById("content"), button())