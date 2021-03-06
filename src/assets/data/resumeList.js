const experienceList = [
    {
        company: 'CampusMate',
        title: 'Co-Founder',
        date: 'June \'17-August \'18',
        location: 'Riverside, CA',
        description: [
            'Compiled various valuable web views for facilitated access',
            'Implemented user interface scaling across multiple devices and screen sizes',
            'Utilized a Google Maps API to allow students to quickly view the school campus and find their destination',
            'Created records of key building hours including service buildings and dining in concise dropdown lists',
            'Generated an auto-dial campus police and campus escort services at the touch of a button ',
            'Simplified coordination between users by allowing users to send class schedules to each other',
            'Auto-populated and authenticated a user into his/her school portal to avoid repetitive manual authentications',
            ],
        website: 'https://play.google.com/store/apps/details?id=com.mycampusmate.rmate'
    },
    {
        company: 'REDSHIFT Digital',
        title: 'Front-End Engineer Intern',
        date: 'June \'16-August \'16',
        location: 'San Francisco, CA',
        description: [
            'Created and ran tests to check logic and functionality of code to ensure expected performance before branch merges',
            'Collaborated with other team members to create corresponding code in HTML, React, Javascript, etc. for website page mock-ups',
            'Connected API’s and mapped raw data into required data formats to create plot.ly maps for data representation',
            'Fixed code issues, such as adding gradients to specific data points on maps, jump-scrolling on a webpage, etc.'
            ],
        website: 'https://redshiftdigital.com/'
    },
    {
        company: 'Centric Digital',
        title: 'Product and Experience Intern',
        date: 'June \'15-August \'15',
        location: 'San Francisco, CA',
        description: [
            'Identified, compiled, and organized market data to identify leading candidates to improved existing products',
            'Defined target user personas',
            'Generated and refined research to improve product user experience',
            'Compiled, presented, and communicated relevant applicable information and distributed them to other related teams',
            'Created and analyzed conference meeting transcripts to manage product progress'
            ],
        website: 'https://centricdigital.com/'
    }
];

const languageList = [
    'C++',
    'JavaScript',
    'Python',
    'HTML',
    'CSS',
    'JQuery',
    'Swift',
    'Java',
    'XML',
    'MySQL',
    'Clojure',
    'Node.js',
    'React',
    'Jade',
    'MongoDB',
    'Express.js',
    'Jest'
];

const technologyList = [
    'IOS Mobile App Development',
    'Android Mobile App Development',
    'Word Document',
    'Excel Spreadsheet'
];

const resumeProjList = [
    {
        project: 'Garage Collage',
        languages: [ 'React.js | AWS | PWA | MongoDB | Stripe' ],
        github: 'https://github.com/jennifermulder/garage-endeavor',
        website: 'https://garage-collage-2468.herokuapp.com/ ',
        summary: 'A virtual garage sale e-commerce application, allowing users the capability to purchase and sell used goods.',
        desc: [
            'Implemented and managed data using Amazon Web Services S3 Bucket to optimize data storage',
            'Collaborated with other team members to facilitate webpage navigation ',
            'Led team members in technical development to ensure product quality and efficiency'
        ]        
    },
    {
        project: 'Wine Blogger',
        languages: [ 'Handlebars.js | AWS | mySQL | Sequelize | Express.js' ],
        github: 'https://github.com/anitapeppercorn/wine-blogger',
        website: 'https://secure-chamber-23014.herokuapp.com/',
        summary: 'A wine blog that allows users to track their inventory of collected wines, post about their wine, and interact with other wine lovers.',
        desc: [
            'Utilized various web services to create dynamic website features such as a pop-up modal that allows users to add wine information and preserve user experience across diverse platforms',
            'Designed and implemented website layout and schemes to improve user experience',
            'Coordinated with other team members to facilitate code optimization'
        ]
    },
    {
        project: 'Instagram Image Gallery',
        languages: [ 'React.js | API' ],
        github: 'https://github.com/shu012/ig-api-practice',
        // website: 'https://shu012.github.io/ig-api-practice/',
        summary: 'Facilitates viewing of an Instagram user’s media.',
        desc: [
            'Created  and designed an image gallery using Instagram’s open API to add additional user features to improve user experience',
            'Implemented a search, so that images may be searched by tag or tagged users ',
            'Generated a filter to allow users to view images based on a user’s uploaded media and liked media'
        ]
    }
];

const associationsList = [
    'Association for Computing Machinery (ACM)',
    'Cross Campus Entrepreneurs',
    'HKN (IEEE Honor Society)'
];

const awardsList = [
    'Dean’s Honors List', 
    'Highlander Excellence Scholarship', 
    'Middle Class Scholarship'
];

module.exports = { experienceList, languageList, technologyList, resumeProjList, associationsList, awardsList };