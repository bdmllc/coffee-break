import React, { useState } from "react"

const counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter text-center pb-5">
      <h4>Click the button if you like this post</h4>
      <button className="my-4" onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
      <h4>Likes: {count} </h4>
    </div>
  )
}

export default counter
