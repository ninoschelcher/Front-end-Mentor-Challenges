const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("nav");


hamburger.addEventListener('click', () => {
    if(!navigation.classList.contains('on')) {
        navigation.classList.add('on');
    } else {
        navigation.classList.remove('on');
    }
})