import React from 'react';

const ExamSchedule = ({ scheduledExams = [] }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Scheduled Exams</h1>
            
            {scheduledExams.length === 0 ? (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No exams scheduled</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="divide-y divide-gray-200">
                        {scheduledExams.map((exam) => (
                            <div 
                                key={exam.id} 
                                className="p-6 hover:bg-gray-50 transition duration-150"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {exam.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {exam.date}
                                        </p>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamSchedule;