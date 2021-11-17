import React, { useState } from 'react'

import {IState as Props} from  "../App"

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
     people: Props["people"]
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        bio:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input, [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () => {
        if (!input.name || !input.age) alert("Fill the required fields")
        
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                bio: input.bio
            }
        ])

        setInput({
            name: "",
            age: "",
            img: "",
            bio:""
        })
    }

    return (
        <div className="list-form">
            <h3> Fill the details </h3>

            <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" value={input.name} className="list-form-input" />
            
           <input type="number" name="age" onChange={handleChange} placeholder="Enter your age" className="list-form-input" value={input.age} />
           <input 
                type="text"
onChange={handleChange}
                className="list-form-input"
                name="img"
                value={input.img}
                placeholder="Enter image URL"
            />
            <textarea onChange={handleChange} name="bio" placeholder="Enter your bio" className="list-form-input" value={input.bio} />
              <button
                onClick={handleSubmit}
                className="form-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
