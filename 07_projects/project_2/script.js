const form = document.querySelector("form");
form.addEventListener("submit",(e) => {
    e.preventDefault(); // That is used to hold the submit values on the page.
    console.log(e);
    const height = parseInt(document.querySelector("#height").value);
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results")
    
    // Checking some conditions...
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Enter a valid height value...`;
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Enter a valid weight value...`;
    }
    else{
        const bmi = weight*height;
        console.log(bmi);
        result.innerHTML = `${bmi}`;
        if(bmi < 19){
           const p = document.createElement('p');
           p.innerText = "The paitent BMI is less than 19";
           form.appendChild(p).style.marginLeft = "70px";

        }
    }

    

})
