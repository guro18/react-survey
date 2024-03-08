function DuckLogo ({formData, HandleChange}) {
    
    return (
        <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
            <ul>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="logo-one" 
                        type="radio" 
                        name="logo" 
                        value="1"
                        checked = {formData.logo === "1"} 
                    />
                    <label htmlFor="logo-one">1</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="logo-two" 
                        type="radio" 
                        name="logo" 
                        value="2" 
                        checked = {formData.logo === "2"}
                    />
                    <label htmlFor="logo-two">2</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="logo-three" 
                        type="radio" 
                        name="logo" 
                        value="3" 
                        checked = {formData.logo === "3"}
                    />
                    <label htmlFor="logo-three">3</label>
                </li>
                <li>
                    <input 
                        onChange={HandleChange}
                        id="logo-four" 
                        type="radio" 
                        name="logo" 
                        value="4" 
                        checked = {formData.logo === "4"}
                    />
                    <label htmlFor="logo-four">4</label>
                </li>
            </ul>
        </div>
    );
}

export default DuckLogo