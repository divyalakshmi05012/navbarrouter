import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo2 from '../assets/career2.webp';
import logo1 from '../assets/career1.webp';
import logo3 from '../assets/career3.webp';
import logo4 from '../assets/career4.jpg';
import logo5 from '../assets/career5.webp';
import logo6 from '../assets/career6.webp';
import logo7 from '../assets/career7.webp';
import logo8 from '../assets/career8.webp';
import logo9 from '../assets/career9.webp';


function Career() {
    let careerData=[
        {
            image:`${logo1}`,
            title:"Top 10 UI/UX Project Idea for Begineers ",
            name:"By Isha Sharma",
            date:"25 mar, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo2}`,
            title:"10 Skills Requied to Become a UI/UX Designer ",
            name:"By Isha Sharma",
            date:"26 mar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo3}`,
            title:"UI/UX Designer Jobs and Role and Responsblity",
            name:"By Tushar vinocha",
            date:"26 mar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo4}`,
            title:"UI/UX Syallbus|complete Curriculam 2024",
            name:"By Isha Sharma",
            date:"22 mar, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo5}`,
            title:"How to Figma on windows",
            name:"By Archana",
            date:"26 mar, 2024",
            time:"6 min Read"
        },
        {
            image:`${logo6}`,
            title:"How to Dowload Figma From Window ? A-5 step guide to Help ",
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
            title:"The Future and Scope Of UI/UX Design:A Comprhensive Overview",
            name:"By Tushar Vnocha",
            date:"22 mar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo9}`,
            title:"A Complete UI/UX Designer Roaadmap for Begineers",
            name:"By Archana",
            date:"25 mar, 2024",
            time:"7 min Read"
        }
    ]
    return (
        <div className="card-container">
            {careerData.map((e, i) => (
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

export default Career;