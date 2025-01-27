import React, { useState } from 'react';
import './SecuritySettings.css';

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
    };

    return (
        <div className="security-settings">
            <h1>Security Settings</h1>

            <form onSubmit={handleSubmit} className="settings-form">
                <div className="settings-section">
                    <h2>Exam Controls</h2>
                    
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.examTimer}
                                onChange={(e) => handleChange('examTimer', e.target.checked)}
                            />
                            Enable Exam Timer
                        </label>
                    </div>

                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.randomizeQuestions}
                                onChange={(e) => handleChange('randomizeQuestions', e.target.checked)}
                            />
                            Randomize Questions
                        </label>
                    </div>

                    <div className="setting-item">
                        <label>Maximum Attempts</label>
                        <input
                            type="number"
                            value={settings.maxAttempts}
                            onChange={(e) => handleChange('maxAttempts', parseInt(e.target.value))}
                            min="1"
                        />
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Proctoring Settings</h2>
                    
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.preventTabSwitch}
                                onChange={(e) => handleChange('preventTabSwitch', e.target.checked)}
                            />
                            Prevent Tab Switching
                        </label>
                    </div>

                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.requireWebcam}
                                onChange={(e) => handleChange('requireWebcam', e.target.checked)}
                            />
                            Require Webcam
                        </label>
                    </div>

                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.browserLock}
                                onChange={(e) => handleChange('browserLock', e.target.checked)}
                            />
                            Enable Browser Lock
                        </label>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Access Control</h2>
                    
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.ipRestriction}
                                onChange={(e) => handleChange('ipRestriction', e.target.checked)}
                            />
                            Enable IP Restriction
                        </label>
                    </div>

                    {settings.ipRestriction && (
                        <div className="setting-item">
                            <label>Allowed IP Addresses</label>
                            <textarea
                                value={settings.allowedIPs}
                                onChange={(e) => handleChange('allowedIPs', e.target.value)}
                                placeholder="Enter IP addresses (one per line)"
                            />
                        </div>
                    )}

                    <div className="setting-item">
                        <label>Time Buffer (minutes)</label>
                        <input
                            type="number"
                            value={settings.timeBuffer}
                            onChange={(e) => handleChange('timeBuffer', parseInt(e.target.value))}
                            min="0"
                        />
                    </div>
                </div>

                <button type="submit" className="save-button">Save Settings</button>
            </form>
        </div>
    );
};

export default SecuritySettings;