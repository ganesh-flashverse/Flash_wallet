import React from 'react';

const Results = ({ results = [] }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Exam Results</h1>
            
            {results.length === 0 ? (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No results available</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="divide-y divide-gray-200">
                        {results.map((result) => (
                            <div 
                                key={result.id}
                                className="p-6 hover:bg-gray-50 transition duration-150"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {result.examTitle}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Rank: {result.rank}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-600">
                                            {result.score}%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Results;