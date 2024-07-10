const newNode= document.createElement('p')
// append the new creatednode into the exsiting DOM 
document.body.append('newNode')

// remove elements from the DOM
// removeChild()
// we use removeChild() to remove a particular child an element
someElement.removeChild(someChildElement);
const ul=document.getElementsByTagName("ul")[0];
const secondChild =ul.querySelector('li:nth-child(2)');
ul.removeChild(secondChild);

// element.remove()
Element.remove();
// example 
ul.remove();


