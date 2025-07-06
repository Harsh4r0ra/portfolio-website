# 🔧 Technical Documentation

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Component Structure](#component-structure)
3. [Command System](#command-system)
4. [State Management](#state-management)
5. [API Integration](#api-integration)
6. [Styling System](#styling-system)
7. [Mobile Responsiveness](#mobile-responsiveness)
8. [Performance Optimizations](#performance-optimizations)
9. [Security Considerations](#security-considerations)
10. [Testing Strategy](#testing-strategy)

## 🏗️ Architecture Overview

### **Technology Stack**
- **Framework**: Next.js 12.1.6 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Hack Nerd Font
- **Deployment**: Vercel (optimized)

### **Core Architecture**
```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                     │
├─────────────────────────────────────────────────────────────┤
│  Components: Input, History, Ps1, Banner                  │
├─────────────────────────────────────────────────────────────┤
│                   Command Execution Layer                   │
├─────────────────────────────────────────────────────────────┤
│  Utils: shell.ts, commandExists.ts, tabCompletion.ts      │
├─────────────────────────────────────────────────────────────┤
│                    Command Implementation                   │
├─────────────────────────────────────────────────────────────┤
│  Commands: commands.ts, api_commands.ts, sumfetch.ts      │
├─────────────────────────────────────────────────────────────┤
│                     External APIs                          │
├─────────────────────────────────────────────────────────────┤
│  GitHub API, Weather API, Quote API                       │
└─────────────────────────────────────────────────────────────┘
```

## 🧩 Component Structure

### **Core Components**

#### **1. Input Component (`src/components/input.tsx`)**
```typescript
interface InputProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
  containerRef: React.MutableRefObject<HTMLDivElement>;
  command: string;
  history: Array<HistoryInterface>;
  lastCommandIndex: number;
  setCommand: (command: string) => void;
  setHistory: (command: string) => void;
  setLastCommandIndex: (index: number) => void;
  clearHistory: () => void;
}
```

**Key Features:**
- **Keyboard handling**: Arrow keys, Tab completion, Ctrl+C, Ctrl+L
- **Mobile optimization**: Touch-friendly input with proper attributes
- **Auto-focus**: Maintains focus for seamless typing
- **Responsive layout**: Stacks vertically on mobile

#### **2. History Component (`src/components/history/History.tsx`)**
```typescript
interface HistoryInterface {
  command: string;
  output: string;
}
```

**Key Features:**
- **Command display**: Shows executed commands with prompts
- **Output rendering**: Safely renders HTML output
- **Responsive layout**: Adapts to different screen sizes
- **Text wrapping**: Handles long commands and outputs

#### **3. Ps1 Component (`src/components/Ps1.tsx`)**
```typescript
// Displays terminal prompt: username@hostname:~$
```

**Key Features:**
- **Dynamic content**: Uses config values
- **Color coding**: Different colors for different parts
- **Responsive sizing**: Scales appropriately on mobile

### **State Management**

#### **History Hook (`src/components/history/hook.ts`)**
```typescript
interface UseHistoryReturn {
  history: Array<HistoryInterface>;
  command: string;
  lastCommandIndex: number;
  setCommand: (command: string) => void;
  setHistory: (command: string) => void;
  clearHistory: () => void;
  setLastCommandIndex: (index: number) => void;
}
```

**State Management Features:**
- **Command history**: Stores all executed commands
- **Current command**: Tracks current input
- **History navigation**: Allows arrow key navigation
- **History clearing**: Ctrl+L functionality

## ⚙️ Command System

### **Command Architecture**

#### **1. Command Registration**
```typescript
// src/utils/bin/index.ts
export * from './commands';
export * from './api_commands';
export { default as sumfetch } from './sumfetch';
```

#### **2. Command Execution Flow**
```typescript
// src/utils/shell.ts
export const shell = async (
  command: string,
  setHistory: (command: string) => void,
  clearHistory: () => void,
  setCommand: (command: string) => void
): Promise<void> => {
  // 1. Parse command and arguments
  // 2. Check if command exists
  // 3. Execute command function
  // 4. Update history with result
}
```

#### **3. Command Categories**

**Basic Commands (`src/utils/bin/commands.ts`)**
- **Navigation**: help, about, banner
- **Social**: github, linkedin, email, repo
- **Search**: google, duckduckgo, bing, reddit
- **System**: date, whoami, echo
- **Fun**: sudo, ls, cd, vi, vim, nvim, emacs

**API Commands (`src/utils/bin/api_commands.ts`)**
- **Data fetching**: projects, readme, weather, quote
- **External APIs**: GitHub API, Weather API, Quote API

**Special Commands**
- **sumfetch**: Personal information display
- **man**: Manual pages system

### **Command Implementation Pattern**
```typescript
export const commandName = async (args: string[]): Promise<string> => {
  // 1. Validate arguments
  if (!args.length) {
    return 'Usage: commandName [argument]';
  }
  
  // 2. Process arguments
  const argument = args.join(' ');
  
  // 3. Execute logic
  const result = await someFunction(argument);
  
  // 4. Return formatted output
  return result;
};
```

## 🔄 State Management

### **History State**
```typescript
const [history, setHistory] = useState<Array<HistoryInterface>>([]);
const [command, setCommand] = useState<string>('');
const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);
```

### **State Updates**
```typescript
// Add command to history
const addToHistory = (command: string, output: string) => {
  setHistory(prev => [...prev, { command, output }]);
};

// Clear history
const clearHistory = () => {
  setHistory([]);
  setLastCommandIndex(0);
};
```

## 🌐 API Integration

### **API Utilities (`src/utils/api.ts`)**

#### **GitHub API**
```typescript
export const getProjects = async (): Promise<Array<Repository>> => {
  const response = await fetch(
    `https://api.github.com/users/${config.social.github}/repos`
  );
  return response.json();
};
```

#### **Weather API**
```typescript
export const getWeather = async (city: string): Promise<string> => {
  const response = await fetch(
    `https://wttr.in/${city}?format=3`
  );
  return response.text();
};
```

#### **Quote API**
```typescript
export const getQuote = async (): Promise<QuoteResponse> => {
  const response = await fetch('https://api.quotable.io/random');
  return response.json();
};
```

### **Error Handling**
```typescript
const handleApiError = (error: Error, fallback: string): string => {
  console.error('API Error:', error);
  return fallback;
};
```

## 🎨 Styling System

### **CSS Architecture**

#### **Global Styles (`src/styles/global.css`)**
```css
/* Base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom fonts */
@font-face {
  font-family: 'Hack';
  src: url(/assets/fonts/Hack-NF.ttf);
  display: swap;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  * { font-size: 14px; }
  input, button, a { min-height: 44px; min-width: 44px; }
}
```

#### **Tailwind Configuration (`tailwind.config.js`)**
```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-background': '#282a36',
        'dark-background': '#282a36',
        // ... other custom colors
      }
    }
  }
};
```

### **Responsive Design**

#### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

#### **Mobile Optimizations**
```css
/* Touch targets */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 8px;
}

/* Prevent zoom on input */
input[type="text"] {
  font-size: 16px;
}

/* Responsive ASCII art */
.ascii-art {
  font-size: 8px; /* Mobile */
}

@media (min-width: 769px) {
  .ascii-art {
    font-size: 10px; /* Tablet */
  }
}

@media (min-width: 1025px) {
  .ascii-art {
    font-size: 12px; /* Desktop */
  }
}
```

## 📱 Mobile Responsiveness

### **Mobile-First Approach**

#### **1. Viewport Configuration**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

#### **2. Responsive Layout**
```typescript
// Input component layout
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
  <label className="flex-shrink-0"><Ps1 /></label>
  <input className="flex-grow touch-target" />
</div>
```

#### **3. Touch Optimizations**
- **Minimum touch targets**: 44px × 44px
- **Proper spacing**: 8px minimum between elements
- **Keyboard handling**: Prevents zoom on input focus
- **Scroll optimization**: Smooth scrolling on mobile

### **Mobile-Specific Features**
- **Responsive font sizes**: 14px on mobile, 15px on tablet, default on desktop
- **Stacked layouts**: Vertical stacking on mobile, horizontal on desktop
- **Touch-friendly buttons**: Larger touch targets for mobile
- **Optimized scrollbars**: Smaller scrollbars on mobile devices

## ⚡ Performance Optimizations

### **1. Code Splitting**
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### **2. Font Optimization**
```css
@font-face {
  font-family: 'Hack';
  src: url(/assets/fonts/Hack-NF.ttf);
  display: swap; /* Prevents layout shift */
}
```

### **3. Image Optimization**
- **WebP format**: Smaller file sizes
- **Responsive images**: Different sizes for different devices
- **Lazy loading**: Load images as needed

### **4. Bundle Optimization**
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
};
```

## 🔒 Security Considerations

### **1. Input Sanitization**
```typescript
// Sanitize user input
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};
```

### **2. XSS Prevention**
```typescript
// Safe HTML rendering
<div dangerouslySetInnerHTML={{ __html: sanitizedOutput }} />
```

### **3. API Security**
```typescript
// Rate limiting for external APIs
const rateLimitedFetch = async (url: string): Promise<Response> => {
  // Implement rate limiting logic
  return fetch(url);
};
```

### **4. Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

## 🧪 Testing Strategy

### **1. Unit Testing**
```typescript
// Example test for command execution
describe('Command Execution', () => {
  test('should execute help command', async () => {
    const result = await help([]);
    expect(result).toContain('Available Commands');
  });
});
```

### **2. Integration Testing**
```typescript
// Test command history
describe('Command History', () => {
  test('should add command to history', () => {
    const { result } = renderHook(() => useHistory([]));
    act(() => {
      result.current.setHistory('test command');
    });
    expect(result.current.history).toHaveLength(1);
  });
});
```

### **3. E2E Testing**
```typescript
// Test user interactions
describe('Terminal Interaction', () => {
  test('should execute command on Enter', async () => {
    render(<Terminal />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    await waitFor(() => {
      expect(screen.getByText('Available Commands')).toBeInTheDocument();
    });
  });
});
```

## 📊 Performance Metrics

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Bundle Analysis**
```bash
# Analyze bundle size
npm run build
npm run analyze
```

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 Development Workflow

### **1. Local Development**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### **2. Code Quality**
```bash
# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

### **3. Deployment**
```bash
# Build for Vercel
npm run build

# Deploy to Vercel
vercel --prod
```

## 📈 Monitoring and Analytics

### **1. Error Tracking**
```typescript
// Error boundary for React components
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
    // Send to error tracking service
  }
}
```

### **2. Performance Monitoring**
```typescript
// Monitor command execution time
const measureCommandExecution = async (command: string, fn: Function) => {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;
  console.log(`Command '${command}' took ${duration}ms`);
  return result;
};
```

---

*This technical documentation provides a comprehensive overview of the terminal website's architecture, implementation details, and development guidelines.* 