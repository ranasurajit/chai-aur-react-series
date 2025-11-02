# Understanding React State Batching and setState Behavior

## 🧩 Overview

This example demonstrates **how React batches multiple state updates** and why calling `setState` (or `setCounter`) multiple times inside a single event handler **does not always behave as expected**.

---

## ⚙️ The Problem Code

```jsx
const modifyCounter = (increment) => {
  if (increment === 0) {
    setCounter(0);
  } else {
    setCounter(counter + increment);
    setCounter(counter + increment);
    setCounter(counter + increment);
    setCounter(counter + increment);
  }
};
```

### ❌ What Happens Here

Even though we call `setCounter(counter + increment)` four times, **React batches these updates together**.

So if `counter = 0` and `increment = 1`,  
the final value of `counter` will be **1**, not 4.

**Reason:**  
All four updates use the same stale value of `counter` (0), because React batches updates for performance and only applies them after the function exits.

---

## ✅ The Correct Approach (Functional Updates)

To make each call build upon the previous state, use the *functional updater form* of `setState`:

```jsx
const modifyCounter = (increment) => {
  if (increment === 0) {
    setCounter(0);
  } else {
    setCounter(prev => prev + increment);
    setCounter(prev => prev + increment);
    setCounter(prev => prev + increment);
    setCounter(prev => prev + increment);
  }
};
```

### ✅ Expected Behavior

Now if `counter = 0` and `increment = 1`,  
the state transitions like this:
```
0 → 1 → 2 → 3 → 4
```
So the final value of `counter` becomes **4**.

---

## 🔍 Key Takeaways

| Concept | Explanation |
|----------|--------------|
| **State Batching** | React combines multiple state updates in the same event loop for performance. |
| **Stale State** | Each `setState(counter + increment)` reads the same old value of `counter`. |
| **Functional Update** | `setState(prev => prev + increment)` ensures each update uses the latest state. |
| **React 18 Behavior** | Automatic batching is enabled even across async operations. |

---

## 🧠 Learning Summary

- `setState` is **asynchronous and batched**.  
- Multiple direct state updates in a single synchronous function won’t accumulate.  
- Use **functional updater form** to ensure sequential updates work correctly.  
- Always prefer **`setCounter(prev => ...)`** when your update depends on the previous state.

---

## ✍️ Author

**Surajit Rana**  
Principal Software Engineer — Bengaluru, India  
📧 [surajit1602@gmail.com](mailto:surajit1602@gmail.com)

---

> This README is part of the *React Learning Series* focused on internal state mechanics and performance behavior.
