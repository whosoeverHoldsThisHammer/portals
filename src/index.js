import createPortal from "./factory"
var m = require("mithril")

const portals = {
    stacked: [],
    anchored: []
}

const anchor = id => {
    let element = portals.stacked[id]
    portals.stacked.splice(id, 1)
    portals.anchored.push(element)
}

const expand = id => {
    let element = portals.anchored[id]
    portals.anchored.splice(id, 1)
    portals.stacked.push(element)
}

const button = () => {
    return m("button", {
        "class": "rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",
        "type": "button",
        onclick: () => initialize(createPortal(portals.stacked.length + 1, "Portal", "Portal content"))
    },
        "Open New Portal"
    )
}

const miminizedWindow = {
    view: function (vnode) {
        return m("div", { "class": "w-52 flex items-center space-between px-4 py-2.5 rounded-sm bg-slate-900" }, [
            m("div", { "class": "text-sm font-medium text-white grow truncate" }, "New Portal"),
            m("div", { "class": "flex space-x-3" }, [
                m("svg", { "class": "w-5 h-5 text-slate-300 hover:text-slate-100 cursor-pointer", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 20 20", "fill": "currentColor", onclick: ()=> expand(vnode.attrs.idx)},
                    m("path", { "fill-rule": "evenodd", "d": "M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z", "clip-rule": "evenodd" })
                ),
                m("svg", { "class": "w-5 h-5 text-slate-300 hover:text-slate-100 cursor-pointer", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 20 20", "fill": "currentColor", onclick: ()=> portals.anchored.splice(vnode.attrs.idx, 1) },
                    m("path", { "d": "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
                )
            ])
        ])
    }
}

const nonModalWindow = {
    oncreate: (vnode)=> {
        vnode.attrs.content.setPosition(vnode.dom.offsetLeft, vnode.dom.offsetTop)
    },
    view: function (vnode) {
        return m("div", { "class": "absolute -translate-x-6 translate-y-6", "style": `z-index: ${vnode.attrs.idx}; top: ${20 * vnode.attrs.idx}px; right: ${20 * vnode.attrs.idx}px` }, [
            m("div", { "class": "w-screen max-w-xl border border-gray-300 border-opacity-75 bg-white rounded-lg shadow-xl overflow-hidden" }, [
                m("div", { "class": "bg-gray-100 px-4 py-4 sm:px-6" },
                    [
                        m("div", { "class": "flex items-center justify-between" },
                            [
                                m("h2", { "class": "text-base font-bold leading-6", "id": "dialogTitle" },
                                    "New Portal"
                                ),
                                m("div", { "class": "flex items-center justify-between space-x-4" }, [
                                    m("svg", { "class": "w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", onclick: () => anchor(vnode.attrs.idx) },
                                        m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M19.5 12h-15" })
                                    ),
                                    m("svg", { "class": "w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer", "xmlns": "http://www.w3.org/2000/svg", "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", onclick: () => portals.stacked.splice(vnode.attrs.idx, 1) },
                                        m("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M6 18L18 6M6 6l12 12" })
                                    )
                                ])
                            ]
                        ),
                    ]
                ),
                m("div", { "class": "p-4" }, "{Title: 'New Portal'}")
            ])
        ])
    }
}

const initialize = (p) => {
    portals.stacked.push(p)
}

const App = {
    view: function (vnode) {
        return m("div", {"class": "h-full w-full"}, [
            m("div", {id: "portals", "class": "absolute left-0 top-0 w-full"}, [
                portals.stacked.map((element, i) => {
                    return m(nonModalWindow, { content: element, idx: i })
                })
            ]),
            m("div", {id: "anchors", "class": "absolute left-0 bottom-0 w-full"}, [
                m("div", { "class": "p-4 flex items-center space-x-4" }, [
                    portals.anchored.map((element, i) => {
                        return m(miminizedWindow, { content: element, idx: i })
                    })
                ])
            ]),
            m("div", {"class": "min-h-full w-full min-w-full flex items-center justify-center"}, [
                button()
            ])
        ])
    }
}

m.mount(document.getElementById("container"), App)