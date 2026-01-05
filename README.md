# Abrren Chen - Personal Portfolio

Personal portfolio website showcasing my work as a Senior Data & AI Professional.

**Live Site:** [abrrenc.github.io](https://abrrenc.github.io)

## Features

- **About** - Professional background, skills, and experience
- **Posts** - Articles and thought pieces on AI, data science, and technology
- **Projects** - Showcase of personal and professional projects

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla)
- Inter font via Google Fonts
- Static site - no build process required
- Deployed via GitHub Pages

## Local Development

No installation required. Simply open `index.html` in your browser:

```bash
# Clone the repository
git clone https://github.com/AbrrenC/AbrrenC.github.io.git

# Open in browser
open index.html
```

## Project Structure

```
/
├── index.html          # About page
├── posts.html          # Blog posts
├── projects.html       # Project showcase
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── data.js         # Posts & projects content
│   └── main.js         # Render functions
└── images/
    └── Profile_Photo.JPG
```

## Adding Content

Edit `js/data.js` to add new posts or projects:

**New Post:**
```javascript
{
    title: "Post Title",
    date: "January 2026",
    description: "Brief description...",
    source: "linkedin",  // "linkedin", "medium", or "other"
    url: "https://..."
}
```

**New Project:**
```javascript
{
    title: "Project Name",
    description: "What it does...",
    tags: ["Python", "Streamlit"],
    github: "https://github.com/AbrrenC/...",
    demo: "https://..."  // or null
}
```

## Deployment

Push to the `main` branch - GitHub Pages will automatically deploy the site.

## License

MIT License

## Contact

- Email: [Abrren.chen@gmail.com](mailto:Abrren.chen@gmail.com)
- LinkedIn: [abrren-chen](https://www.linkedin.com/in/abrren-chen)
- GitHub: [AbrrenC](https://github.com/AbrrenC)
