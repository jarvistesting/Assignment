export const btnArr = [
    {name: '1', text: '1'},
    {name: '2', text: '2'},
    {name: '3', text: '3'},
    {name: '+', text: '+'},
    {name: '4', text: '4'},
    {name: '5', text: '5'},
    {name: '6', text: '6'},
    {name: '-', text: '-'},
    {name: '7', text: '7'},
    {name: '8', text: '8'},
    {name: '9', text: '9'},
    {name: '*', text: '*'},
    {name: 'C', text: 'clear'},
    {name: '0', text: '0'},
    {name: '=', text: '='},
    {name: '/', text: '÷'},
]

export const handleLightTheme = () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = '#fff';
    bodyElt.style.color = '#000';

    let element = document.getElementsByTagName('button');
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "#f0f0f0";
        element[i].style.color = "#000";
    }
}

export const handleDarkTheme = () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = '#000';
    bodyElt.style.color = '#fff';

    let element = document.getElementsByTagName('button');
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "#666";
        element[i].style.color = "#fff";
    }
}