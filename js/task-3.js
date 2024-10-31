function getElementWidth(content, padding, border) {
   let cnt = Number.parseFloat(content)
   let pdd = Number.parseFloat(padding)
   let brd = Number.parseFloat(border)
    return brd + pdd + cnt + pdd + brd
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
