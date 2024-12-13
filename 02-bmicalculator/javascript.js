const form = document.querySelector('form')
//this usecase will give you empty values
//const height = parseInt(document.qureySelector('#height).value)

form.addEventListener('sunmit', function(e){
   e.preventDefult()
   const height = parseInt(document.qureySelector('#height').value)
   const weight = parseInt(document.qureySelector('#weight').value)
   const results = document.qureySelector('#results')
   if (height === ''|| height < 0 || isNaN(height)){
       results.innerHTML =` ${height}`;
   }else if (weight === ''|| weight < 0 || isNaN(weight)){
       results.innerHTML =` ${weighteight}`;
   }else{
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
       // show the result
       results.innerHTML = `<span>${bmi}</span>`;
   }
});