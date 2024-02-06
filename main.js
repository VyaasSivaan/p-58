function calculateDistances() {
    // Planet distances in light years
    const planetDistances = {
        "Mercury": 0.000016,
        "Venus": 0.000042,
        "Earth": 0.000071,
        "Mars": 0.000108,
        "Jupiter": 0.000554,
        "Saturn": 0.001083,
        "Uranus": 0.002749,
        "Neptune": 0.004365
    };

    // Update the distances dynamically
    const planetDistancesContainer = document.getElementById("planet-distances");
    planetDistancesContainer.innerHTML = ""; // Clear previous content

    for (const planet in planetDistances) {
        const label = document.createElement("label");
        label.className = "planet-label";
        label.textContent = `${planet}: `;

        const input = document.createElement("input");
        input.type = "text";
        input.className = "distance-input";
        input.value = planetDistances[planet].toFixed(6);
        input.readOnly = true;

        planetDistancesContainer.appendChild(label);
        planetDistancesContainer.appendChild(input);
    }
}
