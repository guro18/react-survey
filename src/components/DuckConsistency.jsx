function DuckConsistency ({formData, HandleChange}) {
    
    return (
        <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="consistency-one" 
                        type="radio" 
                        name="consistency" 
                        value="1"
                        checked = {formData.consistency === "1"} 
                    />
                    <label htmlFor="consistency-one">1</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="consistency-two" 
                        type="radio" 
                        name="consistency" 
                        value="2" 
                        checked = {formData.consistency === "2"}
                    />
                    <label htmlFor="consistency-two">2</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="consistency-three" 
                        type="radio" 
                        name="consistency" 
                        value="3" 
                        checked = {formData.consistency === "3"}
                    />
                    <label htmlFor="consistency-three">3</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="consistency-four" 
                        type="radio" 
                        name="consistency" 
                        value="4" 
                        checked = {formData.consistency === "4"}
                    />
                    <label htmlFor="consistency-four">4</label>
                </li>
            </ul>
        </div>
    );
}

export default DuckConsistency