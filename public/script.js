const buttons = document.querySelectorAll(".ingredient-buttons button");
const container = document.getElementById("recipeContainer");
const returnBtn = document.getElementById("returnToHomepage");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("ingredientsDiv");

buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const choice = btn.dataset.choice;

    const res = await fetch(`/api/recipe?choice=${choice}`);
    const recipe = await res.json();

    renderRecipe(recipe);

    returnBtn.disabled = false;
  });
});

function renderRecipe(recipe) {
  container.innerHTML = `
    <h2 id="recipeTitle" class="fade-in">${recipe.name}</h2>

    <button id="ingredientsButton">
      Show Ingredients
    </button>

    <div id="overlay">
      <div id="ingredientsDiv">
        <ul id="ingredientsList">
          <li>${recipe.ingredients.protein.name}, ${recipe.ingredients.protein.preparation}</li>
          <li>${recipe.ingredients.salsa.name}</li>
          ${recipe.ingredients.toppings
            .map((t) => `<li>${t.quantity} of ${t.name}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
  `;

  const ingredientsButton = document.getElementById("ingredientsButton");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("ingredientsDiv");

  ingredientsButton.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  popup.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
