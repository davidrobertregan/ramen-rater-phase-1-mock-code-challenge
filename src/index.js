// write your code here

const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const ramenDetailImg = document.querySelector("#ramen-detail img")
const ramenName = ramenDetailImg.nextElementSibling
const ramenRest = ramenName.nextElementSibling
const ramenRating = document.querySelector('span')
const ramenComment = document.querySelector('#comment-text')
console.log(ramenComment)


fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramenArr => {
        console.log(ramenArr)
        for(ramen of ramenArr){ createRamenPic(ramen)
            // console.log(ramen.restaurant)
            // const restaurant = ramen.restaurant
            // const rating = ramen.rating
            // const comment = ramen.comment
            // const ramenPic = document.createElement('img');
            // ramenPic.src = ramen.image;
            // ramenPic.id = ramen.id;
            // // console.log(ramenPic)
            // ramenMenu.appendChild(ramenPic)

            // ramenPic.addEventListener('click', function(){
                
            //     const ramenComment = document.querySelector('#comment-text')
                
            //     ramenDetailImg.src = ramenPic.src
            //     ramenName.innerText = ramen.name;
            //     ramenRest.innerText = restaurant;
            //     ramenRating.innerText = rating;
            //     ramenComment.textContent = comment;
            // })
        }
    })

    // Create a new ramen after submiting the 
    // new-ramen form. The new ramen should be
    //  added to the#ramen-menu div. The new 
    //  ramen does not need to persist; in other
    //   words, if you refresh the page, 
    //   it's okay that the new ramen is 
    //   no longer on the page.


function createRamenPic(ramen){
            const restaurant = ramen.restaurant
            const rating = ramen.rating
            const comment = ramen.comment
            const ramenPic = document.createElement('img');
            ramenPic.src = ramen.image;
            ramenPic.id = ramen.id;
            // console.log(ramenPic)
            ramenMenu.appendChild(ramenPic)

            ramenPic.addEventListener('click', function(){
                
                const ramenComment = document.querySelector('#comment-text')
                
                ramenDetailImg.src = ramenPic.src
                ramenName.innerText = ramen.name;
                ramenRest.innerText = restaurant;
                ramenRating.innerText = rating;
                ramenComment.textContent = comment;
            })
}


const newRamen = document.querySelector("form#new-ramen")

newRamen.addEventListener('submit', event => {
    event.preventDefault()
    const name = newRamen[0].value;
    const restaurant = newRamen[1].value;
    const image = newRamen[2].value
    const rating = newRamen[3].value
    const comment = newRamen[4].value

    const newRamenObj = {
        name: name,
        restaurant: restaurant,
        image: newRamen[2].value,
        rating: rating,
        comment: comment,
    }

    console.log(newRamenObj)

    createRamenPic(newRamenObj);
    
})