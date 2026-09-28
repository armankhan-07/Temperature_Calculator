const cel = document.getElementById("celsius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");

function computeTemp(event){
    console.log("Function called");
    console.log(event.target.name);
    console.log(event.target.value);

      const currentVal = +event.target.value;
      console.log(cel);
console.log(fah);
console.log(kel);

      switch(event.target.name){
        case "celsius":
            kel.value=(currentVal+273.15).toFixed(2);
            fah.value=((currentVal*(9/5))+32).toFixed(2);
            break;
        case "fahrenheit":
            kel.value=((currentVal-32)*(5/9)+273.15).toFixed(2);
            cel.value=((currentVal-32)*(5/9)).toFixed(2);
            break;
        case "kelvin":
            cel.value=(currentVal-273.15).toFixed(2);
            fah.value=((currentVal-273.15)*(9/5)+32).toFixed(2);
            break;
        default:
            break;
      }
}
