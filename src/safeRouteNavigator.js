/**
 * SafeRoute Grid Navigator
 * ------------------------------------
 * Calculates the number of safe routes
 * through a grid while avoiding blocked cells.
 *
 * Movement Rules:
 * - Right
 * - Down
 *
 * Dynamic Programming
 * Space Complexity: O(columns)
 * Time Complexity: O(rows × columns)
 */

/**
 * Counts all valid routes through a navigation grid.
 *
 * @param {number[][]} navigationGrid
 * @returns {number}
 */
function calculateSafeRoutes(navigationGrid) {
    const totalRows = navigationGrid.length;
    const totalColumns = navigationGrid[0].length;

    // DP array storing the number of routes to each column
    const routeCounts = new Array(totalColumns).fill(0);

    // Initialize the starting position
    routeCounts[0] = navigationGrid[0][0] === 1 ? 0 : 1;

    for (let row = 0; row < totalRows; row++) {
        for (let column = 0; column < totalColumns; column++) {

            // Blocked location
            if (navigationGrid[row][column] === 1) {
                routeCounts[column] = 0;
            }
            // Open location
            else if (column > 0) {
                routeCounts[column] += routeCounts[column - 1];
            }
        }
    }

    return routeCounts[totalColumns - 1];
}

/* ---------------------------------- */
/* Example Usage                      */
/* ---------------------------------- */

const warehouseGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];

const totalSafeRoutes = calculateSafeRoutes(warehouseGrid);

console.log("Available Safe Routes:", totalSafeRoutes);
