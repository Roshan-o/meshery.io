document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        blogPosts.forEach(post => {
            const title = post.querySelector('h2 a').textContent.toLowerCase();
            const content = post.querySelector('.post-content').textContent.toLowerCase();
            const categories = Array.from(post.querySelectorAll('.blog-filter a'))
                                 .map(category => category.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                           content.includes(searchTerm) ||
                           categories.some(category => category.includes(searchTerm));
            
            post.style.display = matches ? 'block' : 'none';
        });
    });
});