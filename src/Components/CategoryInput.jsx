import { useState } from 'react'

export const CategoryInput = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target})=>{
    setInputValue(target.value);
  }

  const onSubmmit = (event) => {
    event.preventDefault();
    const cleanValue = inputValue.trim();
    if(cleanValue.length<=1) return 
    onAddCategory(cleanValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmmit}>
      <input 
      type="text"
      placeholder="Search Gifs"
      value ={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
}
