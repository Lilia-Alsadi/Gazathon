let info = {
    data: [
        {
            Title: "woman, old", image: "../imgs/top_pic.jpg", category1: "woman", category2: "60+", link:"",id:""
        },
        {
            Title: "woman, adult", image: "../imgs/test.png", category1: "woman", category2: "16-60", link: "lol.com",
        },
        {
            Title: "men child", image: "../imgs/test.png", category1: "Men", category2: "0-18", link: "lol.com",
        },
        {
            Title: "woman child", image: "../imgs/test.png", category1: "woman", category2: "0-18", link: "lol.com",
        },
        {
            Title: "man adult", image: "../imgs/test.png", category1: "Men", category2: "16-60", link: "lol.com",
        },
        {
            Title: "man adult", image: "../imgs/test.png", category1: "Men", category2: "16-60", link: "lol.com",
        },
        {
            Title: "man adult", image: "../imgs/test.png", category1: "Men", category2: "16-60", link: "lol.com",
        },
        {
            Title: "woman old", image: "../imgs/test.png", category1: "woman", category2: "60+", link: "lol.com",
        },
        {
            Title: "woman old", image: "../imgs/test.png", category1: "woman", category2: "60+", link: "lol.com",
        },
    ],
};

for (let i of info.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category1, i.category2, "hide");

    // Create anchor element
    let link = document.createElement("a");
    link.setAttribute("href", i.link);  // Use the link from the data
    link.setAttribute("target", "_blank");  // Open the link in a new tab (optional)

    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgcontainer.appendChild(image);

    link.appendChild(imgcontainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("titleOfInfo");
    title.innerText = i.Title.toUpperCase();

    container.appendChild(title);
    link.appendChild(container);  // Add container to the link

    card.appendChild(link);  // Append the entire link (with image and title) to the card

    document.getElementById("info").appendChild(card);
}


function filterinfo(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });


    let elements=document.querySelectorAll(".card");
    elements.forEach((element)=>{
        if(value=="all"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}


document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value; // Use quotes for ID
    let elements = document.querySelectorAll(".titleOfInfo");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element,index)=>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});

window.onload=()=>{
    filterinfo("all");
}

