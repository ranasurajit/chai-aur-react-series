# Vite React Context API -- User Auth Demo (React 19)

A simple React application built with **Vite** that demonstrates how to
use the **Context API** for global state management in **React 19**.\
The app includes a mock authentication flow where users can log in and
view their profile, with state shared across components via Context.

------------------------------------------------------------------------

## 🚀 Features

-   🔧 **React Context API** for global state
-   🔐 Simple login/logout flow
-   👤 Display user details across multiple components
-   ⚡ Powered by **Vite**
-   🧩 Clean, scalable component structure
-   ⚛️ Updated for **React 19** patterns

------------------------------------------------------------------------

## 📂 Project Structure

    src/
    │
    ├── App.jsx
    ├── main.jsx
    │
    ├── contexts/
    │   ├── UserContext.js
    │   └── UserContextProvider.jsx
    │
    └── components/
        ├── Login.jsx
        └── UserProfile.jsx

------------------------------------------------------------------------

## 📑 Context Files

### **`UserContext.js`**

Creates a React Context object for sharing user data and
authentication-related functions.

### **`UserContextProvider.jsx`**

Holds global state:

``` js
const [user, setUser] = useState(null);
```

Provides:

-   `login(userData)`
-   `logout()`

Wraps the entire app to give child components access using:

``` jsx
<UserContext.Provider value={...}>
```

------------------------------------------------------------------------

## 🧠 How It Works

### 1️⃣ **User Logs In**

`Login.jsx` calls:

``` js
login({ name })
```

This updates the global user state and instantly notifies all subscribed
components.

------------------------------------------------------------------------

### 2️⃣ **Context Stores the User**

`UserContextProvider` keeps the user in memory and exposes:

-   `user`
-   `login()`
-   `logout()`

------------------------------------------------------------------------

### 3️⃣ **Profile Displays User Info**

`UserProfile.jsx` consumes the `user` from context and:

-   Displays the user's name\
-   Provides a logout button\
-   Reacts automatically when auth state changes

This setup demonstrates a clean and simple authentication-like pattern
without external libraries (Redux, Zustand, etc.).

------------------------------------------------------------------------

## 🏃 Getting Started

### Install dependencies

``` bash
npm install
```

### Run the app

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📚 Learnings from Building This App

### 🔹 1. Understanding React 19 Context Behavior

-   Efficient use of Context for shared global state\
-   Minimizing unnecessary re-renders\
-   Stable rendering behavior in React 19

### 🔹 2. When to Use Context vs Local State

-   Context → authentication, theme, language, shared data\
-   Local state → UI-level updates

### 🔹 3. Clean Architectural Separation

-   Context contains logic\
-   Components handle UI only\
-   Easier to scale and maintain

### 🔹 4. React 19 Improvements

-   Faster and more stable rendering\
-   Cleaner component patterns\
-   Future-ready for Actions & Server Components

### 🔹 5. Vite Tooling Advantages

-   Ultra-fast dev server\
-   Zero-config modern setup\
-   Faster builds and HMR

------------------------------------------------------------------------

## 🔧 Technologies Used

-   **React 19**
-   **Vite**
-   **Context API**
-   **JavaScript (ES2022)**

------------------------------------------------------------------------

## 📝 Future Improvements

-   Add protected routes using React Router
-   Persist auth state with localStorage
-   Add TypeScript
-   Add automated tests (Vitest + RTL)

------------------------------------------------------------------------
