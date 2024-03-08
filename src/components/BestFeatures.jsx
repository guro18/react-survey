function BestFeatures ({formData, HandleChange}) {
    
    return (
    <div className="form__group">
      <h3>What would you say are the best features of your rubber duck?</h3>
        <ul>
          <li>
            <label>   
            <input
                onChange={HandleChange}
                name="features"
                type="checkbox"
                value="yellow"
                checked = {formData.features.includes("yellow")}
            />Its yellow
            </label>
          </li>
          <li>
            <label>
            <input 
                onChange={HandleChange}
                name="features" 
                type="checkbox" 
                value="speaks" 
                checked = {formData.features.includes("speaks")}
            />It speaks
            </label>
          </li>
          <li>
            <label>
            <input
                onChange={HandleChange}
                name="features"
                type="checkbox"
                value="logo"
                checked = {formData.features.includes("logo")}
            />It has a logo
            </label>
          </li>
          <li>
            <label>
            <input 
                onChange={HandleChange}
                name="features" 
                type="checkbox" 
                value="big" 
                checked = {formData.features.includes("big")}
            />Its big
            </label>
          </li>
        </ul>
    </div>
    );
}

export default BestFeatures