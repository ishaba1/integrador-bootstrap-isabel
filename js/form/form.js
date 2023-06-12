form.className = 'container bg-info bg-opacity-75 p-4 rounded'

for (let tag of form) {
    tag.classList.add('my-3')
}

totalTag.style.fontWeight = 'bold'
totalTag.innerText = totalText