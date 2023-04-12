const Promo = (props) => {
    //props- объект в котором можно передеать разне свойства для компонента
    let name = "promo";
    switch (props.type) {
        case "lg": name = "promo big"; break;
        case "sm": name = "promo small"; break;
        default: name = "promo";
    }

    return (
        <div className={name}>
            <div className={props.pic ? "promo-pic" : "promo-pic pic2"}></div>
            <h3>{props.text}</h3>
        </div>
    )
}

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);
console.log(text);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while(n--) {
    adds.push({
        text: `${text[rand(text.length)]} ${text[rand(text.length)]} ${text[rand(text.length)]}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}
console.log(adds)

const App = () => {
    return (
        <div title="Doggy">
            <h1>Hello</h1>
            <hr />
            <h2>
                <mark>React!</mark>
            </h2>
            <div className="container">
                <Promo text="magic" type="lg" />
                <Promo text="O_o" />
                <Promo text="Doggy" pic={true} />
                <Promo text="Гав" type="sm" />
                <Promo />
            </div>
        </div>
    )
}
export default App;
