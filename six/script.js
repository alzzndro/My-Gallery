const btn = document.getElementById("btn");
const loading = document.getElementById("loading");
const loadingTwo = document.getElementById("loading-two");
const loadingOne = document.getElementById("loading-one");
const loadingThree = document.getElementById("loading-three");

const paraCallOne = (callback) => {
    loadingTwo.classList.add("animate");
    setTimeout(() => {
        callback();
    }, 3000)
}

const paraCall = () => {
    loadingThree.classList.add("animate");
}

const buttonPressed = () => {
    paraCallOne(paraCall);
}
