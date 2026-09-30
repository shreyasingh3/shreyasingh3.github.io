# shreyasingh3.github.io

Personal website: plain HTML/CSS/JS, served by GitHub Pages with no build step.

- `index.html`: home page linking to the two sections
- `career.html`: career: about, projects, tech, contact
- `personal.html`: personal stuff, organized in tabs (Recipes, About Me)

## Adding a recipe

Edit `js/recipes.js` and copy an existing entry. Fields: `title`, `description`, `time`,
`servings`, `tags`, `ingredients`, `steps`. The search box matches title, description,
ingredients, and tags.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
