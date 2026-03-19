function toogleBurgerMenu() {
    document.getElementById('nav').classList.toggle('d-flex');
    document.getElementById('lineA').classList.toggle('rotateNegative');
    document.getElementById('lineB').classList.toggle('d-none');
    document.getElementById('lineC').classList.toggle('rotatePositive');
}


function renderAllMeals() {
    getMeals(BURGERS, "burgers");
    getMeals(PIZZA, "pizza");
    getMeals(SALADS, "salads");
}

function getMeals(category, type) {
    let box = document.getElementById('meal');
    box.innerHTML += getMealsHeadlines(type);
    for (let i = 0; i < category.length; i++) {
        const path = category[i]['imgPath'];
        const title = category[i]['title'];
        const ingredient = category[i]['ingredient'];
        let price = category[i]['price'];
        price = changePriceFormat(price);
        box.innerHTML += generateMealsTemplate(path, title, ingredient, price, i)
    }
}

function getMealsHeadlines(categoryHeadings) {
    const path = MENUHEADLINES[categoryHeadings]['imgPath'];
    const title = MENUHEADLINES[categoryHeadings]['title'];
    return generateMealsSectionHeadlines(path, title);
}
