// gitprofile.config.js

const config = {
  github: {
    username: 'minhee33', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'Assignment_12',
        'Assignment_11',
        'two-sum',
        'SWE_2021_41_2023_2_week_1',
        'SWE_2021_41_2023_2_week_4',
        'mypy',
        'tensorflow-ml-nlp-tf2',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'minhee0906',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '010-6217-9873',
    email: 'minheekim3@naver.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TypeScript',
    'JavaScript',
    'C',
    'Flutter/Dart',
    'React.js',
    'Node.js',
    'MySQL',
    'MariaDB',
    'MongoDB',
    'Git',
    'Docker',
    'CSS/SCSS',
  ],
  experiences: [
    {
      company: 'CodiMe',
      position: 'Product Developer & Co-Founder',
      from: 'June 2021',
      to: 'Present',
      companyLink: 'https://codime.io',
    },
    {
      company: 'YG Entertainment project',
      position: 'Team Lead & Front-end & Back-end Developer',
      from: '2021',
      to: '2021',
      // companyLink: '',
    },
    {
      company: 'AsiaToday Press project',
      position: 'Front-end Developer',
      from: '2020',
      to: '2020',
      // companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'ETS TOEIC',
      body: '875',
      year: 'May 2022',
      link: 'https://www.toeic.co.kr',
    },
  ],
  education: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'College of Computing and Informatics',
      from: '2019',
      to: 'Present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '뉴스리워드앱 개발 With 아시아투데이',
      description: 'Java를 활용한 안드로이드앱 Front-end 개발',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.asiatoday.co.kr',
    },
    {
      title: '데이터 수집/분석 자동화사이트 개발 With YG엔터테인먼트',
      description: `HTML/CSS/Javascript를 활용한 Web Front-end,
        Python/Django/MariaDB를 활용한 Back-end 개발`,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/YGentertainment-project/YGentertainment-project',
    },
    {
      title:
        '스타트업을 위한 정부지원사업 서류 자동 생성 솔루션 With SPARCS Hackathon',
      description: `React/Typescript를 사용한 Web Front-end 개발`,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/SPARCS-2023-StartUp-Hackathon-2/ssimply-frontend',
    },
    {
      title: 'CodiMe Android/IOS Application',
      description: `Flutter/Dart/Firebase/AWS를 활용한 App Front-end 개발`,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://codime.io',
    },
    {
      title: 'CodiMe 내 다양한 프로덕트 제작',
      description: `React/Typescript/Flutter/Dart를 사용한 web 개발,
      Python/FastAPI를 사용한 server 개발 등`,
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://codime.io',
    },
  ],
  awards: [
    {
      title:
        '서울 도시제조업의 문제 해결을 위한 인공지능(AI) 아이디어 경진대회 대상',
      description: `2023.11.`,
      icon: 'trophy-aqua.svg',
    },
    {
      title:
        '메타버스/AI 콘텐츠 페스티벌 AI 기술을 활용한 문화콘텐츠 공모전 본선 진출',
      description: `2023.09.`,
      icon: 'trophy-aqua.svg',
    },
    {
      title:
        '성균관대학교 인공지능혁신공유대학사업단 인공지능아이디어 공모전 대상',
      description: `2023.02.`,
      icon: 'trophy-aqua.svg',
    },
    {
      title: 'SPARCS 2023 StartUp 해커톤 우수상',
      description: `2023.01.`,
      icon: 'trophy-aqua.svg',
    },
    {
      title:
        '한국외대 서울시캠퍼스타운사업단 이문융합 아이디어매칭 해커톤 우수상',
      description: `2022.11.`,
      icon: 'trophy-aqua.svg',
    },
  ],
  honors: [
    {
      title: '해외 코딩 교육영상 제작 동아리 Voluntain',
      description: `2021.06 — 2023.08`,
      icon: 'school-aqua.svg',
    },
    {
      title: '성균관대학교 소프트웨어학과 딘스 수상',
      description: `2019.2학기, 2022.1학기`,
      icon: 'school-aqua.svg',
    },
    {
      title: '성적장학금',
      description: `2021.2학기`,
      icon: 'school-aqua.svg',
    },
    {
      title: '성균가족상 봉사부분 장려상 (성균SW멘토링)',
      description: `2019`,
      icon: 'school-aqua.svg',
    },
  ],
  introduction: {
    introduction: `서비스 구현에 관심이 많은 프로덕트 개발자 미니에요. 현재 성균관대학교 소프트웨어학과 4학년 2학기에 재학중이며, 다양한 분야의 개발을 하기 위해 노력중이에요. 원하는 프로덕트 개발을 마음껏 할 수 있을 정도로 실력을 쌓는 게 목표에요.`,
    career: `학교에서 2번의 산학협력프로젝트와 교외에서 해커톤에 참여하여 프로젝트 개발을 경험해봤어요. 지금은 CodiMe 코파운더 및 프로덕트 개발자로 일하는 중이에요.`,
  },
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
