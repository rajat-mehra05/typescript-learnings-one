import React from 'react'
import {IState as Props} from  "../App"

interface IProps {
     people: Props["people"]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = ():JSX.Element[] => {
        return people.map((person) => (
            <li className="list">
                <div className="list-header">
                    <img src={person.img} alt="pic-of-person" height="80px" width="80px" />
                    <h3> {person.name} </h3>
                </div>
                <div className="list-bio">
                    <p>  {person.age} y/o </p>
                    <p>  {person.bio} </p>
                </div>
            </li>
        ))
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
