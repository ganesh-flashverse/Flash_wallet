import React, { useState } from 'react';
import './QuestionBank.css';

const QuestionBank = () => {
    const [questionForm, setQuestionForm] = useState({
        type: 'mcq',
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        marks: '',
        category: ''
    });

    const [questions, setQuestions] = useState([
        {
            id: 1,
            type: 'mcq',
            question: 'What is 2 + 2?',
            category: 'Mathematics',
            marks: 5
        }
        // Add more mock questions as needed
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add question creation logic here
        console.log('New question:', questionForm);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...questionForm.options];
        newOptions[index] = value;
        setQuestionForm({...questionForm, options: newOptions});
    };

    return (
        <div className="question-bank">
            <h1>Question Bank</h1>
            
            <div className="question-form">
                <h2>Add New Question</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Question Type</label>
                        <select 
                            value={questionForm.type}
                            onChange={(e) => setQuestionForm({...questionForm, type: e.target.value})}
                        >
                            <option value="mcq">Multiple Choice</option>
                            <option value="true-false">True/False</option>
                            <option value="descriptive">Descriptive</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Question</label>
                        <textarea
                            value={questionForm.question}
                            onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                            required
                        />
                    </div>

                    {questionForm.type === 'mcq' && (
                        <div className="options-container">
                            <label>Options</label>
                            {questionForm.options.map((option, index) => (
                                <div key={index} className="option-group">
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        placeholder={`Option ${index + 1}`}
                                        required
                                    />
                                    <input
                                        type="radio"
                                        name="correctAnswer"
                                        checked={questionForm.correctAnswer === index.toString()}
                                        onChange={() => setQuestionForm({
                                            ...questionForm,
                                            correctAnswer: index.toString()
                                        })}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="form-row">
                        <div className="form-group">
                            <label>Category</label>
                            <input
                                type="text"
                                value={questionForm.category}
                                onChange={(e) => setQuestionForm({...questionForm, category: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Marks</label>
                            <input
                                type="number"
                                value={questionForm.marks}
                                onChange={(e) => setQuestionForm({...questionForm, marks: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Add Question</button>
                </form>
            </div>

            <div className="questions-list">
                <h2>Existing Questions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <tr key={question.id}>
                                <td>{question.question}</td>
                                <td>{question.type}</td>
                                <td>{question.category}</td>
                                <td>{question.marks}</td>
                                <td>
                                    <button className="edit-button">Edit</button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuestionBank;