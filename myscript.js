addtodo=document.querySelector('.todo')
inputf=document.querySelector('.inputfield')
cont=document.querySelector('.todos')
addtodo.addEventListener('click',function()
{
    var paragraph = document.createElement('p')
    paragraph.innerText=inputf.value
    var int = document.createElement('input')
    int.type='checkbox'
    int.id='123'
    var lab = document.createElement('label')
    lab.for = '123'
    lab.innerText=paragraph.innerText
    cont.appendChild(int)
    cont.appendChild(lab)
    paragraph.innerText=""
    cont.appendChild(paragraph)
    inputf.value=""
    paragraph.addEventListener('click',function()
    {
        paragraph.style.textDecoration="line-through"
    })
    paragraph.addEventListener('dblclick',function()
    {
        cont.removeChild(paragraph);
    })
})
