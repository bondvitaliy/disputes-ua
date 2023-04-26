// jQuery

// let counter = 1;
// function change_word() {
//     // console.log(counter);
//     $('[class*=offer]').hide();
//     $(`.offer-${counter}`).show();
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);



// JavaScript


// option 1

// let counter = 1;
// function change_word() {
//     const offers = document.querySelectorAll('[class*=offer]');
//     offers.forEach((offer) => {
//         offer.style.display = 'none';
//     });
//     const currentOffer = document.querySelector(`.offer-${counter}`);
//     currentOffer.style.display = 'block';
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);


// option 2

let counter = 1;
function change_word() {
    const offers = document.querySelectorAll('[class*=offer]');
    offers.forEach((offer) => {
        offer.style.display = 'none';
    });
    const currentOffer = document.querySelector(`.offer-${counter}`);
    currentOffer.style.display = 'inline-block';
    counter = counter >= 5 ? 1 : ++counter;
}

setInterval(change_word, 2000);


// option 3

// let counter = 1;
// function change_word() {
//     const offers = document.querySelectorAll('[class*=offer]');
//     offers.forEach((offer) => {
//         offer.style.opacity = '0';
//         offer.style.transform = 'scale(0.9)';
//         setTimeout(() => {
//             offer.style.display = 'none';
//         }, 800);
//     });
//     const currentOffer = document.querySelector(`.offer-${counter}`);
//     currentOffer.style.display = 'inline-block';
//     setTimeout(() => {
//         currentOffer.style.opacity = '1';
//         currentOffer.style.transform = 'scale(1)';
//     }, 50);
//     counter = counter >= 5 ? 1 : ++counter;
// }

// setInterval(change_word, 2000);

