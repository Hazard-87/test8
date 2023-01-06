const items = new Array(10).fill('Item ').map((item, i) => item + (i + 1))

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.append(wrapper)

    const input = document.createElement('input')
    wrapper.append(input)

    const list = document.createElement('div')
    list.classList.add('list')
    wrapper.append(list)
    hide(list)

    input.addEventListener('input', (e) => {
        const value = e.currentTarget.value
        setListItems(list, items, value)

        if (value) {
            show(list)
        } else {
            hide(list)
        }
    })

    function setListItems(list, listItems, text) {
        list.innerHTML = ``
        const filteredItems = listItems.filter(item => item.toLowerCase().includes(text.toLowerCase()))
        filteredItems.forEach(item => {
            const el = document.createElement('div')
            el.classList.add('item')
            el.innerHTML = `
                <span>${item}</span>
                `
            list.append(el)
            onClick(list, el, item)
        })
    }

    function onClick(list, el, item) {
        el.addEventListener('click', () => {
            input.value = item
            hide(list)
        })
    }

    function hide(el) {
        el.classList.add('hidden')
    }

    function show(el) {
        el.classList.remove('hidden')
    }
})