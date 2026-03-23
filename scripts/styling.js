function toggleBurgerMenu() {
    document.getElementById('lineA').classList.toggle('rotateNegative');
    document.getElementById('lineB').classList.toggle('dNone');
    document.getElementById('lineC').classList.toggle('rotatePositive');
}

function toggleBasket() {
    document.getElementById("basket").classList.toggle('active');
}

function toggleButton(button, i) {
    let buttonName = button + i;
    document.getElementById(buttonName).classList.toggle("dNone");
}

function showMinusIcon(mealsId) {
    document.getElementById(`${mealsId}_minus`).classList.remove("dNone");
    document.getElementById(`${mealsId}_delete`).classList.add("dNone");
    document.getElementById(`${mealsId}_garbage`).classList.remove("dNone");
}

function showGarbageIcon(mealsId) {
    document.getElementById(`${mealsId}_minus`).classList.add("dNone");
    document.getElementById(`${mealsId}_delete`).classList.remove("dNone");
    document.getElementById(`${mealsId}_garbage`).classList.add("dNone");
}

function renderBasket() {
    if (basketAll.length > 0) {
        document.getElementById("emptyBasked").style.display = "none";
        document.getElementById("basketContent").style.display = "flex";
    }
    else {
        document.getElementById("emptyBasked").style.display = "flex";
        document.getElementById("basketContent").style.display = "none";
    }
}

function updateCart(count) {
    const badge = document.getElementById('cartCount');
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
}