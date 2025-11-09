# 🚀 React Router v7.9.x Learning Project

This project was built as part of a hands-on learning journey to master **React Router v7.9.x** — understanding routing fundamentals, loaders, navigation, and component structuring within a modern React environment.

---

## 🧠 Key Learnings

### 1. React Router v7.9.x Fundamentals
- Implemented **client-side routing** using `<RouterProvider>` and `createBrowserRouter`.
- Explored **nested routes** and **route hierarchy** for modular page composition.
- Learned how to use the **new data APIs** — particularly **loaders** for prefetching route data.
- Understood **lazy loading of routes** to optimize performance.

### 2. Component-Level Design
- Created reusable and semantic components like `Header`, `Footer`, and `User`.
- Applied **layout routes** for shared UI across pages.
- Learned component-based **page segregation** for `Home`, `About`, `Contact`, and `GitHub`.

### 3. Data Loading and Fetching
- Used `githubInfoLoader.js` to experiment with **React Router’s new loader functions**.
- Practiced **data-driven routing** by dynamically rendering GitHub profile data using loaders.
- Understood the difference between loaders and `useEffect`-based fetching.

### 4. Navigation & Dynamic Params
- Built interactive navigation with the `Link` and `NavLink` components.
- Learned how to use **route parameters** and **dynamic routing** in `User.jsx`.
- Implemented **conditional route rendering** and fallback UI handling.

### 5. Styling & UX
- Used `App.css` and `index.css` for base theming and layout.
- Practiced component-scoped styling and responsive adjustments.

---

## 🏗️ Project Structure

```
src/
 ├── App.jsx              # Root component managing routes
 ├── App.css              # Global styling
 ├── index.css            # Base theme and resets
 ├── main.jsx             # React entry point with RouterProvider
 ├── utils/
 │    ├── constant.js     # Shared constants
 │    └── githubInfoLoader.js # Data loader for GitHub route
 ├── components/
 │    ├── Header.jsx      # Top navigation bar
 │    ├── Footer.jsx      # Footer section
 │    ├── Home.jsx        # Home page
 │    ├── About.jsx       # About page
 │    ├── Contact.jsx     # Contact page
 │    ├── GitHub.jsx      # GitHub data page using loader
 │    ├── User.jsx        # Dynamic user route
 │    └── index.js        # Barrel export file
```

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | React 18+ |
| Routing | React Router v7.9.x |
| Language | JavaScript (ES6+) |
| Build Tool | Vite |
| Styling | CSS3 |

---

## ⚡ Code Snippets and Explanations

### 🧭 Route Setup (`main.jsx`)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import GitHub from "./components/GitHub.jsx";
import User from "./components/User.jsx";
import { githubInfoLoader } from "./utils/githubInfoLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "github",
        element: <GitHub />,
        loader: githubInfoLoader, // 🚀 Fetches GitHub data before rendering
      },
      {
        path: "user/:id", // ⚙️ Dynamic route with params
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

🧩 **Explanation:**
- Routes are defined using `createBrowserRouter`, supporting nested routes under `/`.
- Each route defines a component, and optionally a `loader` for prefetching data.
- `RouterProvider` supplies the router instance globally.

---

### 🧑‍💻 Using Route Params (`User.jsx`)

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Extracts the dynamic part of the URL
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>User Profile</h2>
      <p>Currently viewing user with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default User;
```

🧠 **What you learned:**
- Dynamic routes like `/user/:id` allow you to capture route parameters.
- The `useParams()` hook provides access to those parameters inside the component.
- You can use this pattern for dynamic pages such as profiles, products, etc.

---

### 🌐 Using Loaders (`githubInfoLoader.js` and `GitHub.jsx`)

#### 📁 `githubInfoLoader.js`
```js
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/surajitrana");
  const data = await response.json();
  return data;
};
```

#### 📄 `GitHub.jsx`
```jsx
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData(); // Accesses data fetched by the loader

  return (
    <div className="github-section">
      <h2>GitHub Profile</h2>
      <img src={data.avatar_url} alt="Profile" width={120} />
      <h3>{data.name}</h3>
      <p>{data.bio}</p>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub
      </a>
    </div>
  );
}

export default GitHub;
```

🧩 **Explanation:**
- The loader runs **before** the component renders.
- The data fetched in the loader is automatically available via `useLoaderData()`.
- This approach removes the need for `useEffect` + local state management for fetched data.
- Improves performance and makes routing **data-aware**.

---

## 🚀 Setup & Run Locally

```bash
# 1️⃣ Clone the repository
git clone <your-repo-url>

# 2️⃣ Navigate into the project folder
cd your-project-folder

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

The app will be available at **http://localhost:5173/** (or the port shown in terminal).

---

## 📈 Future Improvements

- [ ] Add **error boundaries** and `ErrorElement` for routes.  
- [ ] Use **deferred data loading** for async-heavy components.  
- [ ] Implement **dark/light theme toggle**.  
- [ ] Add **unit tests** for route loaders and components.  

---

## 🧩 Learning Outcome

By building this project, I gained practical knowledge of how **React Router v7.9.x** simplifies routing and data handling.  
I now understand **data-driven routing**, **dynamic route parameters**, and **loader-based prefetching**, preparing me to architect scalable and maintainable front-end applications.

---

**Author:** Surajit Rana  
📘 *Built as part of React Router learning series (v7.9.x)*
