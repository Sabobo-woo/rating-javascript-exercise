const textRating = document.querySelector('.rating__value')
const stars = document.querySelectorAll('.rating__star')




stars.forEach((star, clickedStarIdx) => {

    star.addEventListener('click', () => {
        stars.forEach((star, starIdx) => {
            if (starIdx <= clickedStarIdx) {
                star.classList.add('rating__star--on')
            } else {
                star.classList.remove('rating__star--on')
            }
        })

        textRating.textContent = clickedStarIdx + 1


    })


    // for (i = 0; i = stars.length; i++)
    //   star[i]   




    // star.classList.remove('rating__star--on')
    // textRating.textContent = index + 1;


})


