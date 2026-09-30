// Your recipes. To add one, copy a block below and edit it.
// Everything in title, description, ingredients, and tags is searchable.
// Optional fields: time, servings (number) or makes (text), source ({ name, url }).
const RECIPES = [
  {
    title: "Banana Bread",
    description: "Classic, moist banana bread with a little sour cream and cinnamon.",
    time: "About 1½ hr, plus cooling",
    makes: "1 loaf",
    source: { name: "NYT Cooking", url: "https://cooking.nytimes.com" },
    tags: ["baking", "breakfast", "dessert", "bananas"],
    ingredients: [
      "Nonstick spray, for greasing",
      "2 large eggs",
      "1¾ cups (about 4 medium) mashed ripe bananas",
      "½ cup (115 g / 1 stick) unsalted butter, melted and slightly cooled",
      "¾ cup (165 g) packed light brown sugar",
      "1 tsp vanilla extract",
      "¼ cup (57 g) sour cream",
      "2 cups (256 g) all-purpose flour",
      "1 tsp baking soda",
      "½ tsp kosher salt (such as Diamond Crystal)",
      "½ tsp ground cinnamon"
    ],
    steps: [
      "Heat the oven to 350°F. Grease an 8- or 9-inch loaf pan and line the bottom with parchment.",
      "In a large bowl, whisk the eggs, bananas, melted butter, brown sugar, and vanilla until smooth (a few banana lumps are fine). Stir in the sour cream.",
      "In a medium bowl, whisk the flour, baking soda, salt, and cinnamon.",
      "Add the dry ingredients to the wet and mix just until no dry flour remains, scraping the bottom of the bowl.",
      "Spread the batter evenly in the pan. Bake 55–65 minutes, until a toothpick in the center comes out clean.",
      "Cool in the pan for 20 minutes, then run a knife around the edges, turn the loaf out onto a rack, and peel off the parchment.",
      "Serve warm or at room temperature. Keeps covered at room temperature for up to 3 days."
    ]
  },
  {
    title: "Brown Butter Banana Bread",
    description: "One-bowl banana bread with nutty browned butter. Add chocolate chips or nuts if you like.",
    time: "About 1 hr",
    makes: "1 loaf",
    source: { name: "A comment on a social media video" },
    tags: ["baking", "breakfast", "dessert", "bananas", "brown butter", "chocolate"],
    ingredients: [
      "½ cup (1 stick) butter",
      "¾ cup brown sugar",
      "3 ripe bananas, mashed",
      "1 large egg",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "⅛–¼ tsp salt",
      "1½ cups all-purpose flour",
      "Optional: chocolate chips and/or chopped nuts"
    ],
    steps: [
      "Heat the oven to 350°F and grease a loaf pan.",
      "Brown the butter in a saucepan over medium heat, stirring, until it smells nutty and turns golden brown. Let it cool slightly.",
      "Mix the brown butter with the brown sugar, bananas, egg, and vanilla.",
      "Add the baking soda, salt, and flour and mix gently. Flour clumps are fine; stop once the batter looks bubbly so you keep the bubbles. Fold in chocolate chips or nuts, if using.",
      "Pour into the pan and bake 30–60 minutes, depending on pan size and color (darker pans bake faster).",
      "It's done when the top is domed and browned, the edges pull away from the pan, and a toothpick in the center comes out clean."
    ]
  }
];
