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
        description: <>I am Muhammad Zafran Al Majid, a passionate Game Developer and Programmer with expertise in Unity, C#, and Unreal Engine, and a growing interest in visual effects. With experience across projects. I have honed my skills in managing game mechanics, AI, and animation while taking on roles such as Game Manager, and Story Writer. Currently, I am expanding my knowledge in visual effects to enhance gameplay immersion, aiming to develop skills as a Visual Effect Artist. I am driven to push creative boundaries in both game development and visual effects, creating engaging and impactful experiences for players.</>
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
                    <>Guess Strange Animal is an interactive guessing game where players are invited to answer several questions to guess which animal is displayed at each level.</>,
                    <>In this project, I served as the Game Programmer, responsible for managing and developing core game mechanics to ensure smooth and engaging gameplay. My role included designing and implementing game logic, refining user interactions, and optimizing the game's performance. I focused on creating intuitive mechanics that enhance the player experience, making each level enjoyable and rewarding as players progress.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
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
                    <>Garuda Race is an innovative racing game that delivers an exhilarating and visually captivating experience, blending fast-paced gameplay with high-quality design elements. In this project, I held dual responsibilities as the Front-End Programmer and Project Leader.</>,
                    <>As the Front-End Programmer, I was tasked with importing assets from Figma, organizing and structuring the game's user interface, and managing the in-game shop system. This role required attention to detail and proficiency in implementing responsive and dynamic UI/UX elements to enhance player interaction and engagement.</>,
                    <>As the Project Leader, I led a team of developers through all stages of the project lifecycle—from initial conceptualization and planning to development, quality assurance, and deployment. My leadership approach emphasized effective communication, strict adherence to project timelines, and a commitment to achieving high standards of quality.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/cover-02.jpg',
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
                    <>Bounce Ball is an engaging game that combines the mechanics of ortographic maze with the strategic element of pathfinding. Featuring an orthographic camera perspective, the game challenges players to navigate a bouncing ball through intricate levels using carefully calculated paths.</>,
                    <>In this project, I served as the Game Programmer, responsible for managing the game mechanics and implementing AI elements to enhance the gameplay experience. My role included designing and refining the pathfinding algorithms, programming responsive ball physics, and integrating AI-driven behaviors to create dynamic and challenging obstacles. This involved balancing gameplay difficulty to maintain an engaging experience for players as they progress through increasingly intricate levels.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/cover-03.jpg',
                    alt: 'Bouncy Ball',
                    width: 9,
                    height: 20
                    }
                ]
            },
            {
                company: 'Chess Empire',
                timeframe: 'September 2024 - October 2024',
                role: 'Game Programmer',
                achievements: [
                    <>Chess Empire is an innovative game that combines classic chess mechanics with an exciting shooting mechanism. In this game, players are challenged to navigate the king piece strategically while shooting at opponents, blending tactical thinking with fast-paced action.</>,
                    <>In this project, I served as the Game Programmer responsible for managing and implementing the animations within the gameplay. My role focused on creating smooth and engaging animations that bring the chess pieces to life, enhancing the overall experience and ensuring that movements and shooting actions feel dynamic and responsive. This involved developing and optimizing animations that maintain both the aesthetic appeal and performance quality of the game.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/cover-04.jpg',
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
                    <>Lost Case is an atmospheric horror game that follows a seasoned detective who takes on an unsolved case buried for years. The detective uncovers a series of mysterious disappearances linked to secret experiments that unleashed feral creatures lurking within the forest. Players embark on an investigative journey, piecing together clues from remains, journals, and abandoned belongings to solve the mystery and survive encounters with these unnatural beings.</>,
                    <>In this projek I served as the Project leader, I coordinated project development, ensuring each phase aligned with the game’s vision and guiding our team toward a cohesive final product. In Story Writing, I crafted a compelling narrative, including immersive monologues, dialogue, and backstory, to deepen the player's connection to the horror and mystery surrounding the case. As the Game Designer, I designed levels, gameplay flow, and strategically placed horror elements to build tension and enrich the player experience.</>
                ],
                images: [ 
                    {
                    src: '/images/projects/project-01/cover-05.jpg',
                    alt: 'Lost Case',
                    width: 11,
                    height: 20
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
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
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