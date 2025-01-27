import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        // Logic to submit feedback
        alert('Feedback submitted!');
        setFeedback('');
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Feedback</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <textarea 
                    className="w-full p-4 border border-gray-300 rounded-md mb-4 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    placeholder="Provide your feedback here..." 
                />
                <button 
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit Feedback
                </button>
            </div>
        </div>
    );
};

export default Feedback;