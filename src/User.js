import React from 'react'

const user = () => {
    // const [empdata, empdatachange] = useState(null);
    const data = [
        {
            id: 1, name: "Ashok"
        },
        {
            id: 2, name: "Kumar"
        },
        {
            id: 3, name: "Gaurav"
        }
    ]
    return (
        <div>
            {
                data.map((user) => (
                    <div> {user.name}</div>
                ))
            }
        </div>
    )
}

export default user











{/* {
                empdata && empdata.map((item, index) => ())

            } */}

