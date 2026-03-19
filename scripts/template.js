function generateMealsTemplate(path, title, ingredient, price, i) {
    return `
            <div id="mealBox" class="mealBox">
                <img class="mealImg" src="${path}" alt="">
                <div class="informationsBox">
                    <div class="discriptionBox">
                        <h5>${title}</h5>
                        <div class="ingredient" id="ingredient">${ingredient}</div>
                    </div>
                    <div class="rightBox">
                        <div class="price" id="price">${price} €</div>
                        <button>Add to basket</button>
                    </div>
                </div>
            </div>
        `
};

function generateMealsSectionHeadlines(path, title) {
    return `
        <div class="mealsSectionHeadlines" id="mealsSectionHeadlines">
            <img src="${path}" alt="">
                <div class="textBox">
                    <div class="categoryTitle">${title}</div>
                </div>
            <div class="backgroundColor"></div>
        </div>
        `
};