var m = require("mithril")
let portals = []

const button = ()=>{
    return m("div", { onclick: ()=> initialize({name: "Portal",content: "Portal content"},)}, "New portal")
}

const topLevel = {
    view: function(vnode) {
        return m("div", {style: "position: absolute"}, [
            portals.map((element, i) => {
                return m(nonModalWindow, {idx: i})
            })
        ])
    }
}

const nonModalWindow = {
    view: function(vnode) {
        return m("div", {style: `position: absolute; z-index: ${vnode.attrs.idx}`},"Hola")
    }
}

const initialize = (p)=>{
    portals.push(p)
    m.mount(document.getElementById("portals"), topLevel)    
}

m.render(document.getElementById("content"), button())