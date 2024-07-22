document.addEventListener('DOMContentLoaded', function() {
    // This function runs when the DOM is fully loaded
    console.log('Website loaded successfully!');

    // Example: Add a click event to all section headings
    const sectionHeadings = document.querySelectorAll('section h2');
    sectionHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            alert('You clicked on: ' + this.textContent);
        });
    });

    // You can add more JavaScript functionality here
});