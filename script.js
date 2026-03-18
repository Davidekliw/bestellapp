function toogleBurgerMenu() {
    document.getElementById('nav').classList.toggle('d-flex');
    document.getElementById('lineA').classList.toggle('rotateNegative');
    document.getElementById('lineB').classList.toggle('d-none');
    document.getElementById('lineC').classList.toggle('rotatePositive');
}


function renderAllMeals() {
    getMeals(burgers);
    getMeals(pizza);
    getMeals(salads);
}

function getMeals(type) {
    const category = type;
    let box = document.getElementById('meal');
    box.innerHTML += '';
    for (let i = 0; i < category.length; i++) {
        const path = category[i]['imgPath'];
        const title = category[i]['title'];
        const ingredient = category[i]['ingredient'];
        const price = category[i]['price'];
        box.innerHTML += generateMealsTemplate(path, title, ingredient, price, i)
    }
}