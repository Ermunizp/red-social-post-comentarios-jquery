// posts.js

// Array to store posts
let posts = [];

// Function to initialize posts data (if needed)
const initializePosts = () => {
    // Example post to start with
    posts.push({
        title: "Welcome Post",
        description: "This is the welcome post for our social network app.",
        date: new Date().toLocaleDateString(),
        comments: []
    });
    displayPosts();
};

// Call initializePosts on page load
$(document).ready(() => {
    initializePosts();
});
