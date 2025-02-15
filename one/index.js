const iOne = document.getElementById("ione");
const iTwo = document.getElementById("itwo");
const iThree = document.getElementById("ithree");
const iFour = document.getElementById("ifour");
const iFive = document.getElementById("ifive");
const cont = document.getElementById("container");
const iZero = document.getElementById("izero");

iTwo.addEventListener("mouseenter", () => {
    iOne.style.transform = "translateX(-11.5px)";
});

iTwo.addEventListener("mouseleave", () => {
    iOne.style.transform = "";
});
//--------------------------------------------------
iThree.addEventListener("mouseenter", function () {
    iOne.style.transform = "translateY(-11.5px)";
});

iThree.addEventListener("mouseleave", function () {
    iOne.style.transform = "";
});

iThree.addEventListener("mouseenter", () => {
    iTwo.style.transform = "translate(11.5px, -11.5px)"
});

iThree.addEventListener("mouseleave", () => {
    iTwo.style.transform = ""
});
//---------------------------------------------------
iFour.addEventListener("mouseenter", () => {
    iOne.style.transform = "translate(-11.5px,-11.5px)"
});

iFour.addEventListener("mouseleave", () => {
    iOne.style.transform = ""
});

iFour.addEventListener("mouseenter", () => {
    iTwo.style.transform = "translateY(-11.5px)"
});

iFour.addEventListener("mouseleave", () => {
    iTwo.style.transform = ""
});

iFour.addEventListener("mouseenter", () => {
    iThree.style.transform = "translateX(-11.5px)";
})

iFour.addEventListener("mouseleave", () => {
    iThree.style.transform = ""
});

const myFunc = () => {
    if (iOne.classList.contains("ranimate")) {
        iOne.classList.remove("ranimate");
        iTwo.classList.remove("ranimate");
        iThree.classList.remove("ranimate");
        iFour.classList.remove("ranimate");
    }
    if (iFive.classList.contains("show")) {
        iFive.classList.remove("show")
        iOne.classList.remove("hide");
        iTwo.classList.remove("hide");
        iThree.classList.remove("hide");
        iFour.classList.remove("hide");
        iZero.classList.remove("hide");
        setTimeout(() => {
            iFive.classList.add("hide");
            iOne.classList.add("show");
            iTwo.classList.add("show");
            iThree.classList.add("show");
            iFour.classList.add("show");
            iZero.classList.add("show");
        }, 0);
    } else {
        iFive.classList.remove("hide");
        iOne.classList.remove("show");
        iTwo.classList.remove("show");
        iThree.classList.remove("show");
        iFour.classList.remove("show");
        iZero.classList.add("show");
        setTimeout(() => {
            iFive.classList.add("show");
            iOne.classList.add("hide");
            iTwo.classList.add("hide");
            iThree.classList.add("hide");
            iFour.classList.add("hide");
            iZero.classList.add("hide");
        }, 0);
    }
}

const oneTransform = () => {
    if (iOne.classList.contains("ione")) {
        iFive.style.backgroundImage = "url('../../assets/one.avif')";
    }

    myFunc()
}

const twoTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/two.avif')";
    myFunc()
}

const threeTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/three.avif')";
    myFunc()
}

const fourTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/four.avif')";
    myFunc()
}

const zeroTransform = () => {
    if (iOne.classList.contains("show")) {
        iOne.classList.add("sanimate");
        iTwo.classList.add("sanimate");
        iThree.classList.add("sanimate");
        iFour.classList.add("sanimate");
        if (iOne.classList.contains("ranimate")) {
            iOne.classList.remove("ranimate");
            iTwo.classList.remove("ranimate");
            iThree.classList.remove("ranimate");
            iFour.classList.remove("ranimate");
        }
        setTimeout(() => {
            if (iOne.classList.contains("show")) {
                iOne.classList.remove("show");
                iTwo.classList.remove("show");
                iThree.classList.remove("show");
                iFour.classList.remove("show");
                setTimeout(() => {
                    iOne.classList.add("hide");
                    iTwo.classList.add("hide");
                    iThree.classList.add("hide");
                    iFour.classList.add("hide");
                }, 0)
            }
        }, 300)
    } else if (iOne.classList.contains("hide")) {
        iOne.classList.add("ranimate");
        iTwo.classList.add("ranimate");
        iThree.classList.add("ranimate");
        iFour.classList.add("ranimate");
        if (iOne.classList.contains("sanimate")) {
            iOne.classList.remove("sanimate");
            iTwo.classList.remove("sanimate");
            iThree.classList.remove("sanimate");
            iFour.classList.remove("sanimate");
        }
        setTimeout(() => {
            if (iOne.classList.contains("hide")) {
                iOne.classList.remove("hide");
                iTwo.classList.remove("hide");
                iThree.classList.remove("hide");
                iFour.classList.remove("hide");
                setTimeout(() => {
                    iOne.classList.add("show");
                    iTwo.classList.add("show");
                    iThree.classList.add("show");
                    iFour.classList.add("show");
                }, 0)
            }
        }, 300)
    }
}

