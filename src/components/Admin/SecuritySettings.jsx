import React, { useState } from 'react';
import { 
    ClockIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    CameraIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    ArrowPathIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Switch } from '@headlessui/react';

const SecuritySettings = () => {
    const [settings, setSettings] = useState({
        examTimer: true,
        randomizeQuestions: true,
        preventTabSwitch: true,
        requireWebcam: false,
        maxAttempts: 1,
        ipRestriction: false,
        allowedIPs: '',
        browserLock: true,
        timeBuffer: 5
    });

    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

    const handleChange = (setting, value) => {
        setSettings(prev => ({
            ...prev,
            [setting]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated security settings:', settings);
        // Add save logic here
        setShowSaveSuccess(true);
        setTimeout(() => setShowSaveSuccess(false), 3000);
    };

    const SettingToggle = ({ checked, onChange, label, icon: Icon, description }) => (
        <Switch.Group>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex flex-col">
                        <Switch.Label className="font-medium text-gray-900">{label}</Switch.Label>
                        {description && (
                            <span className="text-sm text-gray-500">{description}</span>
                        )}
                    </div>
                </div>
                <Switch
                    checked={checked}
                    onChange={onChange}
                    className={`${
                        checked ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                    <span
                        className={`${
                            checked ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
                    <h1 className="text-3xl font-bold text-gray-900">Security Settings</h1>
                </div>

                {showSaveSuccess && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5" />
                        Settings saved successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <LockClosedIcon className="w-5 h-5 text-blue-600" />
                            Exam Controls
                        </h2>
                        
                        <div className="divide-y divide-gray-200">
                            <SettingToggle
                                checked={settings.examTimer}
                                onChange={(value) => handleChange('examTimer', value)}
                                label="Enable Exam Timer"
                                icon={ClockIcon}
                                description="Enforce time limits for exam completion"
                            />

                            <SettingToggle
                                checked={settings.randomizeQuestions}
                                onChange={(value) => handleChange('randomizeQuestions', value)}
                                label="Randomize Questions"
                                icon={ArrowPathIcon}
                                description="Shuffle questions for each student"
                            />

                            <div className="py-4">
                                <label className="block text-sm font-medium text-gray-700">Maximum Attempts</label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        value={settings.maxAttempts}
                                        onChange={(e) => handleChange('maxAttempts', parseInt(e.target.value))}
                                        min="1"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <CameraIcon className="w-5 h-5 text-blue-600" />
                            Proctoring Settings
                        </h2>
                        
                        <div className="divide-y divide-gray-200">
                            <SettingToggle
                                checked={settings.preventTabSwitch}
                                onChange={(value) => handleChange('preventTabSwitch', value)}
                                label="Prevent Tab Switching"
                                icon={ComputerDesktopIcon}
                                description="Disable switching between browser tabs during exam"
                            />

                            <SettingToggle
                                checked={settings.requireWebcam}
                                onChange={(value) => handleChange('requireWebcam', value)}
                                label="Require Webcam"
                                icon={CameraIcon}
                                description="Enable webcam monitoring during exam"
                            />

                            <SettingToggle
                                checked={settings.browserLock}
                                onChange={(value) => handleChange('browserLock', value)}
                                label="Enable Browser Lock"
                                icon={LockClosedIcon}
                                description="Restrict exam access to secure browser mode"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <GlobeAltIcon className="w-5 h-5 text-blue-600" />
                            Access Control
                        </h2>
                        
                        <div className="divide-y divide-gray-200">
                            <SettingToggle
                                checked={settings.ipRestriction}
                                onChange={(value) => handleChange('ipRestriction', value)}
                                label="Enable IP Restriction"
                                icon={GlobeAltIcon}
                                description="Limit access to specific IP addresses"
                            />

                            {settings.ipRestriction && (
                                <div className="py-4">
                                    <label className="block text-sm font-medium text-gray-700">Allowed IP Addresses</label>
                                    <textarea
                                        value={settings.allowedIPs}
                                        onChange={(e) => handleChange('allowedIPs', e.target.value)}
                                        placeholder="Enter IP addresses (one per line)"
                                        rows="4"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            )}

                            <div className="py-4">
                                <label className="block text-sm font-medium text-gray-700">Time Buffer (minutes)</label>
                                <input
                                    type="number"
                                    value={settings.timeBuffer}
                                    onChange={(e) => handleChange('timeBuffer', parseInt(e.target.value))}
                                    min="0"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SecuritySettings;