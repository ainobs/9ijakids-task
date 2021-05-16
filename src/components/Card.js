import './Card.css'
// import Test from './Test'

const Card = ({card}) => {

    return( 
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            {
                card.map((card, i) => (
                    <div key={i}>
                        <img src={card[i].GameImage} alt='game' />
                        <h3> { card[i].GameTitle } </h3>
                        <h3> { card[i].GameDescription } </h3>
                    </div>
                ))
            }
        </div>
    ) 
    
}
 
export default Card;