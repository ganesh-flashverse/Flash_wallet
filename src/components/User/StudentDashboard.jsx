import React, { useState } from 'react';
import { FaHome, FaBook, FaCalendarAlt, FaChartBar, FaComments, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import ExamInterface from './ExamInterface';
import ExamSchedule from './ExamSchedule';
import Results from './Results';
import Feedback from './Feedback';
import Notification from './Notification';

const StudentDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation items with icons
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
        { id: 'exams', label: 'Exams', icon: <FaBook /> },
        { id: 'schedule', label: 'Schedule', icon: <FaCalendarAlt /> },
        { id: 'results', label: 'Results', icon: <FaChartBar /> },
        { id: 'feedback', label: 'Feedback', icon: <FaComments /> },
        { id: 'notifications', label: 'Notifications', icon: <FaBell /> }
    ];

    // Mock data
    const upcomingExams = [
        { id: 1, title: 'Mathematics Final', date: '2024-03-20' },
        { id: 2, title: 'Physics Final', date: '2024-03-22' },
        { id: 3, title: 'Chemistry Final', date: '2024-03-25' }
    ];

    const performanceAnalytics = {
        averageScore: 85,
        completedExams: 5,
        upcomingCount: 3,
        recentScores: [
            { id: 1, subject: 'Biology', score: 90 },
            { id: 2, subject: 'English', score: 85 },
            { id: 3, subject: 'History', score: 88 }
        ]
    };

    const renderDashboardContent = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upcoming Exams Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Upcoming Exams</h2>
                <div className="space-y-3">
                    {upcomingExams.map((exam) => (
                        <div 
                            key={exam.id} 
                            className="p-4 bg-gray-50 rounded-md flex justify-between items-center hover:bg-gray-100 transition duration-150"
                        >
                            <span className="font-medium text-gray-800">{exam.title}</span>
                            <span className="text-gray-600">{exam.date}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Performance Analytics Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Performance Analytics</h2>
                <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-md text-center">
                            <p className="text-sm text-gray-600">Average Score</p>
                            <p className="text-2xl font-bold text-blue-600">
                                {performanceAnalytics.averageScore}%
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-md text-center">
                            <p className="text-sm text-gray-600">Completed</p>
                            <p className="text-2xl font-bold text-green-600">
                                {performanceAnalytics.completedExams}
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-md text-center">
                            <p className="text-sm text-gray-600">Upcoming</p>
                            <p className="text-2xl font-bold text-yellow-600">
                                {performanceAnalytics.upcomingCount}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-md font-medium mb-3 text-gray-700">Recent Scores</h3>
                        <div className="space-y-2">
                            {performanceAnalytics.recentScores.map(score => (
                                <div 
                                    key={score.id}
                                    className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                                >
                                    <span className="text-gray-700">{score.subject}</span>
                                    <span className="font-medium text-blue-600">{score.score}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return renderDashboardContent();
            case 'exams':
                return <ExamInterface questions={[]} />;
            case 'schedule':
                return <ExamSchedule scheduledExams={[]} />;
            case 'results':
                return <Results results={[]} />;
            case 'feedback':
                return <Feedback />;
            case 'notifications':
                return <Notification notifications={[]} />;
            default:
                return renderDashboardContent();
        }
    };

    const NavButton = ({ item, isMobile = false }) => (
        <button
            onClick={() => {
                setActiveSection(item.id);
                if (isMobile) setIsMenuOpen(false);
            }}
            className={`py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-200 w-full
                ${activeSection === item.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-blue-500 hover:bg-blue-100'}`}
        >
            {item.icon}
            <span>{item.label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-blue-600">Student Portal</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4">
                            {navItems.map(item => (
                                <NavButton key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map(item => (
                                <NavButton key={item.id} item={item} isMobile />
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-6">
                {renderContent()}
            </div>
        </div>
    );
};

export default StudentDashboard;