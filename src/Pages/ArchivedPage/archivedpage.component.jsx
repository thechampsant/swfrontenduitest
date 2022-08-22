import './archivedpage.scss'
import React, { useContext } from 'react';
import CardContainer from '../../Components/CardContainer/cardcontainer.component';
import { DataContext } from '../../Context/data.context';

const ArchivedPage = () => {
    const {data} = useContext(DataContext)
    return(
        <div className='archived'>
            {(data !== null) 
            ?
                <div className='heading'>
                    <h3 className='heading-title'>Favorite Teams</h3>
                    <p className="heading-itemInfo">Showing {data.teams.filter((item) => item.is_archived === true).length} out of {data.teams.length} teams</p>
                </div>
            
            :null
            }
            <div className='content'>
               {data && <CardContainer data={data.teams.filter((item) => item.is_archived === true)}/>}
            </div>
        </div>
       
    )
}

export default ArchivedPage;