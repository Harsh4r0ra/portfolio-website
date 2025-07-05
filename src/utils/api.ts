import axios from 'axios';
import config from '../../config.json';

const funnyQuotes = [
  "“I'm not arguing, I'm just explaining why I'm right.” — Harsh Arora",
  "“My bed is a magical place where I suddenly remember everything I forgot to do.” — Harsh Arora",
  "“I'm not lazy, I'm on energy-saving mode.” — Harsh Arora",
  "“If at first you don't succeed, then skydiving definitely isn't for you.” — Steven Wright",
  "“I used to think I was indecisive, but now I'm not so sure.” — Harsh Arora",
  "“Life is short. Smile while you still have teeth.” — Mallory Hopkins",
  "“If you think nobody cares if you're alive, try missing a couple of payments.” — Earl Wilson",
  "“Some people graduate with honors, I am just honored to graduate.” — Harsh Arora",
  "“Why do they allow ‘silent’ in ‘listen’ but not in ‘shut up’?” — Harsh Arora",
  "“If you can't convince them, confuse them.” — Harry S. Truman",
  "“Always borrow money from a pessimist. They won’t expect it back.” — Oscar Wilde",
  "“I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.” — Harsh Arora",
  "“To steal ideas from one person is plagiarism; to steal from many is research.” — Steven Wright",
  "“Common sense is like deodorant. The people who need it most never use it.” — Harsh Arora",
  "“My wallet is like an onion. When I open it, it makes me cry.” — Harsh Arora"
];

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  // 50% chance to return a funny quote
  if (Math.random() < 0.5) {
    const randomFunny = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    return { quote: randomFunny };
  }

  try {
    const { data } = await axios.get('https://api.quotable.io/random');
    return {
      quote: `“${data.content}” — ${data.author}`,
    };
  } catch (error) {
    const fallbackFunny = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    return {
      quote: fallbackFunny,
    };
  }
};
