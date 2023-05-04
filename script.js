console.log("test");

function searchWeather() {
    var citySearch= document.querySelector(".city")
    var citySearchButton = document.querySelector(".searchButton")
    citySearchButton.addEventListener("click",function(){
        console.log (this)
    })
    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}Seattle&appid={71e797e953c8094754a96f4724398354}`)
        .then(Response => Response.json())
        .then(data=>{
            console.log (data)


 












            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={71e797e953c8094754a96f4724398354}`)
            .then(Response => Response.json())
            .then(data=> {
                console.log (data)
            })
        })
    }
}