import { IconLeadSmall, MessageIconSmall, StarActive, StarDefault } from '../SVG/SVG.component';
import './card.scss';

const Card = (props) =>{
    return(
        <div className={(props.isArchived ===  true) ? 'card card-archive': 'card card-active'}>
            <div className='card__header'>
                <div className="card__header--box">
                    <div className="card__header--box-heading">
                        {(props.value !== null)
                            ? <img src={props.value.image} alt="" />
                            :null
                        }
                        <div className="card__header--box-heading_title">
                            {
                                (props.value !== null)
                                ?<div className='card__header--box-heading_title--info'>
                                    <p className='box-title'>{props.value.name}</p>
                                    {
                                        (props.value.hasOwnProperty('created_at'))
                                            ? <p className='box-created'>Created on {props.value.created_at}</p>
                                            : (props.value.is_archived ===  true)
                                                ? <p className='box-created'>Archieved</p>
                                                :null
                                    }
                                </div>
                                :null
                            }
                            <div className='card__header--box-heading_title--star'>
                                {
                                    (props.value.is_archived ===  false)
                                    ? (props.value.is_favorited === true)
                                      ? <StarActive/>
                                      : <StarDefault/>
                                    :null
                                }
                
                            </div>
                        </div>
                    </div>
                    <div className="card__header--box-content">
                        {
                            (props.value !== null)
                            ?<p className='card__header--box-content_description'>{props.value.description}</p>
                            :null
                        }
                    </div>
                </div>
            </div>
            <div className='card__footer'>
                <div className="card__footer--box">
                        <MessageIconSmall/>
                        {props.value && <p className='count'>{props.value.campaigns_count} Campaigns</p>}
                        <IconLeadSmall/>
                        {props.value && <p className='count'>{props.value.leads_count} Leads</p>}
                </div>
            </div>
        </div>
        
    )
}

export default Card;