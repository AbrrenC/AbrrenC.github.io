// ============================================
// RENDER FUNCTIONS
// Automatically renders posts and projects from data.js
// ============================================

// Source icons/labels
const sourceLabels = {
    linkedin: "LinkedIn",
    medium: "Medium",
    other: "Blog"
};

// Render posts to the posts page
function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    if (postsData.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Posts coming soon.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = postsData.map(post => `
        <a href="${post.url}" class="card-link" target="_blank" rel="noopener">
            <div class="card">
                <div class="card-header">
                    <span class="source-tag ${post.source}">${sourceLabels[post.source] || post.source}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="meta">${post.date}</p>
                <p>${post.description}</p>
            </div>
        </a>
    `).join('');
}

// Render projects to the projects page
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    if (projectsData.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Projects coming soon.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projectsData.map(project => `
        <div class="card project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="project-link">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link demo">Live Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderProjects();
});
