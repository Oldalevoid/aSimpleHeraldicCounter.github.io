let increase = document.getElementById("Increase");
        let decrease = document.getElementById("Decrease");
        let reset = document.getElementById("Reset")
        let number = document.querySelector("h1");
        

        function buttonIncrease(){
            let result = Number(number.textContent);
            result++;
            
            console.log (result);
            return result;
        }
        function buttonDecrease(){
            let result = Number(number.textContent);
            result--;
            console.log (result);
            return result;
        }

        function buttonZero(){
            let result = Number(number.textContent) * 0;
            return result;
        }


        increase.addEventListener("click", ()=>{
            number.innerHTML = buttonIncrease();
        });

        decrease.addEventListener("click", ()=>{
            number.innerHTML=buttonDecrease();
        });

        reset.addEventListener("click", ()=>{
            number.innerHTML=buttonZero();
        });

       

