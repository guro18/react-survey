function SpendTime ({formData, HandleChange}) {
    
    return (
        <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
                <li>
                    <label>
                    <input
                        onChange={HandleChange}
                        name="timeSpent"
                        type="checkbox"
                        value="swimming"
                        checked = {formData.timeSpent.includes("swimming")}
                    />Swimming
                    </label>
                </li>
                <li>
                    <label>
                    <input 
                        onChange={HandleChange}
                        name="timeSpent" 
                        type="checkbox" 
                        value="bathing" 
                        checked = {formData.timeSpent.includes("bathing")}
                    />Bathing
                    </label>
                </li>
                <li>
                    <label>
                    <input
                        onChange={HandleChange}
                        name="timeSpent"
                        type="checkbox"
                        value="chatting"
                        checked = {formData.timeSpent.includes("chatting")}
                    />Chatting
                    </label>
                </li>
                <li>
                    <label>
                    <input 
                        onChange={HandleChange}
                        name="timeSpent" 
                        type="checkbox" 
                        value="noTime" 
                        checked = {formData.timeSpent.includes("noTime")}
                    />I dont like to spend time with it
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default SpendTime