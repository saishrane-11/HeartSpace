import { useState } from "react";
function Connecting(){
    
    const [questionAnswer, setQuestionAnswer] = useState('');

    const handleAnswerChange = (event) => {
        setQuestionAnswer(event.target.value);
    };

    const handleSubmitAnswer = () => {
        // Handle submission of the answer
        console.log('Submitted answer:', questionAnswer);
        // You can add further logic here such as sending the answer to a server or displaying it on the page
    };

    return (
        <div className="container mx-auto px-8 py-12">
            <h2 className="text-4xl font-bold mb-8">Connect</h2>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Categories</h3>
                <ul className="list-disc ml-6">
                    <li className="text-lg mb-2">General Discussion</li>
                    <li className="text-lg mb-2">Introduce Yourself</li>
                    <li className="text-lg mb-2">Question of the Day</li>
                    <li className="text-lg mb-2">Feedback</li>
                </ul>
            </div>
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Question of the Day</h3>
                <p className="text-lg mb-4">What's your favorite book and why?</p>
                <input
                    type="text"
                    value={questionAnswer}
                    onChange={handleAnswerChange}
                    placeholder="Enter your answer..."
                    className="border border-gray-400 rounded px-4 py-2 mb-4"
                /> 
                <br />
                <button
                    onClick={handleSubmitAnswer}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default Connecting;