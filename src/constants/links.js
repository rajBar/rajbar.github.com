import GitHub from '../icons/GitHub.png';
import LinkedIn from '../icons/LinkedIn.png';
import Instagram from '../icons/Instagram.png';
import Strava from '../icons/Strava.png';
import Email from '../icons/Email.png';
import JustGiving from '../icons/JustGiving.png';
import Running from '../icons/Running.png';
import Movie from '../icons/Movie.svg';
import Api from '../icons/Api.png';

const LINK_DATA = {
    github: {
        id: 'github',
        icon: GitHub,
        label: 'GitHub',
        url: 'https://github.com/rajBar/',
        data: { prefix: "", r: "r", middle: "", suffix: "", link: "https://github.com/rajBar/" }
    },
    linkedin: {
        id: 'linkedin',
        icon: LinkedIn,
        label: 'LinkedIn',
        url: 'https://uk.linkedin.com/in/gulrajbariah',
        data: { prefix: "Gulraj (", r: "R", middle: ")‎‎‎ ‎", suffix: "iah", link: "https://uk.linkedin.com/in/gulrajbariah" }
    },
    email: {
        id: 'email',
        icon: Email,
        label: 'E-mail',
        url: 'mailto:me@raj.bar',
        isInvertible: true,
        data: { prefix: "me@", r: "r", middle: ".", suffix: "", link: "mailto:me@raj.bar" }
    },
    instagram: {
        id: 'instagram',
        icon: Instagram,
        label: 'Instagram',
        url: 'https://www.instagram.com/rajbariah/?hl=en',
        data: { prefix: "@", r: "R", middle: "", suffix: "iah", link: "https://www.instagram.com/rajbariah/?hl=en" }
    },
    justgiving: {
        id: 'justgiving',
        icon: JustGiving,
        label: 'JustGiving',
        url: 'https://raj.bar/donate',
        data: { prefix: "", r: "r", middle: ".", suffix: "/donate", link: "https://raj.bar/donate" }
    },
    strava: {
        id: 'strava',
        icon: Strava,
        label: 'Strava',
        url: 'https://www.strava.com/athletes/59236473',
        data: { prefix: "", r: "R", middle: "‎‎‎ ‎", suffix: "iah", link: "https://www.strava.com/athletes/59236473" }
    },
    'movie-list': {
        id: 'movie-list',
        label: 'Movie List',
        icon: Movie,
        isText: true,
        isInvertible: true,
        url: 'https://raj.bar/movies/',
        data: { prefix: "", r: "r", middle: ".", suffix: "/movies", link: "https://raj.bar/movies/" }
    },
    'strava-stats': {
        id: 'strava-stats',
        label: 'Strava Stats',
        icon: Running,
        isText: true,
        isInvertible: true,
        url: 'https://raj.bar/strava/',
        data: { prefix: "", r: "r", middle: ".", suffix: "/strava", link: "https://raj.bar/strava/" }
    },
    'api': {
        id: 'api',
        label: 'API',
        icon: Api,
        isText: true,
        isInvertible: true,
        url: 'https://raj.bar/strava/',
        data: { prefix: "api.", r: "r", middle: "", suffix: "iah.com", link: "https://api.rajbariah.com/" }
    }
};

// Manually define the order for Desktop
export const DESKTOP_LINKS = [
    LINK_DATA['github'],
    LINK_DATA['linkedin'],
    LINK_DATA['email'],
    LINK_DATA['strava'],
    LINK_DATA['api'],
    LINK_DATA['instagram'],
    LINK_DATA['movie-list'],
    LINK_DATA['strava-stats'],
];

// Manually define the order for Mobile
export const MOBILE_LINKS = [
    LINK_DATA['github'],
    LINK_DATA['linkedin'],
    LINK_DATA['email'],
    LINK_DATA['strava'],
    LINK_DATA['movie-list'],
    LINK_DATA['strava-stats'],
    LINK_DATA['instagram'],
];
