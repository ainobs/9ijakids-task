const Test = ({title, desc, img}) => {
    return ( 
        <div className="bg-light-green tc pa3 ma2 shawdow-5 dib br3 grow">
                <img src={img} alt='game' />
                <p>{title}</p>
                <p>{desc}</p>
        </div>
     );
}
 
export default Test;