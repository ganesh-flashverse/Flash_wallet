import React, { useState } from 'react';
import './ExamManagement.css';

const ExamManagement = () => {
    const [examForm, setExamForm] = useState({
        title: '',
        duration: '',
        startDate: '',
        endDate: '',
        totalMarks: '',
        description: ''
    });

    const [exams, setExams] = useState([
        { 
            id: 1, 
            title: 'Mathematics Final',
            duration: '180',
            startDate: '2024-04-01',
            status: 'Scheduled'
        },
        // Add more mock exams as needed
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add exam creation logic here
        console.log('New exam:', examForm);
    };

    const handleDelete = (examId) => {
        setExams(exams.filter(exam => exam.id !== examId));
    };

    return (
        <div className="exam-management">
            <h1>Exam Management</h1>
            
            <div className="exam-form-container">
                <h2>Create New Exam</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={examForm.title}
                            onChange={(e) => setExamForm({...examForm, title: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Duration (minutes)</label>
                            <input
                                type="number"
                                value={examForm.duration}
                                onChange={(e) => setExamForm({...examForm, duration: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Total Marks</label>
                            <input
                                type="number"
                                value={examForm.totalMarks}
                                onChange={(e) => setExamForm({...examForm, totalMarks: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Start Date</label>
                            <input
                                type="datetime-local"
                                value={examForm.startDate}
                                onChange={(e) => setExamForm({...examForm, startDate: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>End Date</label>
                            <input
                                type="datetime-local"
                                value={examForm.endDate}
                                onChange={(e) => setExamForm({...examForm, endDate: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={examForm.description}
                            onChange={(e) => setExamForm({...examForm, description: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Create Exam</button>
                </form>
            </div>

            <div className="exams-list">
                <h2>Existing Exams</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map(exam => (
                            <tr key={exam.id}>
                                <td>{exam.title}</td>
                                <td>{exam.duration} mins</td>
                                <td>{exam.startDate}</td>
                                <td>{exam.status}</td>
                                <td>
                                    <button className="edit-button">Edit</button>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDelete(exam.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamManagement;