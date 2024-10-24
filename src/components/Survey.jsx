/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AnswersItem from "./AnswersItem";
import BestFeatures from "./BestFeatures";
import WorstBits from "./WorstBits";
import DuckConsistency from "./DuckConsistency";
import DuckColour from "./DuckColour";
import DuckLogo from "./DuckLogo";
import SpendTime from "../SpendTime";
import { noXssOrSql } from "../Validation";

function Survey() {
  const [open, setOpen] = useState(false);

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
  };

  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [formData, setFormData] = useState({...INITIAL_FORM_DATA});
  const [formDataChanged, setFormDataChanged] = useState({...FORM_DATA_MODIFIED});
  const [invalidInput, setInvalidInput] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  const fetchFormData = () => {
    fetch('http://localhost:3000/formData')
      .then(response => response.json())
      .then(data => {
        setSubmittedAnswers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  //fetch data upon every render
  useEffect(() => {
    fetchFormData();
  }, []);

  //protect against XSS and SQL Injections
  const inputValidation = (value) => {
    if (noXssOrSql(value)) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  };

  const handleCheckboxChange = (name, value, checked) => {
    const updateFormData = { ...formData };
    if (checked) {
      if (!Array.isArray(updateFormData[name])) {
        updateFormData[name] = [];
      }
      updateFormData[name] = [...formData[name], value];
    } else {
      updateFormData[name] = formData[name].filter(item => item !== value);
    }
    setFormData(updateFormData);
  };

  const HandleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (name !== undefined) {
      if (type === "checkbox") {
        handleCheckboxChange(name, value, checked);
      } else {
        inputValidation(value);
        setFormData({ ...formData, [name]: value });
        setFormDataChanged({ ...formDataChanged, [name]: true });
      }
    }
  };

  const handleSubmit = () => {
    const newAnswerItem = { ...formData };

    fetch("http://localhost:3000/formData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnswerItem)
    })
      .then(response => response.json())
      .then(() => {
        fetchFormData();
        setFormData(INITIAL_FORM_DATA);
      })
      .catch(error => console.error('Error posting data:', error));
  };

  const submitEdit = (id) => {
    const updatedAnswerItem = { ...formData };
    
    fetch(`http://localhost:3000/formData/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(updatedAnswerItem)
    })
      .then(response => response.json())
      .then(() => {
        fetchFormData();
        setEdit(false);
        setFormData(INITIAL_FORM_DATA);
      })
      .catch(error => console.error('Error updating data: ', error));
  };

  const handleEdit = (id) => {
    const answerToEdit = submittedAnswers.find(answer => answer.id === id);

    setFormData(answerToEdit);
    setEdit(true);
    setId(id);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {submittedAnswers.map((answer) => (
          <AnswersItem 
          key={answer.id} 
          answerItem={answer} 
          id={id}
          handleEdit={() => handleEdit(answer.id)}
          setEdit={setEdit}
          />
        ))}
      </section>

      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <BestFeatures formData={formData} HandleChange={HandleChange}/>
          <WorstBits formData={formData} HandleChange={HandleChange}/>

          <DuckColour formData={formData} HandleChange={HandleChange}/>
          <DuckConsistency formData={formData}HandleChange={HandleChange}/>
          <DuckLogo formData={formData} HandleChange={HandleChange}/>

          <SpendTime formData={formData} HandleChange={HandleChange}/>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={HandleChange}
              name="review"
              cols="30"
              rows="10"
              value={formData.review}
            >
            </textarea>
          </label>

          <label>
            Put your name here (if you feel like it):
            <input
              onChange={HandleChange}
              type="text"
              name="username"
              value={formData.username} 
            />
          </label>  

          <label>
            Leave us your email pretty please??
            <input
              onChange={HandleChange}
              type="email"
              name="email"
              value={formData.email} 
            />
          </label>

          <input 
            onClick={() => { edit ? submitEdit(id) : handleSubmit(); }}
            className="form__submit" 
            type="button" 
            value="Submit Survey!"
            disabled={invalidInput}
          />

        </form>
      </section>
    </main>
  )
}

export default Survey;
