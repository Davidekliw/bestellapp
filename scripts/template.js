function generateMealsTemplate(mealsId, path, title, ingredient, price, type) {
    return `
            <div id="mealBox" class="mealBox">
                <img class="mealImg" src="${path}" alt="">
                <div class="informationsBox">
                    <div class="discriptionBox">
                        <h5>${title}</h5>
                        <div class="ingredient" id="ingredient">${ingredient}</div>
                    </div>
                    <div class="rightBox">
                        <div class="price" id="price">${price}€</div>
                        <button class="addButton" onclick="addToBasket('${type}', '${mealsId}')" id="addButton${mealsId}">Add to basket</button>
                        <button class="dNone addedButton" id="addedButton${mealsId}">Added 1</button>
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
                    <div id="totalLine"></div>
                </div>
            </div>
            <button onclick="orderBasket()" class="orderButton" id="orderButton"></button>
        </div>
    `;
}


function generateDishesTemplate(mealsId, title, price, amount) {
    return `
        <div class="mealBasketBox" id="${mealsId}">
            <div class="titleBasketLine">
                <div id="${mealsId}_titleAmount" class="mealTitle">${amount} x ${title}</div>
                <img id="${mealsId}_garbage" onclick="removeFromBasket('${mealsId}')" class="dNone garbageIcon" src="assets/icons/delete.png">
            </div>
            <div class="bottomBasketBox">
                <div class="leftBasketBox">
                    <img id="${mealsId}_delete" onclick="removeFromBasket('${mealsId}')" class="garbageIcon" src="assets/icons/delete.png">
                    <div id="${mealsId}_minus" class="dNone plusAndMinus" onclick="changeAmount('${mealsId}', 'minus')">&nbsp;-&nbsp;</div>
                    <div id="${mealsId}_amount">${amount}</div>
                    <div id="${mealsId}_add" class="plusAndMinus" onclick="changeAmount('${mealsId}', 'plus')">&nbsp;+</div>
                </div>
                <div id="${mealsId}_price" class="rightBasketBox">${price}€</div>
            </div>
        </div>
    `;
}