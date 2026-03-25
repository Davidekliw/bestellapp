let basketAll = [];
let deliveryPrice = 4.99;
let items = 0;

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
    let path = category[position]['imgPath'];
    let title = category[position]['title'];
    let price = category[position]['price'];
    basketAll.push({ "mealsId": mealsId, "path": path, "title": title, "price": price, "amount": 1 });
    renderBasketContent(category, position);
    updateFrontEnd(mealsId);
}

function updateFrontEnd(mealsId) {
    renderBasket();
    toggleButton("addButton", mealsId);
    toggleButton("addedButton", mealsId);
    updateCart(basketAll.length);
    showSumTotal();
    sumTotal();
}

function renderBasketContent(category, i) {
    document.getElementById("basketContent").innerHTML = generateBasketContentTemplate(category, i);
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
    document.getElementById("orderButton").innerHTML = `Buy now (${formatPrice(sumTotal)}€)`;
    document.getElementById("totalLine").innerHTML = `${formatPrice(sumTotal)}€`;
}

function calculateNewAmount(currentAmount, operation) {
    if (operation === "plus") return currentAmount + 1;
    if (operation === "minus") return currentAmount - 1;
    return currentAmount;
}

function updateAmountIcon(newAmount, mealsId) {
    if (newAmount > 1) {
        showMinusIcon(mealsId);
    } else {
        showGarbageIcon(mealsId);
    }
}

function updateBasketItemView(mealsId, newAmount, title, newPrice) {
    document.getElementById(`${mealsId}_price`).innerHTML = `${formatPrice(newPrice)}€`;
    document.getElementById(`${mealsId}_amount`).innerHTML = newAmount;
    document.getElementById(`${mealsId}_titleAmount`).innerHTML = `${newAmount} x ${title}`;
}

function changeAmount(mealsId, operation) {
    let basketPosition = lookForIndex(basketAll, mealsId);
    let currentAmount = basketAll[basketPosition]["amount"];
    let title = basketAll[basketPosition]["title"];
    let price = basketAll[basketPosition]["price"];

    let newAmount = calculateNewAmount(currentAmount, operation);
    let newPrice = price * newAmount;

    basketAll[basketPosition]["amount"] = newAmount;

    updateAmountIcon(newAmount, mealsId);
    updateBasketItemView(mealsId, newAmount, title, newPrice);
    showSumTotal();
    sumTotal();
}

function removeFromBasket(mealsId) {
    const position = lookForIndex(basketAll, mealsId);
    if (position != -1) {
        basketAll.splice(position, 1);
        document.getElementById(mealsId).remove();
        updateFrontEnd(mealsId);
    }
}