import React, { useState } from 'react';

const ExamInterface = ({ questions = [] }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handleAnswerChange = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if (!questions.length) return <div className="text-center p-6">No questions available</div>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Exam Interface</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <div className="mb-6">
                    <p className="text-gray-800 mb-4">{questions[currentQuestionIndex].questionText}</p>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        value={answers[currentQuestionIndex]}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                        placeholder="Type your answer here..."
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    className={`px-6 py-2 rounded-md ${
                        currentQuestionIndex === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                >
                    Previous
                </button>

                {currentQuestionIndex === questions.length - 1 ? (
                    <button
                        onClick={() => {/* Logic to submit answers */}}
                        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Submit Exam
                    </button>
                ) : (
                    <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExamInterface;