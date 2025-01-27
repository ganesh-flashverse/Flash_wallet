import React, { useState } from 'react';
import { 
    PlusCircleIcon,
    PencilSquareIcon,
    TrashIcon,
    ClockIcon,
    CalendarIcon,
    DocumentTextIcon,
    AcademicCapIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/outline';

const ExamManagement = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingExam, setEditingExam] = useState(null);
    const [examForm, setExamForm] = useState({
        title: '',
        duration: '',
        startDate: '',
        endDate: '',
        totalMarks: '',
        description: '',
        subject: '',
        passingMarks: ''
    });

    const [exams, setExams] = useState([
        { 
            id: 1, 
            title: 'Mathematics Final',
            duration: '180',
            startDate: '2024-04-01T09:00',
            endDate: '2024-04-01T12:00',
            totalMarks: '100',
            passingMarks: '40',
            subject: 'Mathematics',
            status: 'Scheduled',
            description: 'Final examination for Mathematics course'
        },
        // Add more mock exams as needed
    ]);

    const resetForm = () => {
        setExamForm({
            title: '',
            duration: '',
            startDate: '',
            endDate: '',
            totalMarks: '',
            description: '',
            subject: '',
            passingMarks: ''
        });
        setEditingExam(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingExam) {
            setExams(exams.map(exam => 
                exam.id === editingExam.id 
                    ? { ...examForm, id: exam.id, status: exam.status }
                    : exam
            ));
        } else {
            setExams([...exams, {
                ...examForm,
                id: Date.now(),
                status: 'Scheduled'
            }]);
        }
        resetForm();
        setIsFormVisible(false);
    };

    const handleEdit = (exam) => {
        setEditingExam(exam);
        setExamForm(exam);
        setIsFormVisible(true);
    };

    const handleDelete = (examId) => {
        if (window.confirm('Are you sure you want to delete this exam?')) {
            setExams(exams.filter(exam => exam.id !== examId));
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'scheduled':
                return 'bg-blue-100 text-blue-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        <AcademicCapIcon className="w-8 h-8 text-blue-600" />
                        Exam Management
                    </h1>
                    <button
                        onClick={() => setIsFormVisible(!isFormVisible)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <PlusCircleIcon className="w-5 h-5" />
                        {isFormVisible ? 'Close Form' : 'Create New Exam'}
                    </button>
                </div>

                {isFormVisible && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                            {editingExam ? 'Edit Exam' : 'Create New Exam'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                    <input
                                        type="text"
                                        value={examForm.title}
                                        onChange={(e) => setExamForm({...examForm, title: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        value={examForm.subject}
                                        onChange={(e) => setExamForm({...examForm, subject: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                                    <input
                                        type="number"
                                        value={examForm.duration}
                                        onChange={(e) => setExamForm({...examForm, duration: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Marks</label>
                                    <input
                                        type="number"
                                        value={examForm.totalMarks}
                                        onChange={(e) => setExamForm({...examForm, totalMarks: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
                                    <input
                                        type="datetime-local"
                                        value={examForm.startDate}
                                        onChange={(e) => setExamForm({...examForm, startDate: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
                                    <input
                                        type="datetime-local"
                                        value={examForm.endDate}
                                        onChange={(e) => setExamForm({...examForm, endDate: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={examForm.description}
                                    onChange={(e) => setExamForm({...examForm, description: e.target.value})}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    rows="3"
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {editingExam ? 'Update Exam' : 'Create Exam'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Existing Exams</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {exams.map(exam => (
                                        <tr key={exam.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{exam.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{exam.subject}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{exam.duration} mins</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {new Date(exam.startDate).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exam.status)}`}>
                                                    {exam.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(exam)}
                                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    >
                                                        <PencilSquareIcon className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(exam.id)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <TrashIcon className="w-5 h-5" />
                                                    </button>
                                                </div>
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

export default ExamManagement;