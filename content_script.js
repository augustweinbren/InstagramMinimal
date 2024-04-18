// Function to remove elements with the role of 'main' but not 'link'
function removeMainElements() {
    const mainElements = document.querySelectorAll('[role="main"]');
    mainElements.forEach(element => {
        // Check if the element or any of its parents have the role of 'link'
        let isLink = false;
        let parent = element;
        while (parent) {
            if (parent.getAttribute('role') === 'link') { 
                // Allows creation of content
                isLink = true;
                break;
            }
            parent = parent.parentElement;
        }

        if (!isLink) {
            element.remove();
            console.log('Removed element with role main');
        }
    });
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutations => {
    if (!window.location.pathname.startsWith('/direct/')) { 
        // allows messaging
        removeMainElements(); // Check and remove elements every time mutations are observed
    }
});

// Start observing the document body for configured mutations
observer.observe(document.body, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    attributes: false // attribute changes not needed
});

// Initial check to remove any elements already present
if (!window.location.pathname.startsWith('/direct/')) {
    removeMainElements();
}
