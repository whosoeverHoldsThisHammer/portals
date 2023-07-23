function createPortal(id, title, content){
    let _id = id
    let _title = title
    let _content = content
    let _opened = true
    let _position = {
        x: 0,
        y: 0
    }

    return {
        getId(){
            return _id
        },
        getTitle(){
            return _title
        },
        getContent(){
            return _content
        },
        maximize(){
            _opened = true
        },
        minimize(){
            _opened = false
        },
        isOpen(){
            return _opened
        },
        setPosition(x, y){
            _position = {
                x: x,
                y: y
            }
        },
        getPosition(){
            return _position
        }
    }

}

export default createPortal