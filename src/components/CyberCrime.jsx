import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo2 from '../assets/cybercrime2.webp';
import logo1 from '../assets/cybercrime1.webp';
import logo4 from '../assets/cybercrime4.webp';
import logo5 from '../assets/cybercrime5.gif';
import logo6 from '../assets/cybercrime6.webp';
import logo7 from '../assets/cybercrime7.webp';
import logo8 from '../assets/cybercrime8.webp';
import logo9 from '../assets/cybercrime9.webp';


function CyberCrime() {
    let cyberData=[
        {
            image:`${logo1}`,
            title:"Cyber Security Vs Ethical Hacking :Top 10 Different",
            name:"By Tushar Vinocha",
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
            image: null,
            content: (
                <div>
                    <h5>CyberSecurity Vs Aritifical Intelligence|Better Carrer</h5>
                    <span>By Admin</span>
                    <div className='span'>
                            <span>16 april 2024</span>6
                            <span>2 min Read</span>
                        </div>
                </div>
            )
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
            {cyberData.map((e, i) => (
                <Card className='card-wrapper' key={i}>
                     {e.image ? (
                        <Card.Img variant="top" className='card-image' src={e.image} />
                    ) : (
                        <div className="card-content">{e.content}</div>
                    )}
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

export default CyberCrime;