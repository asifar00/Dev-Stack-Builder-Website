<div align="center">

# ⚙️ Dev Stack Builder

**Build and customize your development stack with ease.**

A modern, responsive React application for exploring technologies and assembling your ideal dev stack.

[🚀 Live Demo](https://dev-stack-builder-website-six.vercel.app/)

</div>

---

## 📖 About

**Dev Stack Builder** helps developers cut through the noise of endless framework and tool choices. It presents a curated catalog of frontend, backend, database, styling, and DevOps technologies, letting users browse, rate, and compare them, then add the ones they want to a personal "stack." It's a modern, responsive React + TypeScript application built to make exploring and planning a tech stack simple and enjoyable.

## 🌐 Live Demo

<div align="center">

### [**➡️ View Live Site**](https://dev-stack-builder-website-six.vercel.app/)

</div>

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

- 🧩 **Technology Stack Builder** — Browse a catalog of technologies and add or remove them from your personal stack, with live toast notifications confirming each action.
- ⚡ **Interactive User Interface** — Ratings, difficulty levels, and category badges for every technology, plus a live-updating sidebar summarizing your selections.
- 📱 **Responsive Design** — A layout with a dedicated mobile navigation menu that adapts cleanly across desktop, tablet, and mobile screens.

---

## 📂 Project Structure

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

Clone the repository and run it locally:

```bash
git clone https://github.com/asifar00/Dev-Stack-Builder-Website.git
cd Dev-Stack-Builder-Website
npm install
npm run dev
```

The development server will start and print a local URL (typically `http://localhost:5173`) — open it in your browser to view the app.

---

# 🧠 React Questions & Answers

#### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like syntax directly inside JavaScript/TypeScript files. Instead of manually creating elements with function calls, we can write something that looks like `<div>Hello</div>` right in our component code. React then converts this into regular JavaScript behind the scenes. It's used because it makes UI code much easier to read, write, and reason about — you can see exactly what the UI will look like just by reading the component.

#### 2. What is the difference between props and state?

- **Props** are data passed *into* a component from its parent. They're read-only from the child's perspective — the child can't change its own props. For example, `TechnologyCard` receives `technology`, `isAdded`, and `onAdd` as props from `TechnologySection`.
- **State** is data that a component manages internally and can change over time. When state updates, the component re-renders. For example, `App` keeps the `stack` array in its own state, and updates it whenever the user adds or removes a technology.

In short: props flow down from a parent, while state lives and changes inside the component itself.

#### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates a state variable inside a function component, along with a setter function to update it. Whenever the setter is called, React re-renders the component with the new value.

In this project, `useState` is used in:

- **`App.tsx`** — four state variables: `technologies` (the loaded list), `stack` (the user's selected technologies), `isLoading` (whether data is still loading), and `loadError` (an error message if loading fails).
- **`Navbar.tsx`** — `isMenuOpen`, which tracks whether the mobile navigation menu is open or closed.

#### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs a side effect after a component renders — things like fetching data, subscribing to something, or setting a timer, which shouldn't happen during the render itself.

In `App.tsx`, `useEffect` runs once when the component mounts to load the technology data from `src/data/technologies.json`. It wraps the data in a short simulated delay (via `setTimeout`) so the loading state (`isLoading`) is genuinely exercised, then updates state with `setTechnologies` on success or `setLoadError` if something goes wrong, and finally sets `isLoading` to `false`. An `isMounted` flag is used inside the effect to avoid updating state if the component unmounts before loading finishes.

#### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to tell items in a list apart so it can efficiently figure out what changed, was added, or was removed when the list re-renders. Without a stable, unique key, React can get confused about which item is which, leading to bugs like incorrect re-renders or lost input state. In this project, keys are based on stable IDs, for example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard key={technology.id} technology={technology} isAdded={...} onAdd={onAdd} />
))}
```

#### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on some condition — like whether data is loading, whether there's an error, or whether a list is empty. In `StackSidebar.tsx`, the component checks if the stack is empty and shows a placeholder message instead of the list:

```tsx
{count === 0 ? (
  <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200">
    <p className="text-sm text-slate-400">Your stack is empty.</p>
  </div>
) : (
  <>
    <ul className="mt-4 flex flex-col gap-2.5">
      {stack.map((technology) => (
        <StackItem key={technology.id} technology={technology} onRemove={onRemove} />
      ))}
    </ul>
    <button onClick={onRemoveAll}>Remove All</button>
  </>
)}
```

#### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child using **props** — it just includes the values as attributes when rendering the child component. To send information back up, the parent passes a **callback function** as a prop, and the child calls that function (usually with some data) whenever something happens, like a click.

A simplified example based on this project:

```tsx
// Parent (App.tsx)
function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setStack((current) => [...current, technology]);
  };

  return <TechnologyCard technology={someTech} isAdded={false} onAdd={handleAdd} />;
}

// Child (TechnologyCard.tsx)
function TechnologyCard({ technology, onAdd }: TechnologyCardProps) {
  return (
    <button onClick={() => onAdd(technology)}>
      Add to Stack
    </button>
  );
}
```

Here, `technology` flows down as a prop, and clicking the button calls `onAdd`, sending the technology data back up to the parent so it can update the `stack` state.

---

<div align="center">

Made with ❤️ using React, TypeScript, and Tailwind CSS

</div>
