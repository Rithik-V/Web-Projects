let country = document.querySelector('.input_box');
let result = document.querySelector('.result');
let search = document.querySelector('#search_btn');
function out()
{
    let countryName = country.value;
    countryName=countryName.trim();
    let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true`; 
    fetch(finalURL).then((response)=>response.json())
    .then((data)=>{
        let str = data[0].startOfWeek;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        let temp = ""
        let n=data[0].timezones.length;
        for(var i=0;i<n;i++)
        {
            temp=temp+data[0].timezones[i];
            if(i!=n-1)
            temp+=",";
        }
          result.innerHTML=`
          <img src="${data[0].flags.svg}"
    class="flag-img">
    <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
    </div>
    <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
    </div>
    <div class="data-wrapper">
        <h4>Subregion :</h4>
        <span>${data[0].subregion}</span>
    </div>
    <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
    </div>
    <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
    </div>
    <div class="data-wrapper">
        <h4>Timezone(s):</h4>
        <span>${temp}</span>
    </div>
    <div class="data-wrapper">
        <h4>Common Languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
    </div>
    <div class="data-wrapper">
        <h4>Start of the Week:</h4>
        <span>${str2}</span>
    </div>`
    })
    .catch(()=>
    {
        if(countryName.length==0)
        {
            result.innerHTML='<h3>The input field cannot be empty</h3>'
        }
        else
        {
            result.innerHTML=`<h3>Please enter a valid country name`
        }
        setTimeout(()=>
        location.reload(),2000);
    })
}
search.addEventListener('click',out);
country.addEventListener("keypress", (e) =>{
    if (e.key === "Enter"){
        out();
    }
})
