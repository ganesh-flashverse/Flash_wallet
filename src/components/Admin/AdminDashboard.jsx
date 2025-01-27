import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const stats = {
        totalStudents: 150,
        activeExams: 3,
        completedExams: 12,
        averageScore: 78.5
    };

    const quickLinks = [
        { title: 'Manage Exams', path: '/admin/exams' },
        { title: 'Question Bank', path: '/admin/questions' },
        { title: 'View Results', path: '/admin/results' },
        { title: 'User Management', path: '/admin/users' }
    ];

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            
            <div className="stats-container">
                <div className="stat-card">
                    <h3>Total Students</h3>
                    <p>{stats.totalStudents}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Exams</h3>
                    <p>{stats.activeExams}</p>
                </div>
                <div className="stat-card">
                    <h3>Completed Exams</h3>
                    <p>{stats.completedExams}</p>
                </div>
                <div className="stat-card">
                    <h3>Average Score</h3>
                    <p>{stats.averageScore}%</p>
                </div>
            </div>

            <div className="quick-links">
                <h2>Quick Links</h2>
                <div className="links-grid">
                    {quickLinks.map((link, index) => (
                        <a key={index} href={link.path} className="link-card">
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;