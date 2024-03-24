//your JS code here. If required.
// Get the element with id "level"
var targetElement = document.getElementById('level');

// Function to determine the DOM level of the element

function getDOMLevel(element) {
    var level = 0;
    var parent = element.parentNode;
    
    // Traverse upwards until reaching the root html element
    while (parent !== null && parent.tagName !== 'HTML') {
        level++;
        parent = parent.parentNode;
    }
    
    // Add 1 to include the root html element itself
    return level + 1;
}

// Get the DOM level of the target element
var domLevel = getDOMLevel(targetElement);

// Display the result using alert
alert('The level of the element is: ' + domLevel);