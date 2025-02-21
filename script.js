const nav = document.getElementsByClassName("underline");
const myModal = document.getElementById("myModal");

const aOnclick = () => {
    if (myModal.style.display = "none") {
        setTimeout(() => {
            myModal.style.display = "flex"
        }, 200)
    }
}

const bOnclick = () => {
    if (myModal.style.display = "flex") {
        setTimeout(() => {
            myModal.style.display = "none"
        }, 200)
    }
}