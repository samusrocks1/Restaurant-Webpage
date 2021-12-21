console.log('test');
import {createParagraph, createHeader1, appendHeader, appendParagraph, appendDiv, removeDiv, createNavigation, appendNavigation, createHeader2, appendHeader2, createImage, createBreak} from './createElements';
createImage();
createBreak();
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
    appendParagraph('These are the classic cookies that everyone knows and loves. We offer Chocolate Chip, Oatmeal, Oatmeal Raisin, Chocolate, Sugar, Peanut Butter, Shortbread, and Gingerbread.');
    appendParagraph('Single cookie: $1.25');
    appendParagraph('3 cookies: $3.00');
    appendParagraph('6 cookies: $5.00');
    appendHeader2('Signature Cookies');
    appendParagraph('These are speciality cookies that we have created in house');
    appendParagraph('Single cookie: $2.00');
    appendParagraph('3 cookies: $5.50');
    appendParagraph('6 cookies: $8.00');
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
