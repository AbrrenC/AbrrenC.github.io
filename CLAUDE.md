# ProfilePage_Abrren

Personal portfolio/profile page for Abrren Chen, Senior Data & AI Professional.

## Project Overview
- Static HTML website for GitHub Pages
- Three main pages: About, Posts, Projects
- Hosted at abrrenc.github.io

## Tech Stack
- HTML5, CSS3, JavaScript (vanilla, no frameworks)
- Inter font (Google Fonts)
- Static site (no build process required)

## File Structure
```
/
├── index.html        # About page (Education, Experience, Skills)
├── posts.html        # Blog posts (renders from data.js)
├── projects.html     # Project showcase (renders from data.js)
├── css/
│   └── style.css     # Main stylesheet
├── js/
│   ├── data.js       # Posts & Projects data (EDIT THIS TO ADD CONTENT)
│   └── main.js       # Render functions
├── images/
│   └── Profile_Photo.JPG
└── CLAUDE.md
```

## Adding Posts & Projects

All content is managed in `js/data.js`. Edit this file to add new posts or projects.

### Add a New Post
```javascript
{
    title: "Your Post Title",
    date: "January 2026",
    description: "Brief description of the post...",
    source: "linkedin",  // Options: "linkedin", "medium", "other"
    url: "https://linkedin.com/posts/your-post-url"
}
```

### Add a New Project
```javascript
{
    title: "Project Name",
    description: "What the project does...",
    tags: ["Python", "Streamlit", "LLM"],
    github: "https://github.com/AbrrenC/project-name",
    demo: "https://demo-url.com"  // Optional - set to null if no demo
}
```

## Development
- Open any `.html` file directly in browser to preview
- No build or install steps required
- Deploy by pushing to GitHub (main branch)

## Design System
- CSS variables defined in `:root`
- Inter font family
- Blue accent color (#2563eb)
- Card-based layout
- Responsive design

## When Helping With Code
- Posts/Projects data goes in `js/data.js`
- Styles are in `css/style.css`
- Maintain responsive design
- Use existing CSS variables and classes

## When Suggesting Features/Ideas
- Focus on showcasing AI and data science expertise
- Consider interactive data visualizations
- Prioritize professional presentation
- Ideas for Posts: AI in actuarial, LLM applications, data engineering
- Ideas for Projects: Streamlit dashboards, R packages, ML models
