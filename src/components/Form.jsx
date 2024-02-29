export default function Form() {
    return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
          <li>

            <input 
            id="color-one" 
            type="radio" 
            name="color" 
            value="1" 
            /><label
              htmlFor="color-one"
          >1</label
          >
        </li>
        <li>

          <input 
          id="color-two" 
          type="radio" 
          name="color" 
          value="2" 
          /><label
            htmlFor="color-two"
            >2</label
            >
        </li>
        <li>

          <input 
          id="color-three" 
          type="radio" 
          name="color" 
          value="3" 
          /><label
            htmlFor="color-three"
            >3</label
            >
        </li>
        <li>

          <input 
          id="color-four" 
          type="radio" 
          name="color" 
          value="4" 
          /><label
            htmlFor="color-four"
            >4</label
          >
        </li>
      </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>

            <label
            ><input
                name="spend-time"
                type="checkbox"
                value="swimming"
            />Swimming</label
            >
          </li>
          <li>

            <label
            ><input 
            name="spend-time" 
            type="checkbox" 
            value="bathing" 
            />Bathing</label
            >
          </li>
          <li>

            <label
            ><input
                name="spend-time"
                type="checkbox"
                value="chatting"
            />Chatting</label
            >
          </li>
          <li>

            <label
            ><input 
            name="spend-time" 
            type="checkbox" 
            value="noTime" 
            />I don't like to
            spend time with it</label
            >
          </li>
        </ul>
        </div>

        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
          ></textarea></label

        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value="" /></label

        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            value="" /></label
        ><input 
        className="form__submit" 
        type="submit" 
        value="Submit Survey!" />
    </form>
    );
  }