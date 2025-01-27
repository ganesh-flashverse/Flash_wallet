import React, { useState } from 'react';
import { 
    PlusCircleIcon, 
    PencilSquareIcon, 
    TrashIcon,
    DocumentPlusIcon,
    AcademicCapIcon,
    QuestionMarkCircleIcon,
    FunnelIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    CheckCircleIcon,
    CloudArrowUpIcon,
    CloudArrowDownIcon,
    MagnifyingGlassIcon,
    TagIcon,
    AdjustmentsHorizontalIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const QuestionBank = () => {
    // Define all state variables at the component level
    const [examSetup, setExamSetup] = useState({
        examName: '',
        totalQuestions: 0,
        currentQuestionIndex: 0,
        timePerQuestion: 0,
        category: '',
        difficulty: 'medium',
        totalMarks: 0
    });

    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        marks: '',
        explanation: ''
    });

    const [questions, setQuestions] = useState([]);
    const [showExamSetup, setShowExamSetup] = useState(true);
    const [examCreationComplete, setExamCreationComplete] = useState(false);

    // Add new state variables for additional features
    const [questionBank, setQuestionBank] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterDifficulty, setFilterDifficulty] = useState('all');
    const [showQuestionBank, setShowQuestionBank] = useState(false);

    // Add new state for preview and edit mode
    const [showPreview, setShowPreview] = useState(false);
    const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);

    // Define all handler functions
    const handleExamSetup = (e) => {
        e.preventDefault();
        if (examSetup.totalQuestions > 0) {
            setShowExamSetup(false);
        }
    };

    const handleQuestionSubmit = (e) => {
        e.preventDefault();
        const updatedQuestions = [...questions];
        updatedQuestions[examSetup.currentQuestionIndex] = currentQuestion;
        setQuestions(updatedQuestions);

        if (examSetup.currentQuestionIndex + 1 < examSetup.totalQuestions) {
            // Move to next question
            setExamSetup({
                ...examSetup,
                currentQuestionIndex: examSetup.currentQuestionIndex + 1
            });
            // Reset form for next question
            setCurrentQuestion({
                question: '',
                options: ['', '', '', ''],
                correctAnswer: '',
                marks: '',
                explanation: ''
            });
        } else {
            // Exam creation complete
            setExamCreationComplete(true);
        }
    };

    const handleCreateExam = () => {
        // Here you would typically send the exam data to your backend
        console.log('Exam Created:', {
            examDetails: examSetup,
            questions: questions
        });
        // Reset everything
        setExamSetup({
            examName: '',
            totalQuestions: 0,
            currentQuestionIndex: 0,
            timePerQuestion: 0,
            category: '',
            difficulty: 'medium',
            totalMarks: 0
        });
        setQuestions([]);
        setShowExamSetup(true);
        setExamCreationComplete(false);
    };

    // Add new handler functions
    const handleImportQuestions = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedQuestions = JSON.parse(event.target.result);
                    setQuestionBank([...questionBank, ...importedQuestions]);
                    alert('Questions imported successfully!');
                } catch (error) {
                    alert('Error importing questions. Please check file format.');
                }
            };
            reader.readAsText(file);
        }
    };

    const handleExportQuestions = () => {
        const dataStr = JSON.stringify(questionBank, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'question-bank.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    // Add handler for editing question
    const handleEditQuestion = (index) => {
        setEditingQuestionIndex(index);
        setCurrentQuestion(questions[index]);
    };

    // Add handler for updating question
    const handleUpdateQuestion = (e) => {
        e.preventDefault();
        const updatedQuestions = [...questions];
        updatedQuestions[editingQuestionIndex] = currentQuestion;
        setQuestions(updatedQuestions);
        setEditingQuestionIndex(null);
        setCurrentQuestion({
            question: '',
            options: ['', '', '', ''],
            correctAnswer: '',
            marks: '',
            explanation: ''
        });
    };

    // Question Form Component
    const renderQuestionForm = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <QuestionMarkCircleIcon className="h-6 w-6 mr-2 text-blue-500" />
                    Question {examSetup.currentQuestionIndex + 1} of {examSetup.totalQuestions}
                </h2>
                <span className="text-sm text-gray-500">
                    {Math.round((examSetup.currentQuestionIndex / examSetup.totalQuestions) * 100)}% Complete
                </span>
            </div>

            <form onSubmit={handleQuestionSubmit} className="space-y-6">
                {/* Question Text */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question Text
                    </label>
                    <textarea
                        className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        rows="3"
                        value={currentQuestion.question}
                        onChange={(e) => setCurrentQuestion({...currentQuestion, question: e.target.value})}
                        required
                        placeholder="Enter your question here..."
                    />
                </div>

                {/* Options */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Options
                    </label>
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-gray-500 w-8">
                                {String.fromCharCode(65 + index)}.
                            </span>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => {
                                    const newOptions = [...currentQuestion.options];
                                    newOptions[index] = e.target.value;
                                    setCurrentQuestion({...currentQuestion, options: newOptions});
                                }}
                                className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                placeholder={`Option ${String.fromCharCode(65 + index)}`}
                                required
                            />
                        </div>
                    ))}
                </div>

                {/* Correct Answer */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correct Answer
                    </label>
                    <select
                        className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={currentQuestion.correctAnswer}
                        onChange={(e) => setCurrentQuestion({...currentQuestion, correctAnswer: e.target.value})}
                        required
                    >
                        <option value="">Select Correct Option</option>
                        {currentQuestion.options.map((_, index) => (
                            <option key={index} value={index}>
                                Option {String.fromCharCode(65 + index)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Marks */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marks
                    </label>
                    <input
                        type="number"
                        className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={currentQuestion.marks}
                        onChange={(e) => setCurrentQuestion({...currentQuestion, marks: e.target.value})}
                        required
                        min="0"
                        placeholder="Enter marks for this question"
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    {examSetup.currentQuestionIndex > 0 && (
                        <button
                            type="button"
                            onClick={() => setExamSetup({
                                ...examSetup,
                                currentQuestionIndex: examSetup.currentQuestionIndex - 1
                            })}
                            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                            <ArrowLeftIcon className="h-5 w-5 mr-2" />
                            Previous Question
                        </button>
                    )}
                    <button
                        type="submit"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ml-auto"
                    >
                        {examSetup.currentQuestionIndex + 1 === examSetup.totalQuestions ? (
                            <>
                                Finish
                                <CheckCircleIcon className="h-5 w-5 ml-2" />
                            </>
                        ) : (
                            <>
                                Next Question
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );

    // Add the missing renderExamSetup function
    const renderExamSetup = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <DocumentPlusIcon className="h-6 w-6 mr-2 text-blue-500" />
                Exam Setup
            </h2>
            <form onSubmit={handleExamSetup} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Exam Name
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={examSetup.examName}
                            onChange={(e) => setExamSetup({...examSetup, examName: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Questions
                        </label>
                        <input
                            type="number"
                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={examSetup.totalQuestions}
                            onChange={(e) => setExamSetup({...examSetup, totalQuestions: parseInt(e.target.value)})}
                            min="1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time per Question (minutes)
                        </label>
                        <input
                            type="number"
                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={examSetup.timePerQuestion}
                            onChange={(e) => setExamSetup({...examSetup, timePerQuestion: parseInt(e.target.value)})}
                            min="1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={examSetup.category}
                            onChange={(e) => setExamSetup({...examSetup, category: e.target.value})}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="Programming">Programming</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Start Adding Questions
                    </button>
                </div>
            </form>
        </div>
    );

    // Add preview component
    const renderPreview = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Exam Preview: {examSetup.examName}
                </h2>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setShowPreview(false)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                        Back to Edit
                    </button>
                    <button
                        onClick={handleCreateExam}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Confirm & Create Exam
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                {questions.map((question, index) => (
                    <div key={index} className="border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Question {index + 1}
                                </h3>
                                <p className="mt-2 text-gray-700">{question.question}</p>
                            </div>
                            <button
                                onClick={() => handleEditQuestion(index)}
                                className="ml-4 text-blue-500 hover:text-blue-700"
                            >
                                Edit
                            </button>
                        </div>

                        <div className="ml-4 space-y-2">
                            {question.options.map((option, optIndex) => (
                                <div 
                                    key={optIndex}
                                    className={`p-2 rounded ${
                                        question.correctAnswer === optIndex.toString()
                                            ? 'bg-green-50 border border-green-200'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    <span className="font-medium mr-2">
                                        {String.fromCharCode(65 + optIndex)}.
                                    </span>
                                    {option}
                                    {question.correctAnswer === optIndex.toString() && (
                                        <span className="ml-2 text-green-600 text-sm">
                                            (Correct Answer)
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 text-sm text-gray-500">
                            Marks: {question.marks}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Modify the renderExamComplete to include preview option
    const renderExamComplete = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                All Questions Added!
            </h2>
            <p className="text-gray-600 mb-6">
                You have added all {examSetup.totalQuestions} questions for {examSetup.examName}.
            </p>
            <div className="space-y-4">
                <p className="text-sm text-gray-500">
                    Total Questions: {examSetup.totalQuestions}<br />
                    Category: {examSetup.category}<br />
                    Time per Question: {examSetup.timePerQuestion} minutes
                </p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                <button
                    onClick={() => setShowPreview(true)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Preview & Edit Questions
                </button>
                <button
                    onClick={handleCreateExam}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Create Exam
                </button>
            </div>
        </div>
    );

    // Add Question Bank Management Section
    const renderQuestionBankManager = () => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Question Bank</h2>
                <div className="flex space-x-4">
                    <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
                        <CloudArrowUpIcon className="h-5 w-5 mr-2" />
                        Import Questions
                        <input
                            type="file"
                            accept=".json"
                            className="hidden"
                            onChange={handleImportQuestions}
                        />
                    </label>
                    <button
                        onClick={handleExportQuestions}
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        <CloudArrowDownIcon className="h-5 w-5 mr-2" />
                        Export Questions
                    </button>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search questions..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                </div>
                <select
                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Programming">Programming</option>
                </select>
                <select
                    className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            {/* Question Bank Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Question
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Difficulty
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Marks
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {questionBank
                            .filter(q => 
                                (filterCategory === 'all' || q.category === filterCategory) &&
                                (filterDifficulty === 'all' || q.difficulty === filterDifficulty) &&
                                (q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                q.category.toLowerCase().includes(searchTerm.toLowerCase()))
                            )
                            .map((question, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {question.question.substring(0, 50)}...
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {question.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {question.difficulty}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {question.marks}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => {/* Add edit functionality */}}
                                            className="text-blue-600 hover:text-blue-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {/* Add delete functionality */}}
                                            className="text-red-600 hover:text-red-900"
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

    // Return the main component JSX
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-end mb-6">
                <button
                    onClick={() => setShowQuestionBank(!showQuestionBank)}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                    {showQuestionBank ? 'Create New Exam' : 'Manage Question Bank'}
                </button>
            </div>

            {showQuestionBank ? (
                renderQuestionBankManager()
            ) : (
                <>
                    {showExamSetup && renderExamSetup()}
                    {!showExamSetup && !examCreationComplete && !showPreview && renderQuestionForm()}
                    {examCreationComplete && !showPreview && renderExamComplete()}
                    {showPreview && renderPreview()}
                    {editingQuestionIndex !== null && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                            <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-lg bg-white">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-medium">Edit Question {editingQuestionIndex + 1}</h3>
                                    <button 
                                        onClick={() => setEditingQuestionIndex(null)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>
                                <form onSubmit={handleUpdateQuestion} className="space-y-6">
                                    {/* Question Text */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Question Text
                                        </label>
                                        <textarea
                                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            rows="3"
                                            value={currentQuestion.question}
                                            onChange={(e) => setCurrentQuestion({
                                                ...currentQuestion,
                                                question: e.target.value
                                            })}
                                            required
                                            placeholder="Enter your question here..."
                                        />
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Options
                                        </label>
                                        {currentQuestion.options.map((option, index) => (
                                            <div key={index} className="flex items-center space-x-4">
                                                <span className="text-sm font-medium text-gray-500 w-8">
                                                    {String.fromCharCode(65 + index)}.
                                                </span>
                                                <input
                                                    type="text"
                                                    value={option}
                                                    onChange={(e) => {
                                                        const newOptions = [...currentQuestion.options];
                                                        newOptions[index] = e.target.value;
                                                        setCurrentQuestion({
                                                            ...currentQuestion,
                                                            options: newOptions
                                                        });
                                                    }}
                                                    className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                                    placeholder={`Option ${String.fromCharCode(65 + index)}`}
                                                    required
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Correct Answer */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Correct Answer
                                        </label>
                                        <select
                                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            value={currentQuestion.correctAnswer}
                                            onChange={(e) => setCurrentQuestion({
                                                ...currentQuestion,
                                                correctAnswer: e.target.value
                                            })}
                                            required
                                        >
                                            <option value="">Select Correct Option</option>
                                            {currentQuestion.options.map((_, index) => (
                                                <option key={index} value={index}>
                                                    Option {String.fromCharCode(65 + index)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Marks */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Marks
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                            value={currentQuestion.marks}
                                            onChange={(e) => setCurrentQuestion({
                                                ...currentQuestion,
                                                marks: e.target.value
                                            })}
                                            required
                                            min="0"
                                            placeholder="Enter marks for this question"
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-4 mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setEditingQuestionIndex(null)}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        >
                                            Update Question
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default QuestionBank;