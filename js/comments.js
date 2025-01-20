// comments.js

// Function to add a comment to a specific post
const addComment = (postIndex, commentText) => {
    if (!posts[postIndex].comments) {
        posts[postIndex].comments = [];
    }
    posts[postIndex].comments.push(commentText);
    displayPosts();
};

// Function to delete a comment from a specific post
const deleteComment = (postIndex, commentIndex) => {
    if (posts[postIndex].comments && posts[postIndex].comments.length > commentIndex) {
        posts[postIndex].comments.splice(commentIndex, 1);
        displayPosts();
    }
};
