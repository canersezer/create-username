const inp = document.querySelector('.input')
const btn = document.querySelector('.button')
const userName = document.querySelector('.p')


btn.addEventListener('click',()=>{
    if(inp.value !== ' '){
    const create = inp.value;
    let dizi = create.split('@')
    userName.textContent = `Kullanici Adiniz : ${dizi[0]} `


    inp.value =''
}
},)