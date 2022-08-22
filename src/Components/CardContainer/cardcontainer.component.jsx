import Card from '../Card/card.component'
import './cardcontainer.scss'

const CardContainer = (props) =>{
    const {data} = props
    return(
        <div className="cardcontainer">
            {   (data !== null)
                ?
                data.map((value, key)=>{
                    return  <Card value={value} isArchived = {value.is_archived} key={key}/> 
                })
                :null
            }
        </div>
    )
}
export default CardContainer