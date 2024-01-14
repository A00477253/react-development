const root = ReactDOM.createRoot(document.getElementById("root"));

const headingH1=React.createElement("h1",{id:"h1"},"I am a H1 Tag");
const headingH2=React.createElement("h2",{id:"h2"},"I am a H2 Tag");
const child=React.createElement("div",{id:"child"},[headingH1,headingH2]);
const child2=React.createElement("div",{id:"child"},[headingH1,headingH2]);
const parent=React.createElement("div",{id:"parent"},[child,child2]);


const heading = React.createElement(
    "h1", {id: "heading",xyx:"abc"}, "Hello world from React inside it"
    );
console.log(parent);
root.render(parent);