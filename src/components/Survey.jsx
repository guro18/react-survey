import { useState, useEffect } from "react";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const INITIAL_FORM_DATA = {
    username: "",
    consistency: "other",
    color: "other",
    logo: "other",
    timeSpent: [],
    features: [],
    worstBits: [],
    review: "",
    email: "",
  };

  const FORM_DATA_MODIFIED = {
    username: false,
  }

  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const[formData, setFormData] = useState({...INITIAL_FORM_DATA});
  const[formDataChanged, setFormDataChanged] = useState({...FORM_DATA_MODIFIED});

  const HandleChange = (event) => {
    const {name, type, value, checked} = event.target;

    if (name !== undefined) {
      if (type === "checkbox"){
        if (name === "spend-time"){
        if (checked) {
        setFormData({...formData, timeSpent: [...formData.timeSpent, value] });
      } else {
        setFormData({ ...formData, timeSpent: formData.timeSpent.filter(item => item !== value) });
      } 
      } 
      
      else if (name === "features"){
        if (checked) {
          setFormData({...formData, features: [...formData.features, value] });
        } else {
          setFormData({ ...formData, features: formData.features.filter(item => item !== value) });
        } 
      } 
      
      else if (name === "worstBits"){
        if (checked) {
          setFormData({...formData, worstBits: [...formData.worstBits, value] });
        } else {
          setFormData({ ...formData, worstBits: formData.worstBits.filter(item => item !== value) });
        } 
      } } 
      
      else {
        setFormData({...formData, [name]: value});
        setFormDataChanged({...formDataChanged, [name]: true})
      }
    }
  };

  const handleSubmit = () => {
    const newAnswerItem = { ...formData };
    setSubmittedAnswers([...submittedAnswers, newAnswerItem]);
    setFormData(INITIAL_FORM_DATA); // Reset form data
  };

  //log formdata in the console
  useEffect(() => {
    console.log("Current Form Data:", formData);
  }, [formData]);

  return (
    <main className="survey">

      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {submittedAnswers.map((answer, index) => (
          <AnswersItem key={index} answerItem={answer} />
        ))}
      </section>

      <section className="survey__form">
      <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>

      <div className="form__group">
      <h3>What would you say are the best features of your rubber duck?</h3>
        <ul>

          <li>
            <label
            ><input
                onChange={HandleChange}
                name="features"
                type="checkbox"
                value="yellow"
                checked = {formData.features.includes("yellow")}
            />Its yellow</label>
          </li>

          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="features" 
            type="checkbox" 
            value="speaks" 
            checked = {formData.features.includes("speaks")}
            />It speaks</label>
          </li>

          <li>
            <label
            ><input
            onChange={HandleChange}
                name="features"
                type="checkbox"
                value="logo"
                checked = {formData.features.includes("logo")}
            />It has a logo</label>
          </li>

          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="features" 
            type="checkbox" 
            value="big" 
            checked = {formData.features.includes("big")}
            />Its big</label>
          </li>
        </ul>
        </div>

        <div className="form__group">
          <h3>What would you say are the worst bits of your rubber duck?</h3>
        <ul>
          <li>

            <label
            ><input
                onChange={HandleChange}
                name="worstBits"
                type="checkbox"
                value="yellow"
                checked = {formData.worstBits.includes("yellow")}
            />Its yellow</label>
          </li>

          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="worstBits"
            type="checkbox" 
            value="speaks" 
            checked = {formData.worstBits.includes("speaks")}
            />It speaks</label>
          </li>

          <li>
            <label
            ><input
            onChange={HandleChange}
                name="worstBits"
                type="checkbox"
                value="logo"
                checked = {formData.worstBits.includes("logo")}
            />It has a logo</label>
          </li>

          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="worstBits"
            type="checkbox" 
            value="big" 
            checked = {formData.worstBits.includes("big")}
            />Its big</label>
          </li>
        </ul>
        </div>

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
            /><label
              htmlFor="consistency-one"
          >1</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="consistency-two" 
          type="radio" 
          name="consistency" 
          value="2" 
          checked = {formData.consistency === "2"}
          /><label
            htmlFor="consistency-two"
            >2</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="consistency-three" 
          type="radio" 
          name="consistency" 
          value="3" 
          checked = {formData.consistency === "3"}
          /><label
            htmlFor="consistency-three"
            >3</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="consistency-four" 
          type="radio" 
          name="consistency" 
          value="4" 
          checked = {formData.consistency === "4"}
          /><label
            htmlFor="consistency-four"
            >4</label>
        </li>
      </ul>
        </div>

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
            /><label
              htmlFor="color-one"
          >1</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="color-two" 
          type="radio" 
          name="color" 
          value="2" 
          checked = {formData.color === "2"}
          /><label
            htmlFor="color-two"
            >2</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="color-three" 
          type="radio" 
          name="color" 
          value="3" 
          checked = {formData.color === "3"}
          /><label
            htmlFor="color-three"
            >3</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="color-four" 
          type="radio" 
          name="color" 
          value="4" 
          checked = {formData.color === "4"}
          /><label
            htmlFor="color-four"
            >4</label>
        </li>
      </ul>
        </div>

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
            /><label
              htmlFor="logo-one"
          >1</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="logo-two" 
          type="radio" 
          name="logo" 
          value="2" 
          checked = {formData.logo === "2"}
          /><label
            htmlFor="logo-two"
            >2</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="logo-three" 
          type="radio" 
          name="logo" 
          value="3" 
          checked = {formData.logo === "3"}
          /><label
            htmlFor="logo-three"
            >3</label>
        </li>

        <li>
          <input 
          onChange={HandleChange}
          id="logo-four" 
          type="radio" 
          name="logo" 
          value="4" 
          checked = {formData.logo === "4"}
          /><label
            htmlFor="logo-four"
            >4</label>
        </li>
      </ul>
        </div>

        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>

            <label
            ><input
                onChange={HandleChange}
                name="spend-time"
                type="checkbox"
                value="swimming"
                checked = {formData.timeSpent.includes("swimming")}
            />Swimming</label>
          </li>

          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="spend-time" 
            type="checkbox" 
            value="bathing" 
            checked = {formData.timeSpent.includes("bathing")}
            />Bathing</label>
          </li>

          <li>
            <label
            ><input
            onChange={HandleChange}
                name="spend-time"
                type="checkbox"
                value="chatting"
                checked = {formData.timeSpent.includes("chatting")}
            />Chatting</label>
          </li>
          
          <li>
            <label
            ><input 
            onChange={HandleChange}
            name="spend-time" 
            type="checkbox" 
            value="noTime" 
            checked = {formData.timeSpent.includes("noTime")}
            />I dont like to
            spend time with it</label>
          </li>
        </ul>
        </div>

        <label
          >What else have you got to say about your rubber duck?<textarea
            onChange={HandleChange}
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
          ></textarea></label><label
          >Put your name here (if you feel like it):<input
            onChange={HandleChange}
            type="text"
            name="username"
            value={formData.username} /></label
            
            ><label
          >Leave us your email pretty please??<input
            onChange={HandleChange}
            type="email"
            name="email"
            value={formData.email} /></label>
            <input 
          onClick={handleSubmit}
        className="form__submit" 
        type="button" 
        value="Submit Survey!" />
    </form>
      </section>
    </main>
  );
}

export default Survey;
