document.querySelector('.elastic').oninput = function() {
    let val = this.value.trim().toLowerCase() 
    let elasticItems = document.querySelectorAll('.elastic li')    
    if (val != '') {
        elasticItems.forEach(function(elem){            
            if (elem.innerText.search(val) == -1) {                             
                elem.classList.add('hide')
                elem.innerHTML = elem.innerText.toLowerCase()  
            } else {
                elem.classList.remove('hide')
                let str = elem.innerText
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
            }
        })
    } else {
        elasticItems.forEach((elem) => {
            elem.classList.remove('hide')
            elem.innerHTML = elem.innerText
        })
    }
}

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len)
}