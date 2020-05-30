
import React, { useState } from 'react';

export default function NewPost (props) {
 
  const [postState, setPostState] = useState({
    name: '',
  });

  function handleInputChange (e) {
    setPostState({
      ...postState,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit (e) {
    e.preventDefault();
    if (postState.name.trim()) {
      props.searchHeroes(postState)
      handleReset();
    }
  };

  function handleReset () {
    setPostState({
      name: '',
    });
  };

  
  return (
    <div>
        <form onSubmit={ handleSubmit }>
        <div className="form-group">
            <input
            type="text"
            placeholder="Exemplo: Flash"
            className="form-control"
            name="name"
            onChange={ handleInputChange }
            value={ postState.name }
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Pesquisar</button>
        </div>
      </form>
    </div>
  );
  
}