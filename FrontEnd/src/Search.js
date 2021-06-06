import { useState } from "react";



const Search = () => {
  const [rolls, setrollno] = useState('');
  let roll;

  const handleSubmit = (e) => {
    e.preventDefault();
    roll = rolls.split(',');
    console.log(roll);
  }
    return ( 
      <div className="front">
      <form onSubmit={handleSubmit}>
            <h1>Result</h1>
            <label>Enter Roll Numbers To Check</label>
            <input type="text"
            required 
            value={rolls}
            onChange={(e) => setrollno(e.target.value)}
            ></input>
            <button>PASS/FAIL</button>
            </form>
        </div>
     );
}
 
export default Search;