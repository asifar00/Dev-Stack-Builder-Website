<div align="center">

# 🚀 Dev Stack Builder

### Build and customize your development stack with ease.

A modern and responsive React application that lets developers explore technologies and create their own personalized development stack.

[🌐 Live Demo](https://dev-stack-builder-website-six.vercel.app/)

</div>

---

## 📖 About the Project

**Dev Stack Builder** is a React-based web application designed to make choosing and organizing development technologies simple and interactive.

Users can browse available technologies, add them to their stack, and build a personalized collection based on their development needs. The project focuses on a clean user interface, responsive design, and practical use of React concepts such as components, props, state, hooks, and conditional rendering.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black) | UI library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white) | Type safety |
| ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white) | Build tool & dev server |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white) | Styling |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | Markup |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | Styling |
| **React Toastify** | Toast notifications |
| **PostCSS + Autoprefixer** | CSS processing |
| **ESLint** | Code linting |

---

## ✨ Features

### 🧩 Technology Stack Builder

Browse available development technologies and add the ones you want to your personalized stack.

### ⚡ Interactive Interface

Add and remove technologies dynamically while receiving feedback through an interactive React interface.

### 📱 Responsive Design

The application is designed to provide a smooth experience across desktop, tablet, and mobile screen sizes.

---

## 📁 Project Structure

```text
Dev-Stack-Builder-Website/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Images (logo, banner illustration)
│   ├── components/          # Navbar, Hero, TechnologySection, StackSidebar, etc.
│   ├── data/
│   │   └── technologies.json  # Technology catalog
│   ├── types/
│   │   └── technology.ts    # Shared TypeScript types
│   ├── utils/
│   │   └── categoryColors.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asifar00/Dev-Stack-Builder-Website.git
```

### 2. Open the project directory

```bash
cd Dev-Stack-Builder-Website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to view the application.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read because we can write the UI structure directly alongside our JavaScript/TypeScript logic.

```tsx
const title = <h1>Dev Stack Builder</h1>;
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change while the application is running.

For example:

* **Props:** Parent sends a technology to a child component.
* **State:** The application stores which technologies the user has selected.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The **`useState`** hook lets a functional React component store and update data.

In this project, it is used to manage the application's changing UI data, such as the technologies selected by the user for their stack.

When the state changes, React automatically updates the relevant part of the interface.

Example:

```tsx
const [selectedStack, setSelectedStack] = useState([]);
```

Here, `selectedStack` stores the current stack and `setSelectedStack` updates it.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The **`useEffect`** hook is used for running side effects after a component renders.

In this project, it is used when loading the technology data from the JSON file. This allows the application to load the data when the relevant component starts running and then use that data to display the available technologies.

A simple example is:

```tsx
useEffect(() => {
  // Load technology data
}, []);
```

The empty dependency array means the effect runs when the component is initially loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique **`key`** to identify each item in a list.

This helps React understand which items have changed, been added, or been removed, so it can update the UI efficiently.

Example:

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Each technology should have a different `key`.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different UI depending on whether a condition is true or false.

For example, the project can show an empty-stack message when the user has not selected any technologies:

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
```

If the stack is empty, the message is displayed. Otherwise, the selected technologies are shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

To send something back, the parent can pass a **callback function** as a prop. The child then calls that function when an action happens.

### Parent

```tsx
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>
```

### Child

```tsx
<button onClick={() => onAdd(technology)}>
  Add
</button>
```

Here, the parent sends `technology` and `onAdd` to the child. When the user clicks the button, the child calls `onAdd()` and sends the selected technology back through the callback.

---

<div align="center">

Made with ❤️ using React, TypeScript, and Tailwind CSS

</div>
