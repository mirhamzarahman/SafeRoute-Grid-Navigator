# 🚀 SafeRoute Grid Navigator

A lightweight JavaScript project that demonstrates how Dynamic Programming can be used to calculate every possible safe route across a grid while avoiding blocked locations.

Instead of focusing on shortest paths, this project determines **how many different valid routes exist**, making it useful as a conceptual model for navigation, robotics, warehouse automation, and logistics.

---

## 📖 Project Overview

SafeRoute Grid Navigator simulates an environment where a robot, delivery vehicle, or autonomous system must travel through a rectangular grid.

Some locations are blocked and cannot be crossed.

The system efficiently computes every possible valid route from the starting point to the destination without passing through obstacles.

---

## 🌍 Real-World Conceptual Scenario

Imagine a warehouse where an autonomous robot delivers packages.

- ✅ Open cells represent accessible warehouse aisles.
- 🚫 Blocked cells represent shelves or temporary obstacles.
- 🤖 The robot may only move:
  - Right
  - Down

The software calculates how many different valid delivery routes exist.

---

# 🧠 Core Concept

The project uses **Dynamic Programming (DP)**.

Instead of repeatedly recalculating the number of routes to each location, it stores previously computed values and reuses them.

This dramatically improves performance.

---

# ⚙️ How the System Works

1. Read the navigation grid.
2. Check if the starting point is blocked.
3. Create a DP array.
4. Traverse every cell.
5. If a cell is blocked:
   - Store 0 routes.
6. Otherwise:
   - Add routes from:
     - Top
     - Left
7. Continue until reaching the destination.
8. Return the total number of valid paths.

---

# 🏗 Algorithm Used

- Dynamic Programming
- State Transition
- Grid Traversal

State Equation

```
paths[row][column] =
paths[fromTop] + paths[fromLeft]
```

Obstacle

```
paths[row][column] = 0
```

---

# 🔄 Step-by-Step Logic

```
Start

↓

Initialize DP array

↓

Is start blocked?
│
├── Yes → Return 0
│
└── No

↓

Visit each grid cell

↓

Blocked?

├── Yes → Store 0

└── No

↓

Add paths from
Top + Left

↓

Repeat

↓

Return destination value
```

---

# ✨ Features

- 🚀 Dynamic Programming solution
- 📦 Space-optimized implementation
- 🧩 Obstacle-aware navigation
- ⚡ Efficient path counting
- 📚 Educational implementation
- 🛣️ Practical navigation concept
- 💻 Clean JavaScript code
- 🔍 Easy to extend

---

# 📋 Example

Input Grid

```text
0 0 0
0 1 0
0 0 0
```

Legend

- 0 = Open
- 1 = Blocked

Output

```text
2
```

Explanation

Two safe routes exist from the top-left corner to the bottom-right corner.

---

# 📊 Complexity Analysis

| Metric | Complexity |
|---------|------------|
| Time | O(m × n) |
| Space | O(n) |

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| JavaScript (ES6+) | Implementation |
| Dynamic Programming | Optimization |
| Arrays | State Storage |
| Node.js | Runtime |

---

# 📁 Project Structure

```
SafeRoute-Grid-Navigator/
│
├── src/
│   └── safeRouteNavigator.js
│
├── README.md
│
└── LICENSE
```

---

# ▶️ How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/SafeRoute-Grid-Navigator.git
```

Go inside

```bash
cd SafeRoute-Grid-Navigator
```

Run

```bash
node src/safeRouteNavigator.js
```

---

# 🎯 Learning Outcomes

After studying this project you will understand:

- Dynamic Programming
- State Transition
- Grid Traversal
- Space Optimization
- Route Counting
- Obstacle Handling
- Algorithm Optimization
- Efficient Problem Solving

---

# 🚀 Possible Future Improvements

- Interactive grid visualization
- Shortest route calculation
- Diagonal movement support
- Multiple destinations
- Path reconstruction
- Random obstacle generation
- Web interface
- Animated robot simulation

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and learn from it.

---

## 👨‍💻 Author

**Mir Hamza Rahman**

GitHub:
https://github.com/mirhamzarahman

Repository:

https://github.com/mirhamzarahman/SafeRoute-Grid-Navigator
