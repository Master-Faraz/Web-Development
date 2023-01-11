//.     List of cources we want to inject as li in UL
cources = [
    {
        name: "HTML",
        price: 1000
    },
    {
        name: "CSS",
        price: 102000
    },
    {
        name: "JavaScript",
        price: 93000
    },
    {
        name: "React js",
        price: 44000
    }
]


function Generate_List() {

    const ul = document.querySelector(".list-group");

    ul.innerHTML = ""; //.  for reset value after sort

    cources.forEach(cource => {

        //.  Creating element li with class
        const li = document.createElement("li");
        li.classList.add("list-group-item")

        //. create text node and append to li
        const name = document.createTextNode(cource.name);
        li.appendChild(name)

        //. creating span and adding class to it and adding value to it

        const span = document.createElement("span");
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + cource.price);
        span.appendChild(price);

        //. adding span to li and li to ul

        li.appendChild(span)
        ul.appendChild(li)

    });

}

// Generate_List();

window.addEventListener("load", Generate_List);

// .        Sorting Values using sort button

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    cources.sort((a, b) => a.price - b.price);
    Generate_List();
})

const button_2 = document.querySelector(".sort-descending-btn");

button_2.addEventListener("click" , ()=>{
    cources.sort((a,b)=>b.price-a.price);
    Generate_List()
})