import GitHub from '../icons/GitHub.png';
import LinkedIn from '../icons/LinkedIn.png';
import Instagram from '../icons/Instagram.png';
import Strava from '../icons/Strava.png';
import Email from '../icons/Email.png';
import JustGiving from '../icons/JustGiving.png';

export const LINKS = [
    {
        id: 'github',
        icon: GitHub,
        label: 'GitHub',
        url: 'https://github.com/rajBar/',
        data: { prefix: "", r: "r", middle: "", suffix: "", link: "https://github.com/rajBar/" }
    },
    {
        id: 'linkedin',
        icon: LinkedIn,
        label: 'LinkedIn',
        url: 'https://uk.linkedin.com/in/gulrajbariah',
        data: { prefix: "Gulraj (", r: "R", middle: ")‎‎‎ ‎", suffix: "iah", link: "https://uk.linkedin.com/in/gulrajbariah" }
    },
    {
        id: 'email',
        icon: Email,
        label: 'E-mail',
        url: 'mailto:me@raj.bar',
        data: { prefix: "me@", r: "r", middle: ".", suffix: "", link: "mailto:me@raj.bar" }
    },
    {
        id: 'instagram',
        icon: Instagram,
        label: 'Instagram',
        url: 'https://www.instagram.com/rajbariah/?hl=en',
        data: { prefix: "@", r: "R", middle: "", suffix: "iah", link: "https://www.instagram.com/rajbariah/?hl=en" }
    },
    {
        id: 'justgiving',
        icon: JustGiving,
        label: 'JustGiving',
        url: 'https://raj.bar/donate',
        data: { prefix: "", r: "r", middle: ".", suffix: "/donate", link: "https://raj.bar/donate" }
    },
    {
        id: 'strava',
        icon: Strava,
        label: 'Strava',
        url: 'https://www.strava.com/athletes/59236473',
        data: { prefix: "", r: "R", middle: "‎‎‎ ‎", suffix: "iah", link: "https://www.strava.com/athletes/59236473" }
    },
    {
        id: 'movie-list',
        label: 'Movie List',
        isText: true,
        url: 'https://raj.bar/movies/',
        data: { prefix: "", r: "r", middle: ".", suffix: "/movies", link: "https://raj.bar/movies/" }
    },
    {
        id: 'strava-stats',
        label: 'Strava Stats',
        isText: true,
        url: 'https://raj.bar/strava/',
        data: { prefix: "", r: "r", middle: ".", suffix: "/strava", link: "https://raj.bar/strava/" }
    }
];
