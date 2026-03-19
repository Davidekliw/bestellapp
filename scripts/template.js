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

function generateBasket() {
    return `<h5 class="basketTitle">Your Basket</h5>
            <div class="buttomBox">
                <div class="calculationTable">
                    <div class="subtotalLine">
                        <div>Subtotal</div>
                        <div></div>
                    </div>
                    <div class="deliverFee">
                        <div>Delivery fee</div>
                        <div>4,99€</div>
                    </div>
                    <div class="decorationLine"></div>
                    <div class="totalLine">
                        <div>Total</div>
                        <div></div>
                    </div>
                </div>
                <button class="orderButton">Buy now</button>
            </div>`
};

function generateEmptyBasket() {
    return `
            <div class="emptyBasked">
                <h5 class="basketTitle">Your Basket</h5>
                <div class="textBox">
                    <p>Nothing here yet.</p>
                    <p>Go ahead and choose something</p>
                    <p>delicious!</p>
                </div>
                <img src="assets/icons/basket_creme.png" alt="">
            </div>`
}