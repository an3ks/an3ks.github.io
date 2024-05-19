document.addEventListener("DOMContentLoaded",function(){
    const webUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const myApi = 'zNZqUWo0OFzACGEH1auO7oEQVa7rpaPnhv123AFy';
    const pic = document.querySelector('.pic');
    pic.addEventListener("click", function() {
        const date = "&date="+randomDate();
        const finalUrl = webUrl+myApi+date;

        fetch(finalUrl)
        .then(resp =>{
            if (!resp.ok){
                throw new Error('Ошибка загрузки изображения: ' + response.statusText);  
            }
            else{
                return resp.json();
            }
        })
        .then(data=>{
            if (data.media_type === 'image'){
                pic.innerHTML = `<img src="${data.url}" alt = "${data.title}"/>`;
            }
            else{
                throw new Error('Медиа не является изображением');
            }
        })
        .catch(err =>{
            console.error(err);
            pic.innerHTML = '<p>Непредвиденная ошибка :(</p> <br> <p>Пожалуйста нажмите еще раз</p>';
        })
    });
    function randomDate(){
        const firstDate = new Date(2005, 8, 9);
        const currentDate = new Date();
        const randomDate = new Date(firstDate.getTime() + (Math.random() * (currentDate.getTime() - firstDate.getTime())));
        //вычитается в мс время начальной и текущей даты 
        //и умножается на число от 0.0 до 1.0 => получаем случайно количество мс, преобразуем это в дату
        const randomYear = randomDate.getFullYear();
        const randomMonth = String(randomDate.getMonth() + 1).padStart(2, '0');
        const randomDay = String(randomDate.getDate()).padStart(2, '0');
        console.log(randomYear)
        console.log(randomMonth)
        console.log(randomDay)
        return `${randomYear}-${randomMonth}-${randomDay}`;
    };

});