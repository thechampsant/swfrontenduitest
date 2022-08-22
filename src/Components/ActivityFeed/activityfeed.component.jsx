import { useContext } from 'react'
import { DataContext } from '../../Context/data.context'
import './activityfeed.scss'

const ActivityFeed = () =>{
    const {data} = useContext(DataContext)

    return(
        <div className='activityfeed'>
            <div className='heading'>
                <h3 className='heading-title'>Activity</h3>
            </div>
            <div className="activityfeed__list">
                {   
                    (data !== null)
                    ?
                    data.activities.map((value, key) =>(
                        <div className="activityfeed__list-item" key={key}>
                            <div className="activityfeed__list-item--image">
                                <img src={value.person.avatar} alt="profile" />
                            </div>
                            <div className='activityfeed__list-item--content'>
                                {
                                    (   
                                        (value.action === 'increased_quota') 
                                        ? <p className='activityfeed__list-item--content---action'><span>{value.person.name}</span> increased <span>{value.target}</span>'s quota.</p>
                                        : (value.action === 'added_leads')
                                        ? <p className='activityfeed__list-item--content---action'><span>{value.person.name}</span> added new leads to <span>{value.target}</span>.</p>
                                        : (value.action === 'archived_team'  && value.id === 4)
                                        ? <p className='activityfeed__list-item--content---action short'><span>{value.person.name}</span> archived the team <span>{value.target}</span>.</p>
                                        : (value.action === 'archived_team')
                                        ? <p className='activityfeed__list-item--content---action'><span>{value.person.name}</span> archived the team <span>{value.target}</span>.</p>
                                        : null
                                    )
                                }
                                <p className='activityfeed__list-item--content---timeStamp'>
                                    {(value.hasOwnProperty('created_at')) ? value.created_at :'6 Hours Ago'}
                                </p>
                            </div>
                        </div>
                    ))
                    : null
                }
            </div>
        </div>
            
    )
}

export default ActivityFeed