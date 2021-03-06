import './Card.css'

const Card = ({title, desc, img}) => {
    return ( 
        <div className="bg-light-green tc pa3 ma2 shawdow-5 dib br3 grow tt">
                <img src={img} alt='game' />
                <h2>{title}</h2>
                <h3>{desc}</h3>
        </div>
     );
}
 
export default Card;