# React SPA Internship Assignment

A comprehensive single-page React application demonstrating proficiency in state management, side effects, form handling, dynamic UI, and component modularity.

## 🎯 Project Overview

This project implements **5 distinct React tasks** that showcase core React concepts and best practices:

- **State Management**: Using `useState` and `useReducer` for complex UI logic
- **Side Effects**: Utilizing `useEffect` for data persistence and timers
- **Form Handling**: Managing controlled components with validation
- **Dynamic UI**: Real-time filtering, progress tracking, and search highlighting
- **Component Modularity**: Clean, reusable component architecture

## 📋 Features & Tasks

### Task 1: Enhanced Todo App ✅
- Add, delete, and mark tasks as complete
- Filter tasks by status (All, Active, Completed)
- Priority levels for tasks (Low, Medium, High)
- LocalStorage persistence for data
- Real-time task count display

**Features:**
- Checkbox completion toggle
- Priority-based color coding
- Responsive task list
- Auto-save to browser storage

### Task 2: Form Handling & Validation ✅
- Comprehensive form validation with error messages
- Email regex validation
- Password strength validation (minimum 6 characters)
- Phone number format validation (10 digits)
- Password visibility toggle
- Success message feedback

**Features:**
- Real-time error clearing
- Inline validation messages
- Password show/hide toggle
- Form reset after successful submission

### Task 3: Dynamic Multi-Input Progress Bar ✅
- Main progress bar showing average of all inputs
- Individual progress bars for each metric
- Dual input (slider + number input)
- Color-coded bars based on value ranges:
  - Red: < 40%
  - Yellow: 40-70%
  - Green: > 70%
- Real-time calculation and updates

**Features:**
- 5 independent progress inputs
- Synchronized slider and number inputs
- Average calculation display
- Smooth transitions

### Task 4: Advanced Countdown Timer ✅
- Configurable timer (1-60 minutes)
- Start, Pause, Stop, and Reset controls
- Millisecond precision display
- LocalStorage persistence for page refreshes
- Visual progress ring indicator
- Auto-stop when timer reaches zero

**Features:**
- MM:SS.MS format display
- Progress ring animation
- State persistence across sessions
- Smooth control interactions

### Task 5: Live Search with Highlighting ✅
- Real-time search through list of names
- Query string highlighting in results
- Result count display
- Case-insensitive searching
- Responsive result list

**Features:**
- Instant search feedback
- Bold highlighting of matches
- Dynamic result count
- Smooth animations

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 4.4.0
- **Styling**: CSS3 (with custom CSS variables)
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser LocalStorage API
- **Package Manager**: npm

## 📦 Project Structure

```
src/
├── components/
│   ├── common/              # Shared components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Task 1 page
│   │   ├── Dashboard.jsx   # Tasks 2-5 page
│   │   └── NotFound.jsx
│   ├── Todo/              # Task 1: Todo App
│   │   ├── TodoApp.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   ├── FilterControls.jsx
│   │   └── TodoApp.css
│   ├── Forms/             # Task 2: Form Validation
│   │   ├── UserForm.jsx
│   │   └── UserForm.css
│   ├── Progress/          # Task 3: Progress Bar
│   │   ├── MultiProgressBar.jsx
│   │   └── MultiProgressBar.css
│   ├── Timer/             # Task 4: Countdown Timer
│   │   ├── CountdownTimer.jsx
│   │   └── CountdownTimer.css
│   └── Search/            # Task 5: Search
│       ├── SearchList.jsx
│       └── SearchList.css
├── hooks/
│   └── useLocalStorage.js  # Custom hook for persistence
├── styles/
│   ├── global.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Kalluru-HemaChandraReddy/React_intern_tasks.git
cd React_intern_tasks
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173/`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 🎨 Styling

The project uses custom CSS with:
- CSS Variables for consistent theming
- Responsive design with media queries
- Smooth transitions and animations
- Color-coded components for visual feedback

### Color Scheme
- **Primary**: #667eea (Purple)
- **Secondary**: #764ba2 (Dark Purple)
- **Success**: #4caf50 (Green)
- **Error**: #d32f2f (Red)
- **Warning**: #f57c00 (Orange)

## 💾 Data Persistence

All tasks use LocalStorage for data persistence:
- **Tasks**: Stored in `tasks` key
- **Timer State**: Stored in `timer_state` key
- Auto-saves on every state change
- Auto-loads on page refresh

## 🔑 Key Implementations

### Custom Hook: useLocalStorage
```javascript
const useLocalStorage = (key, initialValue) => {
  // Returns [value, setValue] similar to useState
  // Automatically persists to localStorage
}
```

### Form Validation
```javascript
// Regex patterns used:
- Email: /\S+@\S+\.\S+/
- Phone: /^\d{10}$/
- Password: minimum 6 characters
```

### Search Highlighting
```javascript
// Uses regex split to highlight matches:
text.split(new RegExp(`(${highlight})`, 'gi'))
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Tasks not saving?
- Check browser's LocalStorage in DevTools
- Clear cache and reload if needed

### Timer not persisting?
- Ensure LocalStorage is enabled
- Check timer_state in LocalStorage

### Styles not applying?
- Clear browser cache
- Restart dev server with `npm run dev`

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts** and your app will be live!

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📚 Learning Concepts Demonstrated

✅ React Hooks (useState, useEffect)
✅ Component Composition
✅ Props Drilling
✅ Controlled Components
✅ Form Validation
✅ LocalStorage API
✅ Event Handling
✅ Conditional Rendering
✅ List Rendering & Keys
✅ CSS Styling & Responsive Design
✅ Custom Hooks
✅ Regular Expressions
✅ Array Methods (map, filter, reduce)

## 📄 Assignment Requirements Met

- ✅ State Management with useState
- ✅ Side Effects with useEffect
- ✅ Data Persistence with LocalStorage
- ✅ Form Handling & Validation
- ✅ Real-time Filtering
- ✅ Progress Tracking
- ✅ Search with Highlighting
- ✅ Clean Component Structure
- ✅ Modular Architecture
- ✅ Professional Styling

## 👨‍💻 Author

**Chandrashekar**
- GitHub: [@Kalluru-HemaChandraReddy](https://github.com/Kalluru-HemaChandraReddy)

## 📄 License

This project is open source and available under the ISC License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## ⭐ Support

If you find this project helpful, please give it a star!

---

**Live Demo**: [Coming Soon - Check Vercel Deployment]

**Last Updated**: January 31, 2026

## Features

- **State Management**: Utilizes React's built-in hooks like `useState` and `useReducer` for managing component state.
- **Side Effects**: Implements custom hooks such as `useFetch` for handling API calls and managing loading/error states.
- **Form Handling**: Includes a `FormComponent` that demonstrates controlled components and form validation.
- **Dynamic UI**: Features a `DynamicList` component that allows real-time updates and filtering of items.
- **Component Modularity**: The application is structured into reusable components, making it easy to maintain and extend.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-spa-internship
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bugs you find.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.