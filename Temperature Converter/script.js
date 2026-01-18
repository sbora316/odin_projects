
let btn= document.getElementsByTagName("button")[0];
/**
 * when this is true, we will convert celsius to Fht
 * when this is false, we will conver Fht to celsius
 */
let celsiusToFht = true;

document.getElementById("btn").innerHTML = "&darr;";

btn.onclick= function(){
    if (celsiusToFht) {
        let celsius = document.getElementById("CelsiusInput").value;
        celsius = Number(celsius);
        const Fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("FahrenheitInput").value= Fahrenheit;
    } else {
        let fht = document.getElementById("FahrenheitInput").value;
        fht = Number(fht);
        const celsius = (fht - 32) * (5 / 9);
        document.getElementById("CelsiusInput").value= celsius;
    }
    celsiusToFht = !celsiusToFht;
    document.getElementById("btn").innerHTML = celsiusToFht ? "&darr;" : "&uarr;";
};

