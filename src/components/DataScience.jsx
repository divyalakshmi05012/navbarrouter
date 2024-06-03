import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo2 from '../assets/datascience2.webp';
import logo1 from '../assets/datascience1.webp';
import logo3 from '../assets/datascience3.webp';
import logo4 from '../assets/datascience4.webp';
import logo5 from '../assets/datascience5.webp';
import logo6 from '../assets/datascience6.webp';
import logo7 from '../assets/datascience7.webp';
import logo8 from '../assets/datascience8.webp';
import logo9 from '../assets/datascience9.jpg';


function DataScience() {
    let scienceData=[
        {
            image:`${logo1}`,
            title:"Top 10 High paying Non-coding Jobs in DataScience in 2024",
            name:"By Isha Sharma",
            date:"16 april, 2024",
            time:"6 min Read"
        },
        {
            image:`${logo2}`,
            title:"12 Real-World Data Science Example:Power Of Data Science",
            name:"By lukesh S",
            date:"25 mar, 2024",
            time:"7 min Read"
        },
        {
            image:`${logo3}`,
            title:"Can A Commerence Student Do Data Science",
            name:"By Saakshi Priyadharshini",
            date:"16 april, 2024",
            time:"3 min Read"
        },
        {
            image:`${logo4}`,
            title:"Top P roduct-Basesd Companices For Data Scientists in 2024",
            name:"By Jaishree Tomar",
            date:"26 mar, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo5}`,
            title:"Roles And Responsiblity of the Data Science",
            name:"By Jaishree Tomar",
            date:"16 april, 2024",
            time:"6 min Read"
        },
        {
            image:`${logo6}`,
            title:"<Strong> How Long Would It Take to Learn Data Science? </Storng>",
            name:"By Meghana D",
            date:"16 april, 2024",
            time:"4 min Read"
        },
        {
            image:`${logo7}`,
            title:"Every Thing About Data Scientist Salary IN India|2024",
            name:"By Srinithi Sankar",
            date:"02aprilmar, 2024",
            time:"5 min Read"
        },
        {
            image:`${logo8}`,
            title:"10 Best Data Science Online Courses For Begineners|2024",
            name:"By Srinithi Sankar",
            date:"02 april, 2024",
            time:"7 min Read"
        },
        {
            image:`${logo9}`,
            title:"How to Become Data Scinetist After Mechinical Enigineering?",
            name:"By Lahari Chandana",
            date:"10 april, 2024",
            time:"3 min Read"
        }
    ]
    return (
        <div className="card-container">
            {scienceData.map((e, i) => (
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

export default DataScience;