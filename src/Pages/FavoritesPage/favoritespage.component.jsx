import './favoritespage.scss'
import React, { useContext} from 'react';
import CardContainer from '../../Components/CardContainer/cardcontainer.component';
import { DataContext } from '../../Context/data.context';

const FavoritePage = () => {
    const {data} = useContext(DataContext)
    return(
        <div className='favorite'>
            {(data !== null) 
            ?
                <div className='heading'>
                    <h3 className='heading-title'>Favorite Teams</h3>
                    <p className="heading-itemInfo">Showing {data.teams.filter((item) => item.is_favorited === true).length} out of {data.teams.length} teams</p>
                </div>
            
            :null
            }
            <div className='content'>
               {data && <CardContainer data={data.teams.filter((item) => item.is_favorited === true)}/>}
            </div>
        </div>
       
    )
}

export default FavoritePage;