var products=[
    {
        Name:"Chocolat",
        Price:1.5,
        img:"images/chocolate.jpg" 
    },
    {
        Name:"Choco-Tom",
        Price:1.7,
        img:"images/chocoTom.jpg" 
    },
    {
        Name:"Coca-Cola",
        Price:1.5,
        img:"images/coca.jpg" 
    },
    {
        Name:"Coca-Zero",
        Price:1.5,
        img:"images/cocaZero.jpg" 
    },
    {
        Name:"Pasta",
        Price:0.410,
        img:"images/fell.jpg" 
    },
    {
        Name:"gofrette",
        Price:1.1,
        img:"images/gofrette.webp" 
    },
    {
        Name:"Harissa",
        Price:4.6,
        img:"images/harissa.jpg" 
    },
    {
        Name:"Milk",
        Price:1.35,
        img:"images/milk.jpg" 
    },
    {
        Name:"Momento",
        Price:1.7,
        img:"images/momento.jpg" 
    },
    {
        Name:"Olive-Oil",
        Price:18.5,
        img:"images/olivier Oil.jpg" 
    },
    {
        Name:"Sugar",
        Price:2.5,
        img:"images/sugar.webp" 
    },
    {
        Name:"Tomate",
        Price:1.5,
        img:"images/tomate.jpg" 
    },
]

var total=0;

function showProducts(arr){

    var container=document.getElementById('container')


for(var i=0;i<arr.length;i++){

    let item=arr[i]
    var divs=document.createElement("div")
    divs.classList.add("item")
    var imageInstance=new Image()
    imageInstance.src=item.img
    divs.appendChild(imageInstance)
    var namesDiv=document.createElement('div')
    namesDiv.classList.add('Title')
    namesDiv.innerText=item.Name
    divs.appendChild(namesDiv)

    //create div for price

    var buttons=document.createElement('button')
    buttons.classList.add('button')
    buttons.innerText=item.Price+ "DT"

    buttons.addEventListener("click",function(){

        var z=document.getElementById('h2')
        total+=item.Price
        z.innerHTML=total.toFixed(3)+"DT"
    })


    divs.appendChild(buttons)
    container.appendChild(divs)
    
}

}

showProducts(products)
    







  
