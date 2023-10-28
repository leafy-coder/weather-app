const submitBtn = document.getElementById('submit_btn');
const dataHide = document.querySelector('.middle_layer')

// API Implementation
submitBtn.addEventListener('click', async(event) => {
    event.preventDefault();
    if (document.getElementById('cityname').value == '' || document.getElementById('cityname').value == null) {
        document.getElementById('city_name').innerText = "Please Enter A Valid City Name"
        dataHide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('cityname').value}&appid=012dc06b08ddbf2e4712a8062262df35`;
            let resData = await fetch(url);
            const data = await resData.json();
            // console.log(data);
            const arrData = [data];
            document.getElementById('city_name').innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`
            document.getElementById('temp').innerHTML = arrData[0].main.temp;
            
            const tempMode = arrData[0].weather[0].main

            if(tempMode === "Clear"){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }else if(tempMode === "Clouds"){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if(tempMode === "Rain"){
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                document.getElementById('temp_status').innerHTML = "<i class='fas fa-cloud' style='color: #eccc68;'></i>"
            }
            dataHide.classList.remove('data_hide')
        }
        catch{
            document.getElementById('city_name').innerText="Please Check The Name You Entered";
            dataHide.classList.add('data_hide')
        }
    }
})