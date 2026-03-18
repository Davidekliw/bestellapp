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

