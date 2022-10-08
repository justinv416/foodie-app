
import React from 'react';

const Form = (props) => {
  return (
    <div>
        <form action="" onSubmit={props.handleSubmit}>
            <input type="text" value={props.searchValue} onChange={props.handleInput}/>
            <button type='submit'>Sumbit</button>
        </form>
    </div>
  )
}

export default Form