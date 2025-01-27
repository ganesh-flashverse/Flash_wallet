import React, { useState } from 'react';
import './FeedbackManagement.css';

const FeedbackManagement = () => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            studentName: 'Jane Smith',
            subject: 'Exam Platform Feedback',
            message: 'The timer functionality needs improvement.',
            date: '2024-03-10',
            status: 'Pending'
        },
        // Add more mock feedback entries
    ]);

    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [response, setResponse] = useState('');

    const handleResponse = (feedbackId) => {
        console.log(`Responding to feedback ${feedbackId} with: ${response}`);
        // Add response logic here
        setSelectedFeedback(null);
        setResponse('');
    };

    return (
        <div className="feedback-management">
            <h1>Feedback Management</h1>

            <div className="feedback-list">
                {feedbacks.map(feedback => (
                    <div key={feedback.id} className="feedback-card">
                        <div className="feedback-header">
                            <h3>{feedback.subject}</h3>
                            <span className={`status ${feedback.status.toLowerCase()}`}>
                                {feedback.status}
                            </span>
                        </div>
                        <div className="feedback-info">
                            <p><strong>Student:</strong> {feedback.studentName}</p>
                            <p><strong>Date:</strong> {feedback.date}</p>
                        </div>
                        <p className="feedback-message">{feedback.message}</p>
                        
                        {selectedFeedback === feedback.id ? (
                            <div className="response-form">
                                <textarea
                                    value={response}
                                    onChange={(e) => setResponse(e.target.value)}
                                    placeholder="Type your response..."
                                />
                                <div className="response-actions">
                                    <button 
                                        className="submit-response"
                                        onClick={() => handleResponse(feedback.id)}
                                    >
                                        Send Response
                                    </button>
                                    <button 
                                        className="cancel-response"
                                        onClick={() => setSelectedFeedback(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button 
                                className="respond-button"
                                onClick={() => setSelectedFeedback(feedback.id)}
                            >
                                Respond
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackManagement;