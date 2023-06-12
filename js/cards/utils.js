const colors = ['bg-info', 'bg-info', 'bg-info']
const transparent = 'bg-transparent'

const changeColor = (container, index, revert = false) => {
    
    const i = Number(index)

    revert
    ?container.classList.replace(colors[i], transparent)
    :container.classList.replace(transparent, colors[i])
}

const matchCategory = (selection) => {

    switch(selection) {
        
        case '0':
            form.category.value = 'a'
            break
            case '1':
            form.category.value = 'b'
            break
            case '2':
            form.category.value = 'c'
            break
            default:
            throw new Error('Algo paso en el Match Category', error);
            
    }
}