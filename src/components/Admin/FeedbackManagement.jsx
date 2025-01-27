import React, { useState, useEffect } from 'react';
import { 
  ChatBubbleLeftIcon, 
  CheckCircleIcon, 
  ClockIcon,
  FunnelIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const FeedbackManagement = () => {
    const [feedbacks, setFeedbacks] = useState([
        {
            id: 1,
            subject: 'Exam Interface',
            studentName: 'John Doe',
            date: '2024-03-15',
            status: 'pending',
            message: 'The exam interface is user-friendly but could use some improvements.'
        },
        {
            id: 2,
            subject: 'Technical Issue',
            studentName: 'Jane Smith',
            date: '2024-03-14',
            status: 'resolved',
            message: 'Had some connection issues during the exam.'
        },
        {
            id: 3,
            subject: 'Question Clarity',
            studentName: 'Alice Johnson',
            date: '2024-03-16',
            status: 'in progress',
            message: 'Some questions were ambiguous and need better wording.'
        },
        {
            id: 4,
            subject: 'Timer Issues',
            studentName: 'Bob Wilson',
            date: '2024-03-13',
            status: 'pending',
            message: 'The exam timer was not syncing properly.'
        },
        {
            id: 5,
            subject: 'Browser Compatibility',
            studentName: 'Charlie Brown',
            date: '2024-03-12',
            status: 'resolved',
            message: 'Faced issues with Firefox browser compatibility.'
        }
    ]);

    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [response, setResponse] = useState('');

    const handleStatusChange = (feedbackId, newStatus) => {
        setFeedbacks(feedbacks.map(feedback => 
            feedback.id === feedbackId 
                ? { ...feedback, status: newStatus }
                : feedback
        ));
    };

    const getFilteredAndSortedFeedbacks = () => {
        if (!feedbacks) return [];
        
        let filtered = [...feedbacks];
        
        // Filter
        if (filter !== 'all') {
            filtered = filtered.filter(f => f.status.toLowerCase() === filter);
        }

        // Sort
        filtered.sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];
            return sortOrder === 'asc' 
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        });

        return filtered;
    };

    const handleResponse = async (feedbackId) => {
        try {
            // Add your API call here to save the response
            console.log('Sending response for feedback:', feedbackId, response);
            
            // Update the feedback status
            handleStatusChange(feedbackId, 'resolved');
            
            // Clear the response and selected feedback
            setResponse('');
            setSelectedFeedback(null);
            
            // Show success message (you can implement this)
            alert('Response sent successfully!');
        } catch (error) {
            console.error('Error sending response:', error);
            alert('Failed to send response. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Feedback Management</h1>
                    
                    <div className="flex gap-4">
                        {/* Sort Controls */}
                        <div className="relative">
                            <select
                                className="bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="date">Date</option>
                                <option value="studentName">Student Name</option>
                                <option value="status">Status</option>
                            </select>
                            <button
                                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                                className="ml-2 p-2 hover:bg-gray-100 rounded-lg"
                            >
                                {sortOrder === 'asc' 
                                    ? <ArrowUpIcon className="w-5 h-5" />
                                    : <ArrowDownIcon className="w-5 h-5" />
                                }
                            </button>
                        </div>

                        {/* Filter Button */}
                        <div className="relative">
                            <button
                                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                                className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2"
                            >
                                <FunnelIcon className="w-5 h-5" />
                                Filter
                            </button>
                            
                            {isFilterMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    <div className="p-2">
                                        {['all', 'pending', 'resolved', 'in progress'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => {
                                                    setFilter(status);
                                                    setIsFilterMenuOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 rounded-md ${
                                                    filter === status ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                                                }`}
                                            >
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getFilteredAndSortedFeedbacks().map(feedback => (
                        <div key={feedback.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <ChatBubbleLeftIcon className="w-5 h-5 text-blue-500" />
                                        <h3 className="font-semibold text-lg text-gray-900">{feedback.subject}</h3>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        feedback.status.toLowerCase() === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                        feedback.status.toLowerCase() === 'resolved' ? 'bg-green-100 text-green-800' :
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                        {feedback.status}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Student:</span> {feedback.studentName}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Date:</span> {new Date(feedback.date).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-700">{feedback.message}</p>
                                </div>

                                {selectedFeedback === feedback.id ? (
                                    <div className="space-y-4">
                                        <textarea
                                            value={response}
                                            onChange={(e) => setResponse(e.target.value)}
                                            placeholder="Type your response..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            rows="3"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleResponse(feedback.id)}
                                                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Send Response
                                            </button>
                                            <button
                                                onClick={() => setSelectedFeedback(null)}
                                                className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setSelectedFeedback(feedback.id)}
                                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Respond
                                        </button>
                                        <button
                                            onClick={() => handleStatusChange(feedback.id, 'Resolved')}
                                            className="flex items-center justify-center p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                        >
                                            <CheckCircleIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedbackManagement;