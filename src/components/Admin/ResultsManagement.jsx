import React, { useState } from 'react';
import './ResultsManagement.css';

const ResultsManagement = () => {
    const [selectedExam, setSelectedExam] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const mockResults = [
        {
            id: 1,
            studentName: 'John Doe',
            examName: 'Mathematics Final',
            score: 85,
            totalMarks: 100,
            submissionDate: '2024-03-15',
            duration: '120 minutes'
        },
        // Add more mock results as needed
    ];

    const handleExport = (format) => {
        console.log(`Exporting results in ${format} format`);
    };

    return (
        <div className="results-management">
            <h1>Results Management</h1>

            <div className="results-controls">
                <div className="filters">
                    <select 
                        value={selectedExam} 
                        onChange={(e) => setSelectedExam(e.target.value)}
                    >
                        <option value="all">All Exams</option>
                        <option value="math">Mathematics Final</option>
                        <option value="physics">Physics Final</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search student..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="export-buttons">
                    <button onClick={() => handleExport('pdf')}>Export as PDF</button>
                    <button onClick={() => handleExport('excel')}>Export as Excel</button>
                </div>
            </div>

            <div className="results-table">
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Exam</th>
                            <th>Score</th>
                            <th>Percentage</th>
                            <th>Submission Date</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockResults.map(result => (
                            <tr key={result.id}>
                                <td>{result.studentName}</td>
                                <td>{result.examName}</td>
                                <td>{result.score}/{result.totalMarks}</td>
                                <td>{(result.score/result.totalMarks * 100).toFixed(2)}%</td>
                                <td>{result.submissionDate}</td>
                                <td>{result.duration}</td>
                                <td>
                                    <button className="view-button">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultsManagement;