import React, { useState } from 'react';
import {
    UserCircleIcon,
    KeyIcon,
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    PencilSquareIcon,
    CheckIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Anderson',
        email: 'john.anderson@examportal.com',
        phone: '+1 (555) 123-4567',
        role: 'Senior Administrator',
        department: 'Computer Science',
        joinDate: '2023-01-15',
        qualification: 'Ph.D. in Computer Science',
        specialization: 'Educational Technology',
        lastActive: 'Today at 10:30 AM',
        recentActivities: [
            {
                action: 'Published new exam',
                subject: 'Advanced Mathematics Final',
                timestamp: '2024-03-15 09:30 AM'
            },
            {
                action: 'Updated question bank',
                subject: 'Added 25 new questions',
                timestamp: '2024-03-14 02:15 PM'
            },
            {
                action: 'Generated results',
                subject: 'Physics Midterm Exam',
                timestamp: '2024-03-13 11:45 AM'
            }
        ]
    });

    const [editForm, setEditForm] = useState({ ...profileData });
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleProfileUpdate = () => {
        setProfileData(editForm);
        setIsEditing(false);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        // Add password change logic here
        setShowPasswordModal(false);
        setPasswordForm({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                            <UserCircleIcon className="h-12 w-12 text-blue-500" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                            <p className="text-gray-500">{profileData.role}</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            <PencilSquareIcon className="h-5 w-5 mr-2" />
                            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                        <button
                            onClick={() => setShowPasswordModal(true)}
                            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        >
                            <KeyIcon className="h-5 w-5 mr-2" />
                            Change Password
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Personal Information */}
                <div className="col-span-2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                        {isEditing ? (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-gray-300"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border-gray-300"
                                        value={editForm.email}
                                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-lg border-gray-300"
                                        value={editForm.phone}
                                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border-gray-300"
                                        value={editForm.department}
                                        onChange={(e) => setEditForm({...editForm, department: e.target.value})}
                                    />
                                </div>
                                <div className="flex justify-end space-x-3 mt-6">
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleProfileUpdate}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span>{profileData.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span>{profileData.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span>{profileData.department}</span>
                                </div>
                                <div className="flex items-center">
                                    <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-3" />
                                    <span>{profileData.qualification}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="col-span-1">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">Recent Activities</h2>
                        <div className="space-y-4">
                            {profileData.recentActivities.map((activity, index) => (
                                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                                    <p className="font-medium text-gray-900">{activity.action}</p>
                                    <p className="text-sm text-gray-500">{activity.subject}</p>
                                    <p className="text-xs text-gray-400">{activity.timestamp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-lg bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Change Password</h3>
                            <button onClick={() => setShowPasswordModal(false)}>
                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-300"
                                    value={passwordForm.currentPassword}
                                    onChange={(e) => setPasswordForm({
                                        ...passwordForm,
                                        currentPassword: e.target.value
                                    })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-300"
                                    value={passwordForm.newPassword}
                                    onChange={(e) => setPasswordForm({
                                        ...passwordForm,
                                        newPassword: e.target.value
                                    })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-300"
                                    value={passwordForm.confirmPassword}
                                    onChange={(e) => setPasswordForm({
                                        ...passwordForm,
                                        confirmPassword: e.target.value
                                    })}
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordModal(false)}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;