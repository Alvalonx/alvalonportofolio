import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad ',
    lastName:  'Zafran Al Majid',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'game Programmer | Visual Effect Artist',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Bahasa Indonesia', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Alvalonx',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/muhammadzafranalmajid/',
    },

    {
        name: 'Email',
        icon: 'email',
        link: 'alvalon188@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>I'm Muhammad Zafran Al Majid</>,
    subline: <>I am Muhammad Zafran Al Majid, a passionate Game Developer and Programmer with expertise in Unity, C#, and Unreal Engine, and a growing interest in visual effects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am Muhammad Zafran Al Majid, a Game Developer and Programmer skilled in Unity, C#, and Unreal Engine. I have a solid foundation in game development, across projects. Currently, while my primary focus remains on game development and programming, I am also expanding my expertise in visual effects.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Guess Strange Animal',
                timeframe: 'January 2024 - January 2024',
                role: 'Game Programmer',
                achievements: [
                    <>Guess Strange Animal is an interactive guessing game where players are invited to answer several questions to guess which animal is displayed at each level.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/guess-strange-animal.jpg',
                        alt: 'Guess Strange Animal',
                        width: 9,
                        height: 20
                    }
                ]
            },
            {
                company: 'Garuda Race',
                timeframe: 'March 2024 - May 2024',
                role: 'Front-End Programmer, Project Leader',
                achievements: [
                    <>Garuda Race is an innovative racing game that delivers an exhilarating and visually captivating experience, blending fast-paced gameplay with high-quality design elements. In this project, I held dual responsibilities as the Front-End Programmer and Project Leader.</>    
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/garuda-race.jpg',
                    alt: 'Garuda Race',
                    width: 16,
                    height: 9
                    }
                ]
            },
            {
                company: 'Bouncy Ball',
                timeframe: 'June 2024 - August 2024',
                role: 'Game Programmer',
                achievements: [
                    <>Bounce Ball is an engaging game that combines the mechanics of ortographic maze with the strategic element of pathfinding. Featuring an orthographic camera perspective, the game challenges players to navigate a bouncing ball through intricate levels using carefully calculated paths.</>
                    
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/Movie_03.gif',
                    alt: 'Bouncy Ball',
                    width: 11,
                    height: 20
                    },
                    {
                    src: '/images/projects/project-01/bouncy-ball.jpg',
                    alt: 'Bouncy Ball',
                    width: 11,
                    height: 20
                    }
                ]
            },
            {
                company: 'Chess Empire',
                timeframe: 'September 2024 - October 2024',
                role: 'Game Programmer',
                achievements: [
                    <>Chess Empire is an innovative game that combines classic chess mechanics with an exciting shooting mechanism. In this game, players are challenged to navigate the king piece strategically while shooting at opponents, blending tactical thinking with fast-paced action.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/Movie_04.gif',
                    alt: 'Chess Empire',
                    width: 11,
                    height: 20
                    },
                    {
                        src: '/images/projects/project-01/chess-empire.jpg',
                        alt: 'Chess Empire',
                        width: 11,
                        height: 20
                    }
                ]
            },
            {
                company: 'Lost Case',
                timeframe: 'October 2024 - Present',
                role: 'Project Le, Story Writing, Game Design',
                achievements: [
                    <>Lost Case is an atmospheric horror game that follows a seasoned detective who takes on an unsolved case buried for years. The detective uncovers a series of mysterious disappearances linked to secret experiments that unleashed feral creatures lurking within the forest. Players embark on an investigative journey, piecing together clues from remains, journals, and abandoned belongings to solve the mystery and survive encounters with these unnatural beings.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/lost-case.gif',
                    alt: 'Lost Case',
                    width: 16,
                    height: 9
                    },              
                
                    {
                    src: '/images/projects/project-01/lost-case.jpg',
                    alt: 'Lost Case',
                    width: 16,
                    height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Unity',
                description: <>Proficient in using Unity for developing interactive and responsive game environments. Experienced in building and optimizing game mechanics and UI.</>,
                images: [
                    {
                        src: '/images/projects/project-01/unity.jpg',
                        alt: 'unity',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'C#',
                description: <>Knowledgeable in C# for implementing game logic and features.</>,
                images: [
                    {
                        src: '/images/projects/project-01/c-sharp.png',
                        alt: 'C#',
                        width: 9,
                        height: 9
                    },
                ]
            },
            {
                title: 'Unreal Engine',
                description: <>Skilled in Unreal Engine for creating high-quality visuals and implementing gameplay features, with experience in Blueprint scripting.</>,
                images: [
                    {
                        src: '/images/projects/project-01/unreal.jpg',
                        alt: 'Unreal Engine',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };