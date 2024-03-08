function DuckColour ({formData, HandleChange}) {
    
    return (
        <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
            <ul>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="color-one" 
                        type="radio" 
                        name="color" 
                        value="1"
                        checked = {formData.color === "1"} 
                    />
                    <label htmlFor="color-one">1</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="color-two" 
                        type="radio" 
                        name="color" 
                        value="2" 
                        checked = {formData.color === "2"}
                    />
                    <label htmlFor="color-two">2</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="color-three" 
                        type="radio" 
                        name="color" 
                        value="3" 
                        checked = {formData.color === "3"}
                    />
                    <label htmlFor="color-three">3</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="color-four" 
                        type="radio" 
                        name="color" 
                        value="4" 
                        checked = {formData.color === "4"}
                    />
                    <label htmlFor="color-four">4</label>
                </li>
            </ul>
        </div>
    );
}

export default DuckColour