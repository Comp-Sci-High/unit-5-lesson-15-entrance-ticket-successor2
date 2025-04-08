console.log("Script running...")

const base = 'https://vigilant-space-invention-qjprj7755xq29q4j-3000.app.github.dev'

// Create a function that tests the post route handler [2 pts]
async function postPotion(label, effect, ingredients, color, isExplosive) {
    try {
        // fill in the path
        const response = await fetch(base + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: label,
                effect: effect,
                ingredients: ingredients,
                color: color,
                isExplosive: isExplosive,
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
postPotion("Robot", "robot", "robot", "Silver", true )
