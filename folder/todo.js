addtodo=document.querySelector('.todo')
inputf=document.querySelector('.inputfield')
cont=document.querySelector('.todos')
addtodo.addEventListener('click',function()
{
    var paragraph = document.createElement('p')
    paragraph.innerText=inputf.value
    cont.appendChild(paragraph)
    inputf.innerText=""
    paragraph.addEventListener('click',function()
    {
        paragraph.style.textDecoration="line-through"
    })
    paragraph.addEventListener('dblclick',function()
    {
        cont.removeChild(paragraph);
    })
})
