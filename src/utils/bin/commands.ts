// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

  // Help
  export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort();
    
    // Categorize commands
    const categories = {
      'General': ['help', 'about', 'banner', 'sumfetch', 'man'],
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
      
          // Create a responsive table format
    const maxCols = 2; // Use 2 columns for better mobile display
    for (let i = 0; i < cmdList.length; i += maxCols) {
      const row = cmdList.slice(i, i + maxCols);
      const formattedRow = row.map(cmd => `  ${cmd.padEnd(12)}`).join('');
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

// Manual command - like Linux man
export const man = async (args: string[]): Promise<string> => {
  const command = args[0];
  
  if (!command) {
    return `Usage: man [command]
Example: man help, man sumfetch, man resume

Available commands for manual:
${Object.keys(bin).sort().join(', ')}`;
  }

  const manuals: { [key: string]: string } = {
    help: `
HELP(1)                    User Commands                    HELP(1)

NAME
       help - Display available commands and usage information

SYNOPSIS
       help

DESCRIPTION
       Displays a categorized list of all available commands with descriptions.
       Commands are organized into logical groups for easy navigation.

EXAMPLES
       help

SEE ALSO
       man(1), about(1), sumfetch(1)
`,

    about: `
ABOUT(1)                   User Commands                    ABOUT(1)

NAME
       about - Display information about the user

SYNOPSIS
       about

DESCRIPTION
       Displays a brief introduction and welcome message about the user.
       Provides links to resume, GitHub readme, and other resources.

EXAMPLES
       about

SEE ALSO
       sumfetch(1), resume(1), readme(1)
`,

    sumfetch: `
SUMFETCH(1)                User Commands                    SUMFETCH(1)

NAME
       sumfetch - Display user summary and contact information

SYNOPSIS
       sumfetch

DESCRIPTION
       Displays an ASCII art representation of the user with contact
       information, social links, and a brief summary.

EXAMPLES
       sumfetch

SEE ALSO
       about(1), resume(1), github(1), linkedin(1)
`,

    resume: `
RESUME(1)                  User Commands                    RESUME(1)

NAME
       resume - Open user's resume

SYNOPSIS
       resume

DESCRIPTION
       Opens the user's latest resume (resume_final_JULY.pdf) in a new tab.

EXAMPLES
       resume

SEE ALSO
       about(1), sumfetch(1), github(1)
`,

    github: `
GITHUB(1)                  User Commands                    GITHUB(1)

NAME
       github - Open GitHub profile

SYNOPSIS
       github

DESCRIPTION
       Opens the user's GitHub profile in a new tab.

EXAMPLES
       github

SEE ALSO
       linkedin(1), repo(1), projects(1)
`,

    linkedin: `
LINKEDIN(1)                User Commands                    LINKEDIN(1)

NAME
       linkedin - Open LinkedIn profile

SYNOPSIS
       linkedin

DESCRIPTION
       Opens the user's LinkedIn profile in a new tab.

EXAMPLES
       linkedin

SEE ALSO
       github(1), email(1), sumfetch(1)
`,

    email: `
EMAIL(1)                   User Commands                    EMAIL(1)

NAME
       email - Open email client

SYNOPSIS
       email

DESCRIPTION
       Opens the default email client with the user's email address.

EXAMPLES
       email

SEE ALSO
       github(1), linkedin(1), sumfetch(1)
`,

    repo: `
REPO(1)                    User Commands                    REPO(1)

NAME
       repo - Open GitHub repository

SYNOPSIS
       repo

DESCRIPTION
       Opens the user's main GitHub repository in a new tab.

EXAMPLES
       repo

SEE ALSO
       github(1), projects(1), readme(1)
`,

    projects: `
PROJECTS(1)                User Commands                    PROJECTS(1)

NAME
       projects - Display GitHub projects

SYNOPSIS
       projects

DESCRIPTION
       Fetches and displays a list of the user's GitHub repositories
       with links to each project.

EXAMPLES
       projects

SEE ALSO
       repo(1), github(1), readme(1)
`,

    readme: `
README(1)                  User Commands                    README(1)

NAME
       readme - Display GitHub README

SYNOPSIS
       readme

DESCRIPTION
       Fetches and displays the user's GitHub README file content.

EXAMPLES
       readme

SEE ALSO
       about(1), projects(1), repo(1)
`,

    weather: `
WEATHER(1)                 User Commands                    WEATHER(1)

NAME
       weather - Get weather information

SYNOPSIS
       weather [city]

DESCRIPTION
       Fetches current weather information for the specified city.
       If no city is provided, displays usage information.

EXAMPLES
       weather london
       weather new york
       weather tokyo

SEE ALSO
       google(1), duckduckgo(1)
`,

    google: `
GOOGLE(1)                  User Commands                    GOOGLE(1)

NAME
       google - Search Google

SYNOPSIS
       google [query]

DESCRIPTION
       Opens Google search with the specified query in a new tab.

EXAMPLES
       google javascript tutorials
       google react hooks

SEE ALSO
       duckduckgo(1), bing(1), reddit(1)
`,

    duckduckgo: `
DUCKDUCKGO(1)              User Commands                    DUCKDUCKGO(1)

NAME
       duckduckgo - Search DuckDuckGo

SYNOPSIS
       duckduckgo [query]

DESCRIPTION
       Opens DuckDuckGo search with the specified query in a new tab.

EXAMPLES
       duckduckgo privacy tools
       duckduckgo linux commands

SEE ALSO
       google(1), bing(1), reddit(1)
`,

    bing: `
BING(1)                    User Commands                    BING(1)

NAME
       bing - Search Bing

SYNOPSIS
       bing [query]

DESCRIPTION
       Opens Bing search with the specified query in a new tab.
       Includes a humorous message about using Bing.

EXAMPLES
       bing microsoft office
       bing windows 11

SEE ALSO
       google(1), duckduckgo(1), reddit(1)
`,

    reddit: `
REDDIT(1)                  User Commands                    REDDIT(1)

NAME
       reddit - Search Reddit

SYNOPSIS
       reddit [query]

DESCRIPTION
       Opens Reddit search with the specified query in a new tab.

EXAMPLES
       reddit programming tips
       reddit web development

SEE ALSO
       google(1), duckduckgo(1), bing(1)
`,

    quote: `
QUOTE(1)                   User Commands                    QUOTE(1)

NAME
       quote - Display random quote

SYNOPSIS
       quote

DESCRIPTION
       Fetches and displays a random inspirational quote.

EXAMPLES
       quote

SEE ALSO
       about(1), sumfetch(1)
`,

    date: `
DATE(1)                    User Commands                    DATE(1)

NAME
       date - Display current date and time

SYNOPSIS
       date

DESCRIPTION
       Displays the current date and time in a readable format.

EXAMPLES
       date

SEE ALSO
       whoami(1), echo(1)
`,

    whoami: `
WHOAMI(1)                  User Commands                    WHOAMI(1)

NAME
       whoami - Display current user

SYNOPSIS
       whoami

DESCRIPTION
       Displays the current user name (visitor).

EXAMPLES
       whoami

SEE ALSO
       date(1), echo(1)
`,

    echo: `
ECHO(1)                    User Commands                    ECHO(1)

NAME
       echo - Display a line of text

SYNOPSIS
       echo [text]

DESCRIPTION
       Displays the specified text or arguments.

EXAMPLES
       echo hello world
       echo "Hello, World!"

SEE ALSO
       whoami(1), date(1)
`,

    ls: `
LS(1)                      User Commands                    LS(1)

NAME
       ls - List fake directories

SYNOPSIS
       ls

DESCRIPTION
       Displays a list of fake directories for demonstration purposes.

EXAMPLES
       ls

SEE ALSO
       cd(1)
`,

    cd: `
CD(1)                      User Commands                    CD(1)

NAME
       cd - Change directory (not implemented)

SYNOPSIS
       cd

DESCRIPTION
       Returns a humorous message about not being able to afford more directories.

EXAMPLES
       cd

SEE ALSO
       ls(1)
`,

    vi: `
VI(1)                      User Commands                    VI(1)

NAME
       vi - Text editor (not implemented)

SYNOPSIS
       vi

DESCRIPTION
       Returns a humorous message suggesting to use vim instead.

EXAMPLES
       vi

SEE ALSO
       vim(1), nvim(1), emacs(1)
`,

    vim: `
VIM(1)                     User Commands                    VIM(1)

NAME
       vim - Text editor (not implemented)

SYNOPSIS
       vim

DESCRIPTION
       Returns a humorous message suggesting to use nvim instead.

EXAMPLES
       vim

SEE ALSO
       vi(1), nvim(1), emacs(1)
`,

    nvim: `
NVIM(1)                    User Commands                    NVIM(1)

NAME
       nvim - Text editor (not implemented)

SYNOPSIS
       nvim

DESCRIPTION
       Returns a humorous message suggesting to use emacs instead.

EXAMPLES
       nvim

SEE ALSO
       vi(1), vim(1), emacs(1)
`,

    emacs: `
EMACS(1)                   User Commands                    EMACS(1)

NAME
       emacs - Text editor (not implemented)

SYNOPSIS
       emacs

DESCRIPTION
       Returns a humorous message suggesting to use VSCode instead.

EXAMPLES
       emacs

SEE ALSO
       vi(1), vim(1), nvim(1)
`,

    sudo: `
SUDO(1)                    User Commands                    SUDO(1)

NAME
       sudo - Execute command as superuser (not implemented)

SYNOPSIS
       sudo

DESCRIPTION
       Returns a humorous message and opens a Rick Roll video.

EXAMPLES
       sudo

SEE ALSO
       whoami(1)
`,

    banner: `
BANNER(1)                  User Commands                    BANNER(1)

NAME
       banner - Display ASCII art banner

SYNOPSIS
       banner

DESCRIPTION
       Displays a large ASCII art banner with the user's name and
       links to GitHub repository.

EXAMPLES
       banner

SEE ALSO
       help(1), about(1), sumfetch(1)
`,

    man: `
MAN(1)                     User Commands                    MAN(1)

NAME
       man - Display manual pages

SYNOPSIS
       man [command]

DESCRIPTION
       Displays detailed manual pages for the specified command.
       Provides comprehensive information about command usage,
       examples, and related commands.

EXAMPLES
       man help
       man sumfetch
       man resume

SEE ALSO
       help(1), about(1)
`
  };

  const manual = manuals[command.toLowerCase()];
  
  if (!manual) {
    return `No manual entry for '${command}'
Try: man help
Available commands: ${Object.keys(bin).sort().join(', ')}`;
  }

  return manual;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<div class="ascii-art">
██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗    █████╗ ██████╗  ██████╗ ██████╗  █████╗ 
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║   ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
███████║███████║██████╔╝███████╗███████║   ███████║██████╔╝██║   ██║██████╔╝███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║   ██╔══██║██╔══██╗██║   ██║██╔══██╗██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║   ██║  ██║██║  ██║╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
</div>

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
