let input = document.querySelector("input");

function debounce(fnc, delay){
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fnc(...args);
        }, delay)
    }  ;
}

input.addEventListener("input", debounce(function(){
    console.log("Loaded search suggestions");
}, 1000)
);