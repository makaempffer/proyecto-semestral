var cargados = false;
const productInfo = 
{
    "products": 
    [
        {
            "id_product": "0",
            "product_name": "Ratón",
            "product_desc": "Un ratón para morder",
            "product_link": '../gatos/imagenes-gatos/raton.jpg',
            "product_price": "$1990"
        },

        {
            "id_product": "1",
            "product_name": "Pelota tenis",
            "product_desc": "Pelota de tenis anti-alérgica!",
            "product_link": "../gatos/imagenes-gatos/raton.jpg",
            "product_price": "$5300"
        },


        {
            "id_product": "2",
            "product_name": "Freesbee",
            "product_desc": "Freesbe resistente a mordidas!",
            "product_link": "../gatos/imagenes-gatos/raton.jpg",
            "product_price": "$7590"
        },

        {
            "id_product": "3",
            "product_name": "Hueso Goma",
            "product_desc": "Hueso de goma cachorros!.",
            "product_link": "../gatos/imagenes-gatos/raton.jpg",
            "product_price": "$2500"
        }
    ]
}

function fillProducts() 
{
    if (cargados == false)
    {
        var count = 0;
        for (var product in productInfo["products"])
        {
    
            $("#product-table").append(
            
                "<td>" + "<div class='product-container'>" +
                "<h3 class='product-name'>" + productInfo["products"][count]["product_name"] + "</h3>"+
                "<p class='product-desc'>" + productInfo["products"][count]["product_desc"] + "</p>"+
                "<img class='product-img' src="+ "'"+ productInfo["products"][count]["product_link"] +"'"+" alt='Rata'>"+
                "<p class='product-precio'>" + productInfo["products"][count]["product_price"] + "</p>"+
                "<button class='btn btn-info'>Añadir al carrito</button></div>" 
                + "</td>" 
            )
        
        
            count++;
        }
        cargados = true
    } else {
        alert("Productos cargados.")
    }
    
}