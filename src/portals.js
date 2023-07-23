export const portals = []

export const initialize = (p) => {
    portals.push(p)
}

export const searchPortal = id => portals.find(portal => portal.getId() == id)

export const maximize = id => {
    let portal = searchPortal(id)
    if(portal != undefined){
        portal.maximize()
    }
}

export const minimize = id => {
    let portal = searchPortal(id)
    if(portal != undefined){
        portal.minimize()
    }
}

export const closePortal = id => {
    let portal = searchPortal(id)
    if(portal != undefined){
        portals.splice(portals.indexOf(portal), 1)
    }
}