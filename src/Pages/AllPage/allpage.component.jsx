import React, { useContext } from 'react';
import CardContainer from '../../Components/CardContainer/cardcontainer.component';
import { DataContext } from '../../Context/data.context';
import './allpage.scss';

const AllPage = () => {
    const {data} = useContext(DataContext)
    return(
        <div className='allpage'>
            {(data !== null) 
            ?
                <div className='heading'>
                    <h3 className='heading-title'>All Teams</h3>
                    <p className="heading-itemInfo">Showing {data.teams.length} out of {data.teams.length} teams</p>
                </div>
            
            :null
            }
            <div className='content'>
               {data && <CardContainer data={data.teams}/>}
            </div>
        </div>
       
    )
}

export default AllPage