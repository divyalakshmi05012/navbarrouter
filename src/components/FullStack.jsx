import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo2 from '../assets/fullstack2.webp';
import logo1 from '../assets/fullstack1.jpg';
import logo3 from '../assets/fullstack3.webp';
import logo4 from '../assets/fullstack4.webp';
import logo5 from '../assets/fullstack5.webp';
import logo6 from '../assets/fullstack6.jpg';
import logo7 from '../assets/fullstack7.jpg';
import logo8 from '../assets/fullstack8.jpg';
import logo9 from '../assets/fullstack9.webp';


function FullStack() {
    let fullData=[
        {
            image:`${logo1}`,
            title:"Best Full-Stack Development Project Idea in 2024",
            name:"By Isha Sharma",
            date:"25 mar, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo2}`,
            title:"How Long Would It Take to Be a Full Stack Developer",
            name:"By Meghana D",
            date:"26 mar, 2024",
            time:"3 min Read"
        },
        {
            image:`${logo3}`,
            title:"How Does Apace work? A detailed introduction to Apace",
            name:"By Tushar vinocha",
            date:"26 mar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo4}`,
            title:"10 Best Database Management Sysytems For Software Developers",
            name:"By Isha Sharma",
            date:"22 mar, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo5}`,
            title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus| 2024",
            name:"By Archana",
            date:"26 mar, 2024",
            time:"6 min Read"
        },
        {
            image:`${logo6}`,
            title:"6 Essential prerequisites for Learning ReactJS",
            name:"By Ramkumar",
            date:"25 mar, 2024",
            time:"3 min Read"
        },
        {
            image:`${logo7}`,
            title:"30 Best JavaScript Project Idea For You [3 Bonus portfolio Projects]",
            name:"By Sakshi Priyadarshini",
            date:"25 mar, 2024",
            time:"8 min Read"
        },
        {
            image:`${logo8}`,
            title:"40nJava Interviews Questions For Freshers with Clear & Concise Answer",
            name:"By Tushar Vnocha",
            date:"22 mar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo9}`,
            title:"Top 9 TCS Xplore Python Coding Questions [Decode with GUVI]",
            name:"By Archana",
            date:"25 mar, 2024",
            time:"7 min Read"
        }
    ]
    return (
        <div className="card-container">
            {fullData.map((e, i) => (
                <Card className='card-wrapper' key={i}>
                    <Card.Img variant="top" className='card-image' src={e.image} />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <span>{e.name}</span>
                        <div className='span'>
                            <span>{e.date}</span>
                            <span>{e.time}</span>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default FullStack;