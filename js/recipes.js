// Your recipes. To add one, copy a block below and edit it.
// Everything in title, description, ingredients, and tags is searchable.
// Optional fields: time, servings (number) or makes (text), source ({ name, url }), notes (list).
// An ingredient ending in ":" (e.g. "Sauce:") shows as a sub-heading.
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
  },
  {
    title: "Sweet Potato Brownies",
    description: "Fudgy, naturally sweetened brownies made with roasted sweet potato, maple syrup, and oat flour.",
    time: "About 45 min, plus roasting",
    makes: "One 8×8-inch pan",
    source: { name: "Instagram" }, // creator handle was cut off in the screenshot: "@wellwith…"
    tags: ["baking", "dessert", "chocolate", "gluten-free", "sweet potato", "healthy"],
    ingredients: [
      "1 cup mashed sweet potato (roasted)",
      "3 eggs",
      "½ cup maple syrup",
      "¼ cup honey",
      "1 tsp vanilla extract",
      "3 tbsp cacao powder",
      "¼ cup + 2 tbsp oat flour",
      "¼ tsp salt",
      "1 tsp baking soda",
      "½ cup dark chocolate chips, plus more for topping"
    ],
    steps: [
      "Roast the sweet potatoes at 400°F for about 50 minutes, until very soft. Let cool slightly and scoop out the flesh.",
      "Heat the oven to 350°F and line an 8×8-inch baking dish with parchment.",
      "In a large bowl, mash the sweet potato, then whisk in the eggs, maple syrup, honey, and vanilla.",
      "Add the cacao powder, oat flour, salt, and baking soda and stir with a spatula until combined. Fold in the chocolate chips.",
      "Pour the batter into the dish and sprinkle more chocolate chips on top.",
      "Bake 30–35 minutes. They should look slightly underdone in the center; they firm up as they cool."
    ],
    notes: [
      "Roasted sweet potatoes come out sweeter than boiled.",
      "The original uses Navitas Organics cacao powder."
    ]
  },
  {
    title: "Cookie Dough Breakfast",
    description: "No-bake protein cookie dough crumbled into layers of vanilla Greek yogurt.",
    time: "5 min",
    servings: 2,
    source: { name: "@zmargotz" },
    tags: ["breakfast", "no-bake", "high-protein", "quick", "chocolate", "vegetarian"],
    ingredients: [
      "¼ cup oats, blended into flour",
      "1 scoop vanilla protein powder",
      "2 tbsp peanut butter (or any nut/seed butter)",
      "1 tbsp maple syrup or honey",
      "½ tsp vanilla extract",
      "Sprinkle of cinnamon (optional)",
      "Pinch of sea salt",
      "Chocolate chips, as many as you like",
      "1 tbsp almond milk (or any milk)",
      "Per serving: 1 cup Greek yogurt, a splash of vanilla extract, and a few drops of monk fruit sweetener"
    ],
    steps: [
      "In a small bowl, mix everything except the milk until crumbly.",
      "Add the milk and mix until a thick dough forms.",
      "Split the dough in half; save one half for tomorrow.",
      "Stir the vanilla and monk fruit sweetener into the Greek yogurt.",
      "Layer the yogurt in a bowl or jar, crumbling the cookie dough between the layers."
    ],
    notes: [
      "The original uses Truvani whey protein."
    ]
  },
  {
    title: "Meal Prep Potato Salad (Kartoffelsalat)",
    description: "Make-ahead German-style potato salad with a herby Greek yogurt dressing. About 500 kcal per serving.",
    time: "15 min, plus overnight chilling",
    servings: 2,
    tags: ["lunch", "meal prep", "german", "vegetarian", "high-protein", "potatoes", "make-ahead"],
    ingredients: [
      "300 g Greek yogurt",
      "Salt and pepper",
      "2 tbsp chopped dill",
      "2 tbsp chopped parsley",
      "6 medium potatoes (about 600 g), cooked and cooled",
      "4 hard-boiled eggs, peeled",
      "4 medium pickles",
      "1 small red onion",
      "8 radishes"
    ],
    steps: [
      "Season the yogurt with salt and pepper and divide it between two meal prep containers (about 150 g each).",
      "Top with the dill and parsley.",
      "Add the whole potatoes and eggs.",
      "Chop the pickles, red onion, and radishes and add them to the containers.",
      "Close the containers and refrigerate overnight.",
      "Before eating, break the potatoes and eggs into smaller pieces with a fork and mix everything together."
    ]
  },
  {
    title: "Mug Sticky Toffee Pudding",
    description: "A single-serving sticky toffee pudding made in the microwave, with a quick butterscotch sauce.",
    time: "10 min",
    servings: 1,
    source: { name: "@thechefmine" },
    tags: ["dessert", "microwave", "quick", "british", "single-serving"],
    ingredients: [
      "Pudding:",
      "50 g soft dates (about 8–10)",
      "⅛ tsp baking soda",
      "1½ tbsp (22.5 g) hot water",
      "1½ tbsp (24 g) melted unsalted butter",
      "1½ tbsp (16 g) self-raising flour",
      "1½ tbsp (16 g) dark brown sugar",
      "2 tbsp (25 g) beaten egg",
      "Butterscotch sauce:",
      "¼ cup (60 ml) heavy cream",
      "20 g unsalted butter",
      "4 tbsp (45 g) brown sugar",
      "To serve:",
      "Ice cream, custard, or whipped cream"
    ],
    steps: [
      "Finely chop the dates and add them to a mug with the baking soda and hot water.",
      "Microwave 30–45 seconds, until the dates are very soft.",
      "Add the melted butter and mash with a fork.",
      "Add the flour, brown sugar, and egg and mix thoroughly.",
      "Wipe the inside edges of the mug clean, then microwave 50 seconds to 1 minute 20 seconds, until the top is firm but not dry. Set aside to cool slightly.",
      "For the sauce, microwave the cream, butter, and brown sugar in a bowl for 40–60 seconds until hot and bubbling, then mix well.",
      "Top the pudding with ice cream, custard, or whipped cream and drizzle with the sauce."
    ]
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Chewy brown sugar cookies with melted butter, an extra yolk, and both chopped chocolate and chips.",
    time: "About 30 min, plus 2 hr chilling",
    makes: "About 16 cookies",
    source: { name: "A comment on a social media video" },
    tags: ["baking", "dessert", "cookies", "chocolate"],
    ingredients: [
      "1 cup (2 sticks / 226 g) unsalted butter, melted and cooled",
      "210 g packed light brown sugar (about 1 cup)",
      "100 g granulated sugar (½ cup)",
      "1 large egg, room temperature",
      "1 egg yolk, room temperature",
      "2 tsp pure vanilla extract",
      "240 g unbleached all-purpose flour (about 2 cups)",
      "1 tsp baking soda",
      "½ tsp fine sea salt",
      "4 oz semi-sweet chocolate bar, chopped",
      "4 oz semi-sweet chocolate chips"
    ],
    steps: [
      "In a large bowl, whisk the melted butter, brown sugar, and granulated sugar together well, about 2 minutes.",
      "Add the egg, yolk, and vanilla and whisk until smooth.",
      "In a separate bowl, sift the flour, then stir in the baking soda and salt.",
      "Add the flour mixture to the butter mixture about ½ cup at a time, mixing with a spatula just until combined. Don't overmix.",
      "Mix in the chopped chocolate and chocolate chips. Cover and refrigerate at least 2 hours.",
      "Heat the oven to 350°F and line a baking sheet with parchment or a silicone mat.",
      "Scoop the dough into balls of at least 3 tablespoons each and place them about 1 inch apart, about 4 per sheet.",
      "Bake 11–13 minutes, until golden brown. The edges may be slightly darker than the middle; that's fine."
    ],
    notes: [
      "An ice cream scoop makes evenly sized cookies.",
      "Baking only about 4 at a time gives them room to spread."
    ]
  },
  {
    title: "Avocado Jalapeño Crema",
    description: "A creamy, tangy, herby sauce for tacos, bowls, salads, or dipping.",
    time: "5 min",
    makes: "About 1½ cups",
    tags: ["sauce", "dip", "mexican", "vegetarian", "no-cook", "quick", "spicy", "avocado"],
    ingredients: [
      "½ cup buttermilk",
      "½ cup mayo",
      "½ tsp onion powder",
      "½ tsp garlic powder",
      "1½ tsp dried dill",
      "Cilantro, to taste",
      "1 jalapeño (or to taste)",
      "1 medium avocado",
      "Salt, to taste",
      "Lemon juice, to taste"
    ],
    steps: [
      "Add everything to a blender and blend until smooth.",
      "Taste and adjust the salt, lemon juice, and jalapeño."
    ],
    notes: [
      "Remove the jalapeño seeds and ribs for a milder crema.",
      "Keeps in the fridge for a few days in an airtight container; the lemon juice helps it stay green."
    ]
  },
  {
    title: "Chocolate Banana Bread",
    description: "Double chocolate banana bread with cocoa, chocolate chips, and toasted nuts.",
    time: "About 1 hr 20 min, plus cooling",
    makes: "1 loaf",
    source: { name: "proofdc.com", url: "https://proofdc.com" },
    tags: ["baking", "breakfast", "dessert", "bananas", "chocolate"],
    ingredients: [
      "3 ripe bananas, mashed (about 1¼ cups)",
      "½ cup (100 g) brown sugar",
      "¼ cup (50 g) granulated sugar",
      "½ cup (120 ml) vegetable oil (or melted butter or coconut oil)",
      "2 large eggs (or flax eggs for vegan)",
      "1 tsp vanilla extract",
      "1½ cups (190 g) all-purpose flour",
      "½ cup (50 g) unsweetened cocoa powder",
      "1 tsp baking soda",
      "½ tsp baking powder",
      "½ tsp salt",
      "¾ cup (130 g) chocolate chips (dark, milk, or semi-sweet)",
      "½ cup chopped walnuts or pecans"
    ],
    steps: [
      "Heat the oven to 350°F with a rack in the center. Grease a 9×5-inch loaf pan and line it with parchment.",
      "In a large bowl, whisk the flour, cocoa powder, baking soda, baking powder, and salt until no lumps remain.",
      "In another bowl, mix the mashed bananas, eggs, both sugars, oil, and vanilla until smooth.",
      "Gently fold the wet ingredients into the dry, then fold in the chocolate chips and nuts. Don't overmix.",
      "Pour the batter into the pan and level the top with a spatula.",
      "Bake 60–65 minutes, rotating the pan halfway, until a toothpick comes out with just a few moist crumbs.",
      "Cool in the pan for 15 minutes, then lift out by the parchment onto a wire rack. Cool completely before slicing."
    ],
    notes: [
      "For a vegan loaf, use flax eggs and oil or coconut oil."
    ]
  },
  {
    title: "Vegan Chocolate Banana Bread",
    description: "Rich, egg-free, dairy-free chocolate banana bread with melted dark chocolate and a chocolate chip top.",
    time: "About 55 min, plus 2 hr cooling",
    servings: 8,
    source: { name: "Full of Plants", url: "https://fullofplants.com" },
    tags: ["baking", "breakfast", "dessert", "bananas", "chocolate", "vegan", "dairy-free"],
    ingredients: [
      "1 cup (142 g) all-purpose flour",
      "½ cup (100 g) sugar",
      "⅓ cup (34 g) unsweetened cocoa powder",
      "1¼ tsp baking soda",
      "¼ tsp baking powder",
      "⅛ tsp salt",
      "3 large (330 g) ripe bananas",
      "½ cup (120 ml) neutral oil",
      "2 oz (57 g) dark chocolate",
      "2 tsp (10 ml) vanilla extract",
      "⅓ cup (53 g) dark chocolate chips, for topping"
    ],
    steps: [
      "Heat the oven to 350°F and line an 8×4-inch loaf pan with parchment.",
      "In a large bowl, whisk the flour, sugar, cocoa powder, baking soda, baking powder, and salt.",
      "Melt the dark chocolate over a double boiler (or in the microwave in short bursts).",
      "Mash the bananas with a fork or blender.",
      "Pour the bananas, oil, melted chocolate, and vanilla over the dry ingredients and mix just until combined.",
      "Spread the batter evenly in the pan and top with the chocolate chips.",
      "Bake about 45 minutes, until a toothpick comes out with a few crumbs.",
      "Cool completely, at least 2 hours, before slicing; it's delicate while warm."
    ],
    notes: [
      "Use ripe, spotty bananas.",
      "Check that your chocolate is dairy-free to keep it vegan.",
      "About 353 kcal per slice.",
      "Keeps 5 days at room temperature, or freeze for up to 2 months."
    ]
  }
];
