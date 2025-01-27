import React from 'react';

const Notification = ({ notifications = [] }) => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
            
            {notifications.length === 0 ? (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No new notifications</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {notifications.map((notification, index) => (
                        <div 
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                        >
                            <p className="text-gray-800">{notification.message}</p>
                            {notification.timestamp && (
                                <p className="text-sm text-gray-500 mt-2">
                                    {notification.timestamp}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notification;