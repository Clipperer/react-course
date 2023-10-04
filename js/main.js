document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log("document ready")
        const root = document.getElementById("root")
        const child = document.createElement("div")
        root.appendChild(child)
        child.innerHTML = "<p>tester</p>"
        child.innerText="not a test"
        child.style = "border: 1px solid red;"
        const someArray = ["some", 314534, {data: {someKey: "test"}}]
        someArray.forEach((el, i, arr)=> {
            console.log(el)
            console.log("index is:", i)
            console.log("array is:", arr)
        })

        const newArray = someArray.map((el) => el + 3)

        console.log(newArray)
    }
};
