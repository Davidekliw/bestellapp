let basketAll = [];
let deliveryPrice = 4.99;
let items = 0;

function toggleBurgerMenu() {
    document.getElementById('lineA').classList.toggle('rotateNegative');
    document.getElementById('lineB').classList.toggle('dNone');
    document.getElementById('lineC').classList.toggle('rotatePositive');
}

function toggleBasket() {
    document.getElementById("basket").classList.toggle('active');
}

function updateCart(count) {
    const badge = document.getElementById('cartCount');
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
}

function renderAllMeals() {
    getMeals(BURGERS, "burgers");
    getMeals(PIZZA, "pizza");
    getMeals(SALADS, "salads");
    renderBasket();
}

function getMeals(category, type) {
    let box = document.getElementById('meal');
    box.innerHTML += getMealsHeadlines(type);
    for (let i = 0; i < category.length; i++) {
        const mealsId = category[i]['mealsId'];
        const path = category[i]['imgPath'];
        const title = category[i]['title'];
        const ingredient = formatIngredients(category[i]['ingredient']);
        let price = category[i]['price'];
        price = formatPrice(price);
        box.innerHTML += generateMealsTemplate(mealsId, path, title, ingredient, price, type);
    }
}

function getMealsHeadlines(categoryHeadings) {
    const path = MENUHEADLINES[categoryHeadings]['imgPath'];
    const title = MENUHEADLINES[categoryHeadings]['title'];
    return generateMealsSectionHeadlines(path, title);
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

function formatIngredients(ingrediets) {
    return ingrediets.join(', ');
}

function formatPrice(price) {
    let formatedPrice = Number(price);
    formatedPrice = formatedPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 });
    return formatedPrice;
}


function getCategoryFromName(type) {
    let category;
    if (type == "burgers") category = BURGERS;
    if (type == "pizza") category = PIZZA;
    if (type == "salads") category = SALADS;
    return category;
}

function lookForIndex(category, mealsId) {
    return category.findIndex(obj => obj.mealsId === mealsId);
}

function addToBasket(type, mealsId) {
    const category = getCategoryFromName(type);
    let position = lookForIndex(category, mealsId);
    let mealsid = category[position]['mealsId'];
    let path = category[position]['imgPath'];
    let title = category[position]['title'];
    let price = category[position]['price'];
    basketAll.push({ "mealsId": mealsId, "path": path, "title": title, "price": price, "amount": 1 });
    updateCart(basketAll.length);
    renderBasket();
    renderBasketContent(category, position);
    toggleButton("addButton", mealsId);
    toggleButton("addedButton", mealsId);
    showSumTotal();
    sumTotal();
}

function toggleButton(button, i) {
    let buttonName = button + i;
    let currentButtonName = document.getElementById(buttonName);
    currentButtonName.classList.toggle("dNone");
}

function renderBasketContent(category, i) {
    let basket = document.getElementById("basketContent");
    basket.innerHTML = '';
    basket.innerHTML = generateBasketContentTemplate(category, i);
    renderDishes();
}


function renderDishes() {
    let dishes = document.getElementById("dishes");
    dishes.innerHTML = '';
    for (let i = 0; i < basketAll.length; i++) {
        let mealsId = basketAll[i]['mealsId'];
        let title = basketAll[i]['title'];
        let price = formatPrice(basketAll[i]['price']);
        let amount = basketAll[i]['amount'];
        dishes.innerHTML += generateDishesTemplate(mealsId, title, price, amount);
    }
}

function showSumTotal() {
    sum = calculateSum();
    document.getElementById('subTotal').innerHTML = `${formatPrice(sum)} €`;
}

function calculateSum() {
    let sum = 0;
    for (let i = 0; i < basketAll.length; i++) {
        let anz = basketAll[i]['amount'];
        let piecePrice = basketAll[i]['price'];
        sum += anz * piecePrice;
    }
    return sum;
}

function sumTotal() {
    let subTotal = calculateSum();
    let sumTotal = Number(subTotal) + Number(deliveryPrice);
    let showSumTotal = document.getElementById("orderButton");
    showSumTotal.innerHTML = `Buy now (${formatPrice(sumTotal)})`;
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


function changeAmount(mealsId, operation) {
    let basketPosition = lookForIndex(basketAll, mealsId);
    let currentAmount = basketAll[basketPosition]["amount"];
    let title = basketAll[basketPosition]["title"];
    let newAmount;
    if (operation == "plus") {
        newAmount = ++currentAmount;
    }
    if (operation == "minus") {
        newAmount = --currentAmount;
    }
    else {
        newAmount = currentAmount;
    }
    if (newAmount > 1) {
        showMinusIcon(mealsId);
    }
    if (newAmount < 2) {
        showGarbageIcon(mealsId);
    }
    let price = basketAll[basketPosition]["price"];
    let newPrice = price * newAmount;
    basketAll[basketPosition]["amount"] = newAmount;
    let priceField = document.getElementById(`${mealsId}_price`);
    priceField.innerHTML = `${formatPrice(newPrice)}€`;
    let amount = document.getElementById(`${mealsId}_amount`);
    amount.innerHTML = newAmount;
    let titleAmount = document.getElementById(`${mealsId}_titleAmount`);
    titleAmount.innerHTML = `${newAmount} x ${title}`;
    showSumTotal();
    sumTotal();
}

function removeFromBasket(mealsId) {
    const position = lookForIndex(basketAll, mealsId);
    if (position != -1) {
        basketAll.splice(position, 1);
        document.getElementById(mealsId).remove();
        toggleButton("addButton", mealsId);
        toggleButton("addedButton", mealsId);
        showSumTotal();
        updateCart(basketAll.length);
        sumTotal();
        renderBasket();
    }
}