const textInput = document.getElementById("inputText")
const result = document.getElementById("result")
const clip = document.getElementById("clip")
const convert = document.getElementById("convert")
let arrText = []
let res = ''
let value = ''
let arrValue = []
textInput.addEventListener("keyup", (e) => {
    value = e.target.value
    arrText.push(value)
    getResult()
});
const convertCode = () => {
    if(i==0){
        inputLabel.querySelector("span").textContent='Code'
        resultLabel.innerHTML='Text Result'
        document.querySelectorAll("#main .bg-primary").forEach((b)=>{
            b.classList.remove("bg-primary")
            b.classList.add("bg-light")
        })
        document.querySelectorAll("#main .text-white").forEach((b)=>{
            b.classList.remove("text-white")
            b.classList.add("text-primary")
        })
        i=1
    }else{
        document.querySelectorAll("#main .bg-light").forEach((b)=>{
            b.classList.remove("bg-light")
            b.classList.add("bg-primary")
        })
        document.querySelectorAll("#main .text-primary").forEach((b)=>{
            b.classList.remove("text-primary")
            b.classList.add("text-white")
        })
        inputLabel.querySelector("span").textContent='Text'
        resultLabel.innerHTML='Code Result'
        i=0
    }
}
convert.addEventListener("click",()=>{
    convertCode()
})
const getResultText = () => {
    arrValue = ''
    res = ''
    arrValue = arrText[arrText.length - 1]
    arrValue.split("").forEach(element => {
        if (element !== undefined) {
            switch (element.toLowerCase()) {
                case '1':
                    res += 'a'
                    break
                case '2':
                    res += 'b'
                    break
                case '3':
                    res += 'c'
                    break
                case '4':
                    res += 'd'
                    break
                case '5':
                    res += 'e'
                    break
                case '6':
                    res += 'f'
                    break
                case '7':
                    res += 'g'
                    break
                case '8':
                    res += 'h'
                    break
                case '9':
                    res += 'i'
                    break
                case '10':
                    res += 'j'
                    break
                case '11':
                    res += 'k'
                    break
                case '12':
                    res += 'l'
                    break
                case '13':
                    res += 'm'
                    break
                case '14':
                    res += 'n'
                    break
                case '15':
                    res += 'o'
                    break
                case '16':
                    res += 'p'
                    break
                case '17':
                    res += 'q'
                    break
                case '18':
                    res += 'r'
                    break
                case '19':
                    res += 's'
                    break
                case '20':
                    res += 't'
                    break
                case '21':
                    res += 'u'
                    break
                case '22':
                    res += 'v'
                    break
                case '23':
                    res += 'w'
                    break
                case '24':
                    res += 'x'
                    break
                case '25':
                    res += 'y'
                    break
                case '26':
                    res += 'z'
                    break
                case ' ':
                    res += ' - '
                    break
                default:
                    res += ''
                    break
            }
        }
    })
    result.innerHTML = res
}
