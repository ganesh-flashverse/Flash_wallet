import React, { useState, useEffect } from 'react';
import { 
    FunnelIcon, 
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
    EyeIcon,
    ChartBarIcon,
    DocumentTextIcon,
    TableCellsIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const ResultsManagement = () => {
    const [selectedExam, setSelectedExam] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDateRange, setSelectedDateRange] = useState('all');
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null);
    const [results, setResults] = useState([
        {
            id: 1,
            studentName: 'John Doe',
            examName: 'Mathematics Final',
            score: 85,
            totalMarks: 100,
            submissionDate: '2024-03-15',
            duration: '120 minutes',
            status: 'Passed',
            answers: [
                { question: 'Q1', answer: 'A', correct: true },
                { question: 'Q2', answer: 'B', correct: true },
                { question: 'Q3', answer: 'C', correct: false }
            ]
        },
        {
            id: 2,
            studentName: 'Jane Smith',
            examName: 'Physics Final',
            score: 75,
            totalMarks: 100,
            submissionDate: '2024-03-14',
            duration: '90 minutes',
            status: 'Passed',
            answers: [
                { question: 'Q1', answer: 'B', correct: true },
                { question: 'Q2', answer: 'A', correct: false },
                { question: 'Q3', answer: 'C', correct: true }
            ]
        },
        {
            id: 3,
            studentName: 'Alice Johnson',
            examName: 'Chemistry Final',
            score: 45,
            totalMarks: 100,
            submissionDate: '2024-03-16',
            duration: '100 minutes',
            status: 'Failed',
            answers: [
                { question: 'Q1', answer: 'C', correct: false },
                { question: 'Q2', answer: 'B', correct: false },
                { question: 'Q3', answer: 'A', correct: true }
            ]
        }
    ]);

    const getFilteredResults = () => {
        return results.filter(result => {
            const matchesSearch = result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                result.examName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesExam = selectedExam === 'all' || result.examName.toLowerCase().includes(selectedExam);
            const matchesDate = filterByDate(result.submissionDate);
            
            return matchesSearch && matchesExam && matchesDate;
        });
    };

    const filterByDate = (date) => {
        const resultDate = new Date(date);
        const today = new Date();
        
        switch(selectedDateRange) {
            case 'today':
                return resultDate.toDateString() === today.toDateString();
            case 'week':
                const weekAgo = new Date(today.setDate(today.getDate() - 7));
                return resultDate >= weekAgo;
            case 'month':
                const monthAgo = new Date(today.setMonth(today.getMonth() - 1));
                return resultDate >= monthAgo;
            default:
                return true;
        }
    };

    const handleExport = (format) => {
        const filteredData = getFilteredResults();
        console.log(`Exporting ${filteredData.length} results in ${format} format`);
        // Add actual export logic here
        alert(`Exporting results in ${format} format`);
    };

    const handleViewDetails = (result) => {
        setSelectedResult(result);
        setShowDetailModal(true);
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'passed':
                return 'bg-green-100 text-green-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Detail Modal Component
    const DetailModal = ({ result, onClose }) => {
        if (!result) return null;

        return (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Result Details</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Student Name</p>
                                <p className="text-lg font-medium text-gray-900">{result.studentName}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Exam Name</p>
                                <p className="text-lg font-medium text-gray-900">{result.examName}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Score</p>
                                <p className="text-lg font-medium text-gray-900">
                                    {result.score}/{result.totalMarks} ({((result.score/result.totalMarks) * 100).toFixed(1)}%)
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Status</p>
                                <span className={`px-2 inline-flex text-sm font-semibold rounded-full ${getStatusColor(result.status)}`}>
                                    {result.status}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-lg font-medium text-gray-900 mb-3">Answer Details</h4>
                            <div className="border rounded-lg overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Answer</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {result.answers.map((answer, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.question}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{answer.answer}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        answer.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {answer.correct ? 'Correct' : 'Incorrect'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                    <ChartBarIcon className="h-8 w-8 mr-2 text-blue-500" />
                    Results Management
                </h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Filter by Exam
                        </label>
                        <div className="relative">
                            <select 
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-3 pr-10 py-2"
                                value={selectedExam}
                                onChange={(e) => setSelectedExam(e.target.value)}
                            >
                                <option value="all">All Exams</option>
                                <option value="math">Mathematics Final</option>
                                <option value="physics">Physics Final</option>
                            </select>
                            <FunnelIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Search Student
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10 pr-3 py-2"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date Range
                        </label>
                        <select 
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={selectedDateRange}
                            onChange={(e) => setSelectedDateRange(e.target.value)}
                        >
                            <option value="all">All Time</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 mb-6">
                    <button 
                        onClick={() => handleExport('pdf')}
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                        <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                        Export PDF
                    </button>
                    <button 
                        onClick={() => handleExport('excel')}
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        <TableCellsIcon className="h-5 w-5 mr-2" />
                        Export Excel
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {getFilteredResults().map(result => (
                                <tr key={result.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">{result.studentName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{result.examName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900">
                                                {result.score}/{result.totalMarks}
                                            </span>
                                            <span className="ml-2 text-sm text-gray-500">
                                                ({((result.score/result.totalMarks) * 100).toFixed(1)}%)
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(result.status)}`}>
                                            {result.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{result.submissionDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{result.duration}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button 
                                            className="text-blue-500 hover:text-blue-700 flex items-center"
                                            onClick={() => handleViewDetails(result)}
                                        >
                                            <EyeIcon className="h-5 w-5 mr-1" />
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Modal */}
            {showDetailModal && (
                <DetailModal 
                    result={selectedResult} 
                    onClose={() => {
                        setShowDetailModal(false);
                        setSelectedResult(null);
                    }} 
                />
            )}
        </div>
    );
};

export default ResultsManagement;