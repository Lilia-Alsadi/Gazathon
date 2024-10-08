let info = {
    data: [
        {
            Title: "How to perform CPR ", image: "../imgs/video/thumbnail1.png",
            category1: "all", category2: "all", id: "1",
            Description: " This video provides a step-by-step guide on how to perform cardiopulmonary resuscitation (CPR) effectively. It covers the key techniques for chest compressions and rescue breaths to help someone in cardiac arrest.",
            src: "https://www.youtube.com/embed/rs3GOoBusOQ?si=uj4F1yAEA6-kqno9",
        },
        {
            Title: "How to Stop Bleeding - Techniques to apply pressure and control bleeding. ", image: "../imgs/video/thumbnail2.png",
            category1: "all", category2: "all", id: "2",
            Description: "  Learn various techniques to control bleeding in this instructional video. It explains how to apply pressure correctly and other methods to manage bleeding until professional help arrives.",
            src:"https://www.youtube.com/embed/HGU0ZND6JEE?si=izKmsiF7CuEmY8ky",
        },
        {
            Title: "Recognizing Heart Attack Symptoms - Quick signs to identify if someone is having a heart", image: "../imgs/video/thumbnail3.png",
            category1: "all", category2: "all", id: "3",
            Description: " This video highlights the quick signs and symptoms of a heart attack. It offers essential information on what to look for and how to respond if someone is experiencing these symptoms.",
            src: "https://www.youtube.com/embed/N9yUmduG820?si=X1yTr_Djw15i5NKz",
        },
        {
            Title: "How to Handle Seizures - What to do if someone is having a seizure. ", image: "../imgs/video/thumbnail4.png",
            category1: "all", category2: "all", id: "4",
            Description: " This guide walks you through the appropriate steps to take when someone is having a seizure. It focuses on ensuring the person's safety and what to do until the seizure ends.",
            src: "https://www.youtube.com/embed/vSnRdmR6xcE?si=iqOnjqEvOlgyCD6N",
        },
        {
            Title: "Basic First Aid for Cuts and Scrapes - Simple steps to treat minor injuries.", image: "../imgs/video/thumbnail5.png",
            category1: "all", category2: "all", id: "5",
            Description: "This video demonstrates simple and effective first aid techniques for treating minor cuts and scrapes. It covers cleaning the wound and applying dressings to promote healing.",
            src: "https://www.youtube.com/embed/AhANvBB9hz0?si=4TOpYJ4kZUQUNZiu",
        },
        {
            Title: "First Aid For Burns", image: "../imgs/video/thumbnail9.png",
            category1: "all", category2: "all", id: "9",
            Description: "This video focuses specifically on how to treat burns, providing practical advice on managing pain and preventing infection in burn injuries.",
            src: "https://www.youtube.com/embedsauqm3mvJ40?si=V33kGLSk5W4m-4FQ",
        },
        {
            Title: "Treating Burns - How to treat minor burns effectively.", image: "../imgs/video/thumbnail6.png",
            category1: "all", category2: "all", id: "6",
            Description: " Learn how to treat minor burns effectively in this video. It outlines the appropriate first aid steps to alleviate pain and promote healing, ensuring you handle burns correctly.",
            src: "https://www.youtube.com/embed/ZNWjfe-84Ig?si=umn_kuVmyrofPCsP",
        },
        {
            Title: "How to Treat a Nosebleed - Steps for stopping a nosebleed.", image: "../imgs/video/thumbnail7.png",
            category1: "all", category2: "all", id: "7",
            Description: " This instructional video explains the steps to stop a nosebleed quickly and effectively. It provides tips on positioning and pressure application to control bleeding.",
            src: "https://www.youtube.com/embed/_UGeHti3zlI?si=f5NSjUE0SoPOP41y",
        },
        {
            Title: "First Aid and Emergency Response - Hundreds of Free videos", image: "../imgs/video/thumbnail9.png",
            category1: "all", category2: "all", id: "8",
            Description: "A comprehensive resource offering hundreds of free videos on first aid and emergency response techniques. This video serves as a valuable tool for learning various life-saving skills.",
            src: "https://www.youtube.com/embed/k6GN3lIsYtA?si=Y5gUWR6-0EK6ma2E",
        },
    ],
};


for (let i of info.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category1, i.category2, "hide");

    // Create anchor element
    let link = document.createElement("a");
    link.setAttribute("href", "../HTML/video.html");  // Use the link from the data
    link.setAttribute("target", "_blank");  // Open the link in a new tab (optional)
    link.classList.add("video-link");

    link.setAttribute("data-id", i.id);  // Store the id in the link

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


function filterinfo(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });


    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            }
            else {
                element.classList.add("hide");
            }
        }
    })
}


document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value; // Use quotes for ID
    let elements = document.querySelectorAll(".titleOfInfo");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }
        else {
            cards[index].classList.add("hide");
        }
    })
});

window.onload = () => {
    filterinfo("all");
}

document.querySelectorAll('.video-link').forEach(link => {
    link.addEventListener('click', function (event) {
        const videoID = event.currentTarget.dataset.id;  // Get the id from data-id
        const selectedVideo = info.data.find(article => article.id === videoID);

        // Store the selected article data in sessionStorage
        if (selectedVideo) {
            localStorage.setItem('videoTitle', selectedVideo.Title);
            localStorage.setItem('videoDes', selectedVideo.Description);
            localStorage.setItem('videoSRC', selectedVideo.src);
        }

    });
});

