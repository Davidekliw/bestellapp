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

function generateBasketContentTemplate() {
    return `
        <div class="dishes" id="dishes"></div>
            <div class="buttomBox">
                <div class="calculationTable">
                <div class="subTotalLine">
                        <div>Subtotal</div>
                    <div id="subTotal"></div>
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
            <button class="orderButton" id="orderButton"></button>
        </div>
    `;
}


function generateDishesTemplate(nbr, title, price, amount) {
    return `
        <div class="mealBasketBox">
            <div class="titleBasketLine">
                <div class="amount">${amount}</div>
                <div class="mealTitel">x ${title}</div>
            </div>
            <div class="bottomBasketBox">
                <div class="leftBasketBox">
                    <img src="assets/icons/delete.png">
                    <div onclick="addMore(${nbr})">1+</div>
                </div>
                <div class="rightBasketBox">${price}€</div>
            </div>
        </div>
    `;
}