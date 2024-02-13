

const product = [
    {
        id: 0,
        image: './image 20.jpg',
        title: 'Rice',
        price: 100,
        category: 'Food',
    },
    {
        id: 1,
        image: './image 30.jpg',
        title: 'Chicken',
        price: 500,
        category: 'Meat',
    },
    {
        id: 2,
        image: './image 31a.jpg',
        title: 'Orange juice',
        price: 100,
        category: 'Beverage',
    },
    {
        id: 3,
        image: './image 35.jpg',
        title: 'Superghetti',
        price: 150,
        category: 'Food',
    },

    {
        id: 5,
        image:'./image 35.jpg',
        price: 200,
        category: stew,
    },
];

const categories = [...new Set(product.map((item) => item.category))];

let i = 0;
var cart = [];

function addtocart(a) {const product = [
    {
        id: 0,
        image: './image 20.jpg',
        title: 'Rice',
        price: 100,
        category: 'Food',
    },
    {
        id: 1,
        image: './image 30.jpg',
        title: 'Chicken',
        price: 500,
        category: 'Meat',
    },
    {
        id: 2,
        image: './image 31a.jpg',
        title: 'Orange juice',
        price: 100,
        category: 'Beverage',
    },
    {
        id: 3,
        image: './image 35.jpg',
        title: 'Superghetti',
        price: 150,
        category: 'Food',
    },

    {
        id: 5,
        image:'./image 35.jpg',
        price: 200,
        category: stew,
    },
];

    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty ";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartitem").innerHTML = cart.map((items) => {
            const { image, title, price } = items;
            total += price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${image}'>
                    </div>
                    <p style='font-size:12px'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>
            `;
        }).join('');

        document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
    }
}

// Initial display
document.getElementById('root').innerHTML = categories
    .map((category) => {
        const itemsInCategory = product.filter((item) => item.category === category);
        return itemsInCategory
            .map((item) => {
                const { image, title, price } = item;
                return `
                    <div class='box'>
                        <div class='img-box'>
                            <img class='images' src='${image}' alt='${title}'></img>
                        </div>
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>${price}.00</h2>
                            <button onclick="addtocart(${i++})">Add to cart</button>
                        </div>
                    </div>
                `;
            })
            .join('');
    })
