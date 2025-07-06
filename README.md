# 🖥️ Personal Terminal Website

A modern, interactive terminal-style personal website built with Next.js, TypeScript, and Tailwind CSS. This project creates a fully functional terminal experience in the browser, complete with commands, ASCII art, and responsive design.

## ✨ Features

### 🎮 **Interactive Terminal Experience**
- **Real-time command execution** - Type commands and see instant responses
- **Command history** - Navigate through previous commands with arrow keys
- **Tab completion** - Auto-complete commands and arguments
- **Responsive design** - Works perfectly on desktop, tablet, and mobile devices

### 📋 **Built-in Commands**
- **`help`** - Display categorized list of all available commands
- **`man [command]`** - Detailed manual pages for each command (Linux-style)
- **`sumfetch`** - Personal information display with ASCII art
- **`about`** - Brief introduction and welcome message
- **`resume`** - Open your resume in a new tab
- **`projects`** - Display your GitHub repositories
- **`readme`** - Show your GitHub README content

### 🔗 **Social & Contact Commands**
- **`github`** - Open GitHub profile
- **`linkedin`** - Open LinkedIn profile
- **`email`** - Open email client
- **`repo`** - Open main GitHub repository

### 🔍 **Search Commands**
- **`google [query]`** - Search Google
- **`duckduckgo [query]`** - Search DuckDuckGo
- **`bing [query]`** - Search Bing
- **`reddit [query]`** - Search Reddit

### 🌤️ **Utility Commands**
- **`weather [city]`** - Get weather information for any city
- **`quote`** - Display random inspirational quotes
- **`date`** - Show current date and time
- **`whoami`** - Display current user

### 🎨 **Fun Commands**
- **`sudo`** - Easter egg command (Rick Roll)
- **`banner`** - Display ASCII art banner
- **`ls`, `cd`, `vi`, `vim`, `nvim`, `emacs`** - Humorous fake system commands

### 📱 **Mobile Optimized**
- **Touch-friendly interface** - All interactive elements are 44px minimum
- **Responsive layout** - Adapts to different screen sizes
- **Mobile keyboard optimization** - Prevents zoom and improves typing
- **PWA ready** - Can be installed as a mobile app

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/terminal-website.git
   cd terminal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure your information**
   Edit `config.json` with your personal details:
   ```json
   {
     "name": "Your Name",
     "title": "Your Title",
     "email": "your.email@example.com",
     "social": {
       "github": "your-github-username",
       "linkedin": "your-linkedin-id"
     },
     "resume_url": "/resume.pdf",
     "repo": "https://github.com/yourusername/terminal-website"
   }
   ```

4. **Add your resume**
   Place your resume PDF in the `public/` directory as `resume.pdf`

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Customization

### 📝 **Personal Information**
Edit `config.json` to customize:
- **Personal details** - Name, email, social links
- **Terminal appearance** - Hostname, username, colors
- **Links** - Resume, GitHub, LinkedIn URLs

### 🎨 **Styling**
- **Colors**: Modify color schemes in `config.json`
- **Fonts**: Replace fonts in `public/assets/fonts/`
- **ASCII Art**: Customize ASCII art in `src/utils/bin/commands.ts`

### ⚙️ **Commands**
- **Add new commands**: Create functions in `src/utils/bin/commands.ts`
- **API commands**: Add to `src/utils/bin/api_commands.ts`
- **Command categories**: Update help command categorization

### 📱 **Mobile Customization**
- **Responsive breakpoints**: Modify in `src/styles/global.css`
- **Touch targets**: Adjust minimum sizes for mobile
- **Font sizes**: Customize mobile typography

## 📁 Project Structure

```
terminal-website/
├── public/
│   ├── assets/fonts/          # Custom fonts
│   │   ├── resume.pdf             # Your resume
│   │   └── favicon.ico           # Website icon
├── src/
│   ├── components/
│   │   ├── history/          # Command history component
│   │   ├── input.tsx         # Terminal input component
│   │   └── Ps1.tsx          # Terminal prompt component
│   ├── pages/
│   │   ├── _app.tsx         # App wrapper
│   │   └── index.tsx        # Main terminal page
│   ├── styles/
│   │   └── global.css       # Global styles and mobile CSS
│   └── utils/
│       ├── bin/              # Command implementations
│       │   ├── commands.ts   # Basic commands
│       │   ├── api_commands.ts # API-based commands
│       │   ├── sumfetch.ts   # Personal info display
│       │   └── index.ts      # Command exports
│       ├── api.ts            # API utilities
│       ├── shell.ts          # Command execution logic
│       └── tabCompletion.ts  # Tab completion logic
├── config.json               # Personal configuration
├── package.json              # Dependencies and scripts
└── README.md                # This file
```

## 🎯 Available Commands

### **General Commands**
| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Show personal introduction |
| `sumfetch` | Display personal info with ASCII art |
| `man [command]` | Show detailed manual for command |
| `banner` | Display ASCII art banner |

### **Profile Commands**
| Command | Description |
|---------|-------------|
| `resume` | Open resume PDF |
| `readme` | Display GitHub README |

### **Social Commands**
| Command | Description |
|---------|-------------|
| `github` | Open GitHub profile |
| `linkedin` | Open LinkedIn profile |
| `email` | Open email client |
| `repo` | Open main repository |

### **Search Commands**
| Command | Description |
|---------|-------------|
| `google [query]` | Search Google |
| `duckduckgo [query]` | Search DuckDuckGo |
| `bing [query]` | Search Bing |
| `reddit [query]` | Search Reddit |

### **Utility Commands**
| Command | Description |
|---------|-------------|
| `weather [city]` | Get weather for city |
| `projects` | Show GitHub repositories |
| `quote` | Display random quote |
| `date` | Show current date/time |
| `whoami` | Show current user |

### **Fun Commands**
| Command | Description |
|---------|-------------|
| `sudo` | Easter egg (Rick Roll) |
| `ls` | List fake directories |
| `cd` | Change directory (joke) |
| `vi/vim/nvim/emacs` | Editor jokes |

## 🔧 Configuration

### **config.json Structure**
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "ascii": "liveterm",
  "social": {
    "github": "your-github-username",
    "linkedin": "your-linkedin-id"
  },
  "email": "your.email@example.com",
  "ps1_hostname": "YOURHOSTNAME",
  "ps1_username": "visitor",
  "repo": "https://github.com/yourusername/terminal-website",
  "resume_url": "/resume.pdf",
  "colors": {
    "light": {
      "background": "#282a36",
      "foreground": "#f8f8f2",
      "yellow": "#f1fa8c",
      "green": "#50fa7b",
      "gray": "#6272a4",
      "blue": "#8be9fd",
      "red": "#ff5555"
    },
    "dark": {
      "background": "#282a36",
      "foreground": "#f8f8f2",
      "yellow": "#f1fa8c",
      "green": "#50fa7b",
      "gray": "#6272a4",
      "blue": "#8be9fd",
      "red": "#ff5555"
    }
  }
}
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` directory

### **Docker**
```bash
docker build -t terminal-website .
docker run -p 3000:3000 terminal-website
```

## 🛠️ Development

### **Adding New Commands**
1. Create the command function in `src/utils/bin/commands.ts`:
   ```typescript
   export const myCommand = async (args: string[]): Promise<string> => {
     return 'Hello from my new command!';
   };
   ```

2. Add to help categorization in the help command

3. Update manual pages if needed

### **Adding API Commands**
1. Create API function in `src/utils/api.ts`
2. Add command in `src/utils/bin/api_commands.ts`
3. Handle async responses properly

### **Customizing Styles**
- **Global styles**: Edit `src/styles/global.css`
- **Mobile responsiveness**: Modify media queries
- **Colors**: Update in `config.json`

## 📱 Mobile Features

### **Responsive Design**
- **Breakpoints**: Mobile (768px), Tablet (1024px), Desktop (1025px+)
- **Touch targets**: 44px minimum for accessibility
- **Font sizes**: Responsive typography
- **Layout**: Stacked on mobile, side-by-side on desktop

### **Mobile Optimizations**
- **Keyboard handling**: Prevents zoom on input focus
- **Touch interactions**: Improved touch targets
- **Scrollbars**: Smaller on mobile devices
- **ASCII art**: Responsive font sizes

## 🔒 Security Considerations

- **Input sanitization**: All user input is properly handled
- **XSS prevention**: HTML output is safely rendered
- **API rate limiting**: External API calls are limited
- **Content Security Policy**: Configured for security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Hack Font** - Terminal font
- **Vercel** - Deployment platform

## 📞 Support

If you have any questions or need help:
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions
- **Email**: Contact via the terminal website

---

**Made with ❤️ by Harsh Arora**

*This terminal website brings the classic Unix terminal experience to the modern web, making personal information accessible and interactive.*