const parent = React.createElement(
    "div",
     {id: "parent"},
    React.createElement("div", {id:"child"} ,[
         React.createElement("h1" , {} , "This is h1 Tag"),
            React.createElement ("h2" , {} , "This is h2 Tag") 
    ]),
    React.createElement("div", {id:"child 2"} ,[
         React.createElement("h1" , {} , "This is h3 Tag"),
            React.createElement ("h2" , {} , "This is h4 Tag") 
    ])
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
