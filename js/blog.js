document.addEventListener('DOMContentLoaded', function() {
    // Get all category filter links
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    // Add click event to all category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all filters
            categoryFilters.forEach(f => {
                f.classList.remove('active');
            });
            
            // Add active class to clicked filter
            this.classList.add('active');
            
            const selectedCategory = this.getAttribute('data-category');
            filterBlogPosts(selectedCategory);
        });
    });
    
    // Filter blog posts based on category
    function filterBlogPosts(category) {
        const blogPosts = document.querySelectorAll('.blog-entry');
        
        blogPosts.forEach(post => {
            if (category === 'all') {
                post.style.display = 'block';
                return;
            }
            
            const postCategory = post.getAttribute('data-category');
            if (postCategory === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }
    
    // Set 'All' category as active by default
    document.querySelector('[data-category="all"]').classList.add('active');
});
