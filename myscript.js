cells = document.querySelectorAll(".tile")
cells=Array.from(cells)
console.log(cells)
currentplayer = "X";
re= document.querySelector("#reset");
console.log(re);
winningcombinations=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 
function checkforwinner()
{
    winningcombinations.forEach(function(combinations)
    {
       let ok = combinations.every(idx=>cells[idx].innerText==currentplayer)
       if(ok)
       {
        win = document.querySelector(".title");
        win.innerText="Player "+currentplayer+" Won";
       }
    })
}
cells.forEach(function(tile) {
        tile.addEventListener('click',function()
        {
            if(tile.innerText=="")
            {
                tile.innerText=currentplayer;
               checkforwinner(currentplayer);
               if(currentplayer=="X")
               {
                   currentplayer="O";
               }
               else
               {
                   currentplayer="X"
               }
            }
        })
});
re.addEventListener('click',function()
{
    cells.forEach(function(tile)
    {
        tile.innerText=""
    })
})
