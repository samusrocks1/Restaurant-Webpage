console.log('test');
import {createParagraph, createHeader1, appendHeader, appendParagraph, appendDiv, removeDiv, createNavigation, appendNavigation, createHeader2, appendHeader2, createImage} from './createElements';
createImage();
appendNavigation('about us');
document.getElementById('about us').onclick = function() {displayAboutUs()};
appendNavigation('menu');
document.getElementById('menu').onclick = function() {displayMenu()};
appendNavigation('contact us');
document.getElementById('contact us').onclick = function() {displayContactUs()};

function displayAboutUs(){
    removeDiv('content');
    appendDiv('content');
    appendHeader('Welcome to the Cookie Emporium');
    appendParagraph('We are a new exciting concept for you to purchase all kinds of cookies. Please check out our menu to see what cookies we have to offer.');
    appendParagraph('We are located at 1 Cookies Way, Town Near You, USA')
    appendHeader2('Our Hours');
    appendParagraph('Sundays: 8:00 am - 6:00 pm');
    appendParagraph('Mondays: 6:00 am - 8:00 pm');
    appendParagraph('Tuesdays: 6:00 am - 8:00 pm');
    appendParagraph('Wednesdays: 6:00 am - 8:00 pm');
    appendParagraph('Thurdays: 6:00 am - 8:00 pm');
    appendParagraph('Fridays: 6:00 am - 9:00 pm');
    appendParagraph('Saturdays: 7:00 am - 9:00 pm');
}

function displayMenu(){
    removeDiv('content');
    appendDiv('content');
    appendHeader('The Cookie Emporium Menu');
    appendHeader2('Classic Cookies');
    appendParagraph('These are the classic cookies that everyone knows and loves');
    appendHeader2('Signature Cookies');
    appendParagraph('These are speciality cookies that we have created in house');
    appendHeader2('Celebration Cookies');
    appendParagraph('These are cookies we have designed for celebrations');
}

function displayContactUs(){
    removeDiv('content');
    appendDiv('content');
    appendHeader('Contact us...');
    appendParagraph('Phone number: 202-555-0100');
    appendParagraph('E-mail: cookieemporium@cookies.com');
    appendParagraph('Mailing Address: 1 Cookies Pl, Town Near You, USA')
}

displayAboutUs();
