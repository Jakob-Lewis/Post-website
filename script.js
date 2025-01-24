// This is a script for a dummy website. It is the script.js for the index.html file for the dummy website


function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function randomPastelColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Ensure the pastel effect by keeping RGB values high
    return `rgb(${Math.min(r + 150, 255)}, ${Math.min(g + 150, 255)}, ${Math.min(b + 150, 255)})`;
}

function randomGradient() {
    const pastelColor = randomPastelColor();
    const titleElement = document.querySelector('.title');
    const postCatalogElement = document.querySelector('.post-catalog');

    // Apply gradient to the title
    titleElement.style.background = `linear-gradient(to right, white, ${pastelColor})`;

    // Apply gradient to the post catalog
    postCatalogElement.style.background = `linear-gradient(to right, white, ${pastelColor})`;
}

// Call randomGradient function to apply the gradient
randomGradient();
document.getElementById('postButton').addEventListener('click', function () {
    const postContent = document.getElementById('postContent').value;
    if (postContent) {
        const postCatalog = document.getElementById('postCatalog');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerText = postContent;
        postCatalog.prepend(newPost); // Add new post to the top
        document.getElementById('postContent').value = ''; // Clear the textarea
    } else {
        alert("Please write something before posting!");
    }
});
// Call randomGradient function to apply the gradient
randomGradient();
