import portofolio1 from './res/portofolio-1.png';
import portofolio2 from './res/portofolio-2.png';
import portofolio3 from './res/portofolio-3.png';
import portofolio4 from './res/portofolio-4.png';
import portofolio5 from './res/portofolio-5.png';
import github from './res/github.png';
import linkedin from './res/linkedin.png';
import instagram from './res/instagram.png';

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'renjiroazhar',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 Here you are!',
                        //Line 2 For Header
                        "I'm Renji. A college student",
                        //Line 3 For Header
                        'from Indonesia'
    ],
       //Contact Email
       contactEmail:'renjiroazhar@gmail.com',
       // Add Your About Text Here
       abouttext: "I'm Renji, a college student at Dian Nuswantoro University. Majoring Bachelor of Informatics Engineering. I have passion on programming since High School. Mainly i learn about frontend web development. I also have experience as an intern in a software company for about 6 months.",
       aboutImage: portofolio1,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
                id: 1,//DO NOT CHANGE THIS (Please)😅
                title:'Gading Trans', //Project Title - Add Your Project Title Here
                service:'| Website Development', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc: portofolio2,
                //Project URL - Add Your Project Url Here
                url:'https://www.gadingtrans.id/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'e-Guest',
                service: '| UI/UX & Website Development',
                imageSrc: portofolio3,
                url: ''
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Naget ID',
                service: '| UI/UX & Web App Development',
                imageSrc: portofolio4,
                url: 'https://naget.netlify.app/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Duta Engineering Perkasa',
                service: '| Website Development',
                imageSrc: portofolio5,
                url: ''
           }

            /*

            If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively),
            {
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
            */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   
                name: 'Github',
                image: github,
                url: 'https://github.com/renjiroazhar'
            },
            {
                name: 'LinkedIn',
                image: linkedin,
                url: 'https://www.linkedin.com/in/renjiroazhar'
            },
            {
                name: 'Instagram',
                image: instagram,
                url: 'https://www.instagram.com/renjiroazhar'
            }
        ]
    }
