
# 🔐 React Password Generator

A simple yet powerful **React Password Generator App** built using **React 19+ Hooks** (`useState`, `useEffect`, `useCallback`, `useRef`).  
This app allows you to generate customizable passwords, highlight a substring, and copy a selected part of the password to the clipboard — all while demonstrating key **React 19+ concepts** like declarative UI updates, cleanup handling, and stable callbacks.

---

## 🚀 Features

- Generate random passwords of adjustable length.  
- Toggle inclusion of **numbers** and **special characters**.  
- Copy a **substring** (not the entire password) to clipboard.  
- Dynamic button feedback for **Copied/Copy** states.  
- Safe cleanup of asynchronous operations (`setTimeout`).  

---

## 🧠 Key Learnings

### 1. **useState**
Manages reactive UI state efficiently.
```jsx
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState('');
const [copied, setCopied] = useState(false);
```

---

### 2. **useCallback**
Ensures functions aren’t re-created unnecessarily on each re-render — crucial for performance in **React 19+**, especially when passed to child components or effects.

#### ✅ Password Generator
```jsx
const passwordGenerator = useCallback(() => {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (numberAllowed) str += '0123456789';
  if (charAllowed) str += '!@#$%^&*(){}[]~-_=`';

  for (let i = 1; i <= length; i++) {
    const charIndex = Math.floor(Math.random() * (str.length + 1));
    pass += str.charAt(charIndex);
  }

  setPassword(pass);
  setCopied(false);
}, [length, numberAllowed, charAllowed]);
```

#### ✅ Copy Substring to Clipboard
```jsx
const copyPasswordToClipboard = useCallback(() => {
  const inputText = passwordRef.current;
  if (!inputText) return;

  inputText.focus();
  inputText.select();
  inputText.setSelectionRange(0, 6);

  const selectedPassword =
    inputText.value.substring(inputText.selectionStart, inputText.selectionEnd);

  const clipboardTimeout = setTimeout(() => {
    window.navigator.clipboard.writeText(selectedPassword)
      .then(() => setCopied(true))
      .catch((err) => console.error('Clipboard Error', err))
      .finally(() => {
        const copyTimeout = setTimeout(() => setCopied(false), 1000);
        cleanupTimeouts.current.push(copyTimeout);
      });
  }, 50);

  cleanupTimeouts.current.push(clipboardTimeout);
}, [password]);
```

---

### 3. **useRef**
Provides a way to persist values and directly manipulate DOM elements without re-renders.

```jsx
const passwordRef = useRef(null);      // Access the input element
const cleanupTimeouts = useRef([]);    // Store timeout IDs for cleanup
```

---

### 4. **useEffect**
Used for performing side effects such as regenerating the password or cleaning up async tasks.

#### Regenerate Password Automatically
```jsx
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed]);
```

#### Cleanup Timeouts on Unmount
```jsx
useEffect(() => {
  return () => {
    cleanupTimeouts.current.forEach(timeout => clearTimeout(timeout));
    cleanupTimeouts.current = [];
  };
}, []);
```

---

## 💡 Additional Learnings

- **Partial text selection**:
  ```js
  inputRef.setSelectionRange(startIndex, endIndex);
  ```
- **Clipboard API**:
  ```js
  window.navigator.clipboard.writeText(selectedText);
  ```
- **Dynamic styling** with conditional classes:
  ```jsx
  className={`${copied ? 'bg-green-700' : 'bg-blue-700'}`}
  ```

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React 19+** | Core library for UI and hooks |
| **Vite** | Lightning-fast development bundler |
| **Tailwind CSS** | Utility-first CSS for responsive design |
| **JavaScript (ESNext)** | Core logic and React hooks |
| **Clipboard API** | Native browser API for copying text |

---

## 🧱 Project Structure

```
src/
│
├── App.jsx           # Main Password Generator component
├── App.css           # Custom styles
└── index.js          # Entry point
```

---

## 🖼️ UI Preview

```
 ----------------------------------------------------------
|   Password Generator                                     |
|   ----------------------------------------------------   |
|   [GeneratedPassword123!]         [ Copy / Copied ]      |
|                                                          |
|   Length: [=== 8 ===]   [✓] Numbers   [✓] Characters     |
 ----------------------------------------------------------
```

---

## 🧰 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/vite-react-hooks-app.git

# Navigate to project folder
cd vite-react-hooks-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🧾 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Author

**Developed & documented by:** [Your Name]  
💡 Guided learning on React 19+ Hooks, Cleanup Management, and Clipboard API Integration.
