var input = document.querySelector('.search');
 var btn1 = document.querySelector('.submitButton');
 let container = document.querySelector(".container")
 btn1.addEventListener('click',function(event){
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)//fetching api data
     .then(response=>response.json())//text --> json
     .then(data=>{
         container.innerHTML = ""
         let food=data['meals']
         food.forEach(ele=>  {
             let {strMeal,strMealThumb,strInstructions}=ele
             let result= `<div>
                 <h2>${strMeal}</h2>
                 <img src="${strMealThumb}" class="img"  alt="image" >
                 <h3>${strInstructions}</h3>
                 </div> `
             container.innerHTML += result
         })
     }).catch(err=>alert("Nothing found"))

 })