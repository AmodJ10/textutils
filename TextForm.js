import React, {useState} from 'react';

const TextForm = (props) => {
    const [text, settext] = useState('');
    console.log(settext)
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        settext(newText);
    }
    const handleClear = () => {
        settext('');
    }
    const handleOnChange = (event) => {
        settext(event.target.value)
    }
    return (
<div className={`container text-${props.mode === 'dark'?'primary':'success'}`} >
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <h1>Write Text Here</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} style ={{backgroundColor:props.mode === 'dark'?'#2b3035':'white',borderColor: props.mode === 'dark'?'grey':'green',color : props.mode ==='dark'?'white':'black'}} value={text}></textarea>
</div>
        <button className={`btn btn-outline-${props.mode === 'dark'?'primary':'success'} mx-1`} onClick={handleUpClick}>UpperCase</button>
        <button className={`btn btn-outline-${props.mode === 'dark'?'primary':'success'} mx-1`} onClick={handleLowClick}>LowerCase</button>
        <button className={`btn btn-outline-${props.mode === 'dark'?'primary':'success'} mx-1`} onClick={handleClear}>Clear</button>
        < div className='my-3'>
        <h2>Stats</h2>
        <p>{text.length} {text.length <= 1?'letter':'letters'} {text.split('/\s + / ').filter((element) => {return element.length !== 0}).length} {text.split(' ').filter((element) => {return element.length !== 0}).length <= 1 ? 'word':'words'}</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </div>
    );
}

export default TextForm;

