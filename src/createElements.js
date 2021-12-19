/*
Load page initially with navbar for 3 "tabs"
Tab 1: About the restaurant
Tab 2: Menu
Tab 3: History of the restaurant

Each tab will contain a div element for each tab that will be removed when a different tab is clicked on.
*/

export function createParagraph (text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

export function createHeader1 (text){
    const header1 = document.createElement('h1');
    header1.textContent = text;
    return header1;
}

export function createHeader2 (text){
    const header1 = document.createElement('h2');
    header1.textContent = text;
    return header1;
}

export function appendParagraph (text){
    const content = document.querySelector('#content');
    content.append(createParagraph(text));
}

export function appendHeader (text){
    const content = document.querySelector('#content');
    content.append(createHeader1(text));
}

export function appendHeader2 (text){
    const content = document.querySelector('#content');
    content.append(createHeader2(text));
}

export function appendDiv (text){
    const content = document.createElement('div');
    content.id = text;
    document.body.appendChild(content);
    //content.append(createDiv(text));
}

export function removeDiv (text) {
    const content = document.querySelector('#' + text);
    content.remove();
}

export function createNavigation(text){
    const button = document.createElement('button');
    button.textContent = text;
    button.id = text;
    return button;
}

export function appendNavigation(text){
    const content = document.querySelector('#navigation');
    content.append(createNavigation(text));
    //document.getElementById(text).onclick = function() {appendParagraph('text')};
}

export function createImage(){
    const content = document.createElement('img');
    content.src = './CookieEmporiumLogo.jpg';
    document.querySelector('#navigation').appendChild(content);
}