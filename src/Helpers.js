const colors = [
    '#9e4730', 
    '#1a603a', 
    '#e4854f', 
    '#f80fbe', 
    '#42465e', 
    '#0bc95f', 
    '#95b030',
    '#662b22',
    '#e8eb5f',
    '#76f95c'
]

const randColors = (colors) => colors[Math.floor(Math.random() * colors.length)];



export {randColors, colors};