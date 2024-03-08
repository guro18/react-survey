function WorstBits ({formData, HandleChange}) {
    
    return (
    <div className="form__group">
        <h3>What would you say are the worst bits of your rubber duck?</h3>
            <ul>
                <li>
                    <label>
                    <input
                        onChange={HandleChange}
                        name="worstBits"
                        type="checkbox"
                        value="yellow"
                        checked = {formData.worstBits.includes("yellow")}
                    />Its yellow
                    </label>
                </li>
                <li>
                    <label>
                    <input 
                        onChange={HandleChange}
                        name="worstBits"
                        type="checkbox" 
                        value="speaks" 
                        checked = {formData.worstBits.includes("speaks")}
                    />It speaks
                    </label>
                </li>
                <li>
                    <label>
                    <input
                        onChange={HandleChange}
                        name="worstBits"
                        type="checkbox"
                        value="logo"
                        checked = {formData.worstBits.includes("logo")}
                    />It has a logo
                    </label>
                </li>
                <li>
                    <label>
                    <input 
                        onChange={HandleChange}
                        name="worstBits"
                        type="checkbox" 
                        value="big" 
                        checked = {formData.worstBits.includes("big")}
                    />Its big
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default WorstBits