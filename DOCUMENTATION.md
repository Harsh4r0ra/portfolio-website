# LiveTerm Website Documentation

## 📋 Overview

LiveTerm is a terminal-styled website template built with Next.js that allows you to create interactive terminal-like websites in minutes. The project uses React, TypeScript, and Tailwind CSS for styling.

## 🏗️ Project Structure

### Root Directory Files

| File | Purpose | How to Edit |
|------|---------|-------------|
| `config.json` | **Main configuration file** - Contains all website settings, personal info, colors, and URLs | Edit this file to customize your website content, colors, and links |
| `package.json` | Project dependencies and scripts | Add new npm packages or modify build scripts |
| `themes.json` | Pre-configured color themes | Copy theme colors to `config.json` or add new themes |
| `README.md` | Project documentation | Update project description and usage instructions |
| `next.config.js` | Next.js configuration | Modify Next.js settings, redirects, or build options |
| `tailwind.config.js` | Tailwind CSS configuration | Customize Tailwind classes and color schemes |
| `tsconfig.json` | TypeScript configuration | Modify TypeScript compiler options |
| `vercel.json` | Vercel deployment configuration | Configure deployment settings |

### Source Code Structure (`src/`)

#### Pages (`src/pages/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `index.tsx` | **Main page component** - Renders the terminal interface | Modify the main layout, add new UI components |
| `_app.tsx` | App wrapper - global styles and providers | Add global providers, modify app-wide behavior |
| `404.tsx` | 404 error page | Customize the error page design |

#### Components (`src/components/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `input.tsx` | **Terminal input component** - Handles user input and commands | Modify input behavior, add new keyboard shortcuts |
| `Ps1.tsx` | **Terminal prompt component** - Displays the command prompt | Change prompt appearance, add dynamic elements |
| `history/History.tsx` | **Command history display** - Shows command output | Modify how command results are displayed |
| `history/hook.ts` | **History management hook** - Manages command history state | Change history behavior, add persistence |
| `history/interface.ts` | **History type definitions** | Modify TypeScript interfaces for history |

#### Utils (`src/utils/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `shell.ts` | **Command processor** - Executes commands and returns output | Add new command processing logic |
| `commandExists.ts` | **Command validation** - Checks if commands exist | Modify command validation rules |
| `tabCompletion.ts` | **Tab completion** - Handles command autocomplete | Add new completion suggestions |
| `api.ts` | **API utilities** - External API calls | Add new API integrations |

#### Commands (`src/utils/bin/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `commands.ts` | **Built-in commands** - Core terminal commands | Add new commands, modify existing ones |
| `sumfetch.ts` | **Summary command** - Displays personal info | Customize the summary display |
| `api_commands.ts` | **API-based commands** - Commands that fetch external data | Add commands that call external APIs |
| `index.ts` | **Command exports** - Exports all available commands | Add new command imports |

#### Styles (`src/styles/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `global.css` | **Global styles** - CSS styles and Tailwind imports | Add custom CSS, modify global styling |

### Public Assets (`public/`)
| Directory/File | Purpose | How to Edit |
|----------------|---------|-------------|
| `assets/fonts/` | **Custom fonts** - Terminal fonts | Add new fonts, replace existing ones |
| `favicon.ico` | **Website favicon** | Replace with your own favicon |
| `manifest.json` | **PWA manifest** | Configure PWA settings |
| Various icon files | **App icons** for different platforms | Replace with your own icons |

### Demo Assets (`demo/`)
| File | Purpose | How to Edit |
|------|---------|-------------|
| `demo.gif` | **Main demo animation** | Replace with your own demo |
| `*.png` files | **Theme previews** | Add screenshots of your custom themes |

## 🎨 Customization Guide

### 1. Basic Configuration (`config.json`)

**Location**: Root directory  
**Purpose**: Main configuration file for all website settings

```json
{
  "readmeUrl": "https://raw.githubusercontent.com/yourusername/yourrepo/master/README.md",
  "title": "Your Website Title",
  "name": "Your Name",
  "ascii": "your-ascii-art",
  "social": {
    "github": "your-github-username",
    "linkedin": "your-linkedin-username"
  },
  "email": "your-email@example.com",
  "ps1_hostname": "your-hostname",
  "ps1_username": "your-username",
  "repo": "https://github.com/yourusername/yourrepo",
  "resume_url": "https://your-resume-url.com",
  "donate_urls": {
    "paypal": "https://paypal.me/yourusername",
    "patreon": "https://patreon.com/yourusername"
  },
  "colors": {
    "light": { /* light theme colors */ },
    "dark": { /* dark theme colors */ }
  }
}
```

**What to edit**:
- Personal information (name, email, social links)
- Website title and branding
- Terminal prompt settings
- Color schemes
- URLs for resume, donations, etc.

### 2. Adding New Commands

**Location**: `src/utils/bin/commands.ts`  
**Purpose**: Add custom terminal commands

```typescript
// Add new command
export const yourCommand = async (args: string[]): Promise<string> => {
  // Your command logic here
  return 'Command output';
};
```

**Steps**:
1. Add the command function to `commands.ts`
2. Export it from `src/utils/bin/index.ts`
3. The command will be automatically available in the terminal

### 3. Customizing the Banner

**Location**: `src/utils/bin/commands.ts` (banner function)  
**Purpose**: Change the welcome banner displayed when the site loads

```typescript
export const banner = (args?: string[]): string => {
  return `
Your custom ASCII art here
Type 'help' to see available commands.
`;
};
```

### 4. Modifying the Summary Display

**Location**: `src/utils/bin/sumfetch.ts`  
**Purpose**: Customize the `sumfetch` command output

The file contains two different ASCII art styles - choose which one to use by setting the `ascii` value in `config.json`.

### 5. Changing Colors/Themes

**Method 1**: Use pre-configured themes
1. Open `themes.json`
2. Copy a theme's colors
3. Paste into `config.json` colors section

**Method 2**: Create custom colors
1. Edit the `colors` section in `config.json`
2. Define your own color palette for light and dark modes

### 6. Adding Custom Fonts

**Location**: `public/assets/fonts/`  
**Steps**:
1. Add your font files to the fonts directory
2. Import them in `src/styles/global.css`
3. Apply them using CSS classes

### 7. Modifying the Terminal Interface

**Location**: `src/components/input.tsx`  
**Purpose**: Change input behavior, add keyboard shortcuts

Key areas to modify:
- Keyboard event handling
- Command processing
- Input validation

**Location**: `src/components/Ps1.tsx`  
**Purpose**: Customize the command prompt appearance

### 8. Adding API Commands

**Location**: `src/utils/bin/api_commands.ts`  
**Purpose**: Add commands that fetch data from external APIs

```typescript
export const weather = async (args: string[]): Promise<string> => {
  // API call logic here
  return 'Weather information';
};
```

## 🚀 Development Workflow

### 1. Local Development
```bash
yarn install    # Install dependencies
yarn dev        # Start development server
```

### 2. Building for Production
```bash
yarn build      # Build the project
yarn start      # Start production server
```

### 3. Deployment
- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Docker**: Use the provided `Dockerfile` and `docker-compose.yml`
- **Other platforms**: Build with `yarn build` and deploy the `out/` directory

## 📁 File Locations Summary

### Configuration Files
- **Main config**: `config.json` (root)
- **Themes**: `themes.json` (root)
- **Package config**: `package.json` (root)

### Core Components
- **Main page**: `src/pages/index.tsx`
- **Input handling**: `src/components/input.tsx`
- **Command prompt**: `src/components/Ps1.tsx`
- **Command processing**: `src/utils/shell.ts`

### Commands
- **Built-in commands**: `src/utils/bin/commands.ts`
- **Summary command**: `src/utils/bin/sumfetch.ts`
- **API commands**: `src/utils/bin/api_commands.ts`

### Styling
- **Global styles**: `src/styles/global.css`
- **Tailwind config**: `tailwind.config.js`

### Assets
- **Fonts**: `public/assets/fonts/`
- **Icons**: `public/` (various icon files)
- **Demo images**: `demo/`

## 🔧 Common Customizations

### Adding a New Command
1. Edit `src/utils/bin/commands.ts`
2. Add your command function
3. Export it from `src/utils/bin/index.ts`

### Changing Colors
1. Edit `config.json` colors section
2. Or copy from `themes.json`

### Modifying the Banner
1. Edit the `banner` function in `src/utils/bin/commands.ts`
2. Use ASCII art generators for custom banners

### Adding External Links
1. Add URLs to `config.json`
2. Create commands in `commands.ts` that open these URLs

### Customizing the Prompt
1. Edit `src/components/Ps1.tsx`
2. Modify the prompt structure and styling

This documentation should help you understand where each part of the LiveTerm website is stored and how to edit different components to customize your terminal website! 