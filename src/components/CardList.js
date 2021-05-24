import './Card.css';
import Card from './Card';

const CardList = ({ data }) => {

    return( 
        <div>
            {
                data.map((card, i) => {
                   return  <Card key={i} img={card.GameImage} title={ card.GameTitle } desc={ card.GameDescription } />
                })
            }
        </div>
    ) 
    
}
 
export default CardList;