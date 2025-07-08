'use client'

import Button from '@/components/Button';
import { packages, sourceOptions, industries } from '@/constants';
import React, { useState } from 'react';

export default function BookingForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        company: '',
        industry: '',
        package: '',
        price: '',
        source: '',
        businessInterests: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'package') {
            setFormData(prev => ({ ...prev, price: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Thank you for your interest! Our team will contact you soon to discuss your business exploration tour.");
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    email: '',
                    company: '',
                    industry: '',
                    package: '',
                    price: '',
                    source: '',
                    businessInterests: ''
                });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Oops! Something went wrong. Please try again or contact us directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 pt-32">
            <div className="max-w-4xl mx-auto">
                <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Turkey Biz Beyond Borders Booking Form</h2>
                    <p className="text-center text-gray-600 mb-8">Join us for an exclusive business exploration tour to Turkey. Please complete the form below to secure your spot.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Company Field */}
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name *</label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Industry Field */}
                            <div>
                                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry *</label>
                                <select
                                    name="industry"
                                    id="industry"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select your industry</option>
                                    {industries.map((industry) => (
                                        <option key={industry} value={industry}>
                                            {industry}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Package Field */}
                            <div>
                                <label htmlFor="package" className="block text-sm font-medium text-gray-700">Package *</label>
                                <select
                                    name="package"
                                    id="package"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.package}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a package</option>
                                    <option value="Early Bird Package">Early Bird Package (USD $2,700.00)</option>
                                    <option value="Regular Package">Regular Package (USD $2,750.00)</option>
                                </select>
                            </div>

                            {/* Source Field */}
                            <div>
                                <label htmlFor="source" className="block text-sm font-medium text-gray-700">How did you hear about us? *</label>
                                <select
                                    name="source"
                                    id="source"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.source}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select source</option>
                                    {sourceOptions.map((source) => (
                                        <option key={source.value} value={source.value}>
                                            {source.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Business Interests Field */}
                            <div className="sm:col-span-2">
                                <label htmlFor="businessInterests" className="block text-sm font-medium text-gray-700">
                                    Business Interests & Goals for Turkey Tour
                                </label>
                                <textarea
                                    name="businessInterests"
                                    id="businessInterests"
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Please describe your business interests, what you hope to achieve from this tour, and any specific manufacturers or products you're interested in exploring..."
                                    value={formData.businessInterests}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-2">Tour Details:</h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Dates: September 9-15, 2025 (6 Days / 5 Nights)</li>
                                <li>• Destinations: Istanbul, Bursa, Kocaeli</li>
                                <li>• Early Bird Deadline: July 31st, 2025</li>
                                <li>• Final Registration Deadline: August 25th, 2025</li>
                                <li>• Limited to 25 participants</li>
                            </ul>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                title={loading ? "Submitting..." : "Submit Booking Request"}
                                variant="btn_orange"
                                disabled={loading}
                            />
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>Questions? Contact us at:</p>
                        <p>Email: info@bonvastours.com | Phone: +233 261 671 686</p>
                    </div>
                </div>
            </div>
        </div>
    );
}