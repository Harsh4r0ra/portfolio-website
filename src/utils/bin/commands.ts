// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

  // Help
  export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort();
    
    // Categorize commands
    const categories = {
      'General': ['help', 'about', 'banner', 'sumfetch'],
      'Profile': ['resume', 'readme'],
      'Social': ['github', 'linkedin', 'email', 'repo'],
      'Search': ['google', 'duckduckgo', 'bing', 'reddit'],
      'Projects': ['projects'],
      'Weather': ['weather'],
      'Fun': ['quote', 'sudo'],
      'System': ['date', 'whoami', 'echo'],
      'File System': ['ls', 'cd'],
      'Editors': ['vi', 'vim', 'nvim', 'emacs']
    };

    let helpText = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                              Welcome to ${config.name}'s Terminal!                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Available Commands:
`;

    // Generate categorized table
    for (const [category, cmdList] of Object.entries(categories)) {
      helpText += `\n${category}:\n`;
      helpText += '─'.repeat(50) + '\n';
      
      // Create a table format
      const maxCols = 3;
      for (let i = 0; i < cmdList.length; i += maxCols) {
        const row = cmdList.slice(i, i + maxCols);
        const formattedRow = row.map(cmd => `  ${cmd.padEnd(15)}`).join('');
        helpText += formattedRow + '\n';
      }
    }

    helpText += `
╔══════════════════════════════════════════════════════════════════════════════╗
║                              Quick Start Guide                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Try these commands to get started:
  • sumfetch    - Display my summary and contact info
  • about       - Learn more about me
  • resume      - View my latest resume
  • projects    - See my GitHub projects
  • weather     - Check weather (e.g., weather london)

Navigation:
  • [Tab]       - Trigger command completion
  • [Ctrl+L]    - Clear terminal
  • [↑/↓]       - Navigate command history

Quick Links:
  • GitHub:     github
  • LinkedIn:   linkedin
  • Email:      email
  • Repository: repo

╔══════════════════════════════════════════════════════════════════════════════╗
║                              Total Commands: ${commands.length}                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
`;

    return helpText;
  };

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening my resume (resume_final_JULY.pdf)...';
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗    █████╗ ██████╗  ██████╗ ██████╗  █████╗ 
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║   ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
███████║███████║██████╔╝███████╗███████║   ███████║██████╔╝██║   ██║██████╔╝███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║   ██╔══██║██╔══██╗██║   ██║██╔══██╗██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║   ██║  ██║██║  ██║╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
