let httpReq = new XMLHttpRequest(); //0
let posts = [];
let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let searchInput=document.getElementById('searchInput')
let subscribeInput=document.getElementById('subscribeInput')
let searchBtn=document.getElementById('searchBtn')
httpReq.open('GET', 'https://api.weatherapi.com/v1/forecast.json?key=b73aee4d88ec4d97b7c12221212804&q=lond&days=7')  //stage 1
httpReq.send();   //car 2

httpReq.addEventListener('readystatechange', function ()
{
    if (httpReq.readyState == 4)
    {
        posts = JSON.parse(httpReq.response);
        displyPosts()
    }
})

function displyPosts()
{
    var cartona = '';
        cartona +=
        `
        <div class="col-lg-4">
                    <div class="day d-flex justify-content-between p-1">
                        <p>${days[0]}</p>
                        <p>${posts.forecast.forecastday[0].date}</p>
                    </div>
                    <div class="data h-100 p-3">
                        <p>${posts.location.name}</p>
                        <p>${posts.location.country}</p>
                        <div class="row">
                        <h2 class="col-sm-8">${posts.current.temp_c}<sup>o</sup>C</h2>
                        <img class=" col-sm-4" src="${posts.current.condition.icon}" alt="">
                        </div>
                        <h5 class="my-3">${posts.current.condition.text}</h5>
                        <div class="d-flex justify-content-start">
                            <p><img src="img/1.png" alt=""> 20%</p>
                            <p class="mx-3"><img src="img/2.png" alt=""> 18km/h</p>
                            <p><img src="img/3.png" alt=""> East</p>
                        </div>
                    </div>
        </div>
        <div class="col-lg-4">
                    <div class="day2 text-center p-1">
                        <p>${days[1]}</p>
                    </div>
                    <div class="data next h-100 pt-5 text-center">
                        <img src="${posts.forecast.forecastday[1].day.condition.icon}" alt="" class="my-2">
                        <h3>${posts.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h3>
                        <h4 class="my-3">${posts.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h4>
                        <h5 class="my-5">${posts.forecast.forecastday[1].day.condition.text}</h5>
                    </div>
        </div>
        <div class="col-lg-4">
                    <div class="day text-center p-1">
                        <p>${days[2]}</p>
                    </div>
                    <div class="data h-100 pt-5 text-center">
                        <img src="${posts.forecast.forecastday[2].day.condition.icon}" alt="" class="my-2">
                        <h3>${posts.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h3>
                        <h4 class="my-3">${posts.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h4>
                        <h5 class="my-5">${posts.forecast.forecastday[2].day.condition.text}</h5>
                    </div>
        </div>
        `
    document.getElementById('weatherData').innerHTML = cartona;
}

searchInput.onkeyup = function ()
{
    if (searchInput.value)
    {
        httpReq.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=b73aee4d88ec4d97b7c12221212804&q=${searchInput.value}&days=7`)  //stage 1
        httpReq.send();   //car 2
        httpReq.addEventListener('readystatechange', function ()
        {
            if (httpReq.readyState == 4)
            {
                posts = JSON.parse(httpReq.response);
                // let background = document.querySelector('.content');
                // background.style.cssText = `background-image: url(../img/${searchInput.value}.jpg)`;  اي صورة ليها خلفية خاصة بها
                if (posts.location.country == 'مصر' || posts.location.country == 'Egypt' )
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/giza.jpg)`;
                }
                else if (posts.location.country == 'المملكة العربية السعودية' && posts.location.name == 'مكة' || posts.location.name == 'Mecca')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/mecca.jpg)`;
                }
                else if (posts.location.country == 'المملكة العربية السعودية' || posts.location.country == 'Saudi Arabia')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/SaudiArabia.jpg)`;
                }
                else if (posts.location.country == 'France'||posts.location.country == 'فرنسا')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/paris.jpg)`;
                }
                else if (posts.location.country == 'China'||posts.location.country == 'الصين')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/China.jpg)`;
                }
                else if (posts.location.country == 'Thailand'||posts.location.country == 'تايلاند')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/Thailand.jpg)`;
                }
                else if (posts.location.country == 'United States of America'||posts.location.country == 'USA United States of America' ||posts.location.country == 'الولايات المتحدة')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/Washington.jpg)`;
                }
                else if (posts.location.country == 'United Kingdom'||posts.location.country == 'المملكة المتحدة')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/london.jpg)`;
                }
                else if (posts.location.country == 'United Arab Emirates'||posts.location.country == 'الإمارات العربية المتحدة')
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/Dubai.jpg)`;
                }
                else
                {
                    let background = document.querySelector('.content');
                    background.style.cssText =`background-image: url(../img/banner.png)`;
                }
            }
            else
            {
                let background = document.querySelector('.content');
                background.style.cssText =`background-image: url(../img/banner.png)`;
            }
        })
    }
    displyPosts()
}

function editInputs()
{
    searchInput.style.cssText = 'background-color: #1E202B;';
    subscribeInput.style.cssText ='background-color: #1E202B;';
}
editInputs();