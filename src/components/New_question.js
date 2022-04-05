import { Link, useNavigate } from 'react-router-dom';

const New_question = () => {
  const handleQuestionType = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'choose a correct anwser') {
      document.querySelector('#true-false').style.display = 'flex';
      document.querySelector('#multiple-choice').style.display = 'none'
    } else if (e.target.value === 'multiple choice') {
      document.querySelector('#multiple-choice').style.display = 'flex';
      document.querySelector('#true-false').style.display = 'none'
    }
  }

  // "clickHandler" method
  const clickHandler = () => {
    const tooltipDiv = document.querySelector('#tooltip-info');
    tooltipDiv.style.display = 'block';
  }

  // Using "useNavigate" hook in order to redirect the user ot a certain page
  const navigate = useNavigate();

  return (
    <>
      <div className="newpost flex items-center px-4">
        <span class="material-icons text-red-300">arrow_back</span>
        <h1 className="newpost__title text-red-300 p-4 font-medium text-2xl">Post a new question</h1>
      </div>
      <div style={{borderBottom: "1px solid #1e293b", width:"100vw"}}></div>
      <p className="m-4 text-gray-500 text-lg"><span className="text-4xl font-medium text-gray-600">Psst..!!</span>&nbsp;In order to post a question, please specify it's category &amp; type</p>
      <form action="" className="form flex flex-col m-4">
        <label htmlFor="category" className="font-medium text-gray-500">Select a category</label>
        <select name="" id="category" className="p-2 mb-4">
          <option value="quran">Quran</option>
          <option value="hadith">Hadith</option>
          <option value="fiqh">Fiqh</option>
          <option value="general">General</option>
          </select>
        <label htmlFor="question_type" className="font-medium text-gray-500">Select a type of question</label>
        <select name="" id="question_type" className="p-2 mb-4" onChange={handleQuestionType}>
          <option value="choose a correct anwser" defaultValue>Choose a correct answer</option>
          <option value="multiple choice">Multiple choice</option>
        </select>

        {/* Based on the "type of question", options will be displayed accordingly - if "choose a correct ans", then "radio" btns otherwise, "checkboxes" */}


        <label htmlFor="question" className="font-medium text-gray-500">Type your question</label>
        <input type="text" id="question" />
        <p className="mt-6 text-gray-400 font-medium">Enter the options</p>
        <div id="true-false" className="flex items-center mt-4 p-2 hidden">
          <input type="radio" id="true" />
          <label htmlFor="true" className="font-medium text-gray-500 mx-2">True</label>
          <input type="radio" id="false"/>
          <label htmlFor="false" className="font-medium text-gray-500 mx-2">False</label>
        </div>

        {/* Multiple choice options */}
        <div id="multiple-choice" className="flex flex-col hidden">
          <div id="opt-a" className="flex items-center">
            <label htmlFor="a">(a).</label>
            <input type="text" id="a" placeholder="Enter option a" className=""/>
          </div>
          <div id="opt-b" className="flex items-center">
            <label htmlFor="b">(b).</label>
            <input type="text" id="b" placeholder="Enter option b" className=""/>
          </div>
          <div id="opt-c" className="flex items-center">
            <label htmlFor="c">(c).</label>
            <input type="text" id="c" placeholder="Enter option c" className=""/>
          </div>
          <div id="opt-d" className="flex items-center">
            <label htmlFor="d">(d).</label>
            <input type="text" id="d" placeholder="Enter option d" className=""/>
          </div>
          <div id="opt-e" className="flex items-center">
            <label htmlFor="e">(e).</label>
            <input type="text" id="e" placeholder="Enter option e" className=""/>
          </div>
        </div>
        {/* End of div#multiple choice */}
        <div id="submit-answer" className="flex flex-col justify-between">
          <div id="tooltip-info" className="text-xs text-gray-500 bg-gray-200 mt-4 p-2 rounded hidden">The answer you submit, will be used as a reference to compare others' responses. If they match, their response will be treated as correct else not. Remember, others can flag your answer as wrong if they feel like it!</div>
          <div id="inner-wrapper" className="flex justify-between items-center relative" onClick={clickHandler}>
            <label htmlFor="submit-answer" className="mt-8 text-gray-500">Submit your answer:</label>
            <Link to=""><span class="material-icons text-lg text-gray-500 self-end">help_outline</span></Link>
          </div>
          <input type="text" id="submit-answer" />
        </div>
        <button type="submit" className="bg-green-400 text-neutral-50 text-lg font-medium py-2 rounded mt-4" onClick={() => navigate('/')}>Post question</button>
        <button id="cancel" className="mt-4 py-2 text-gray-400 font-medium" onClick={() => navigate('/newpost')}>Cancel</button>
      </form>
    </>
  );
}

export default New_question;
