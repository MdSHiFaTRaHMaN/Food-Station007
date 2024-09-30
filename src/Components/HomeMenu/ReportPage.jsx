import { useState } from 'react';

const ReportPage = () => {
    // State to hold form inputs and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        issueType: 'Bug',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation for empty fields
        if (!formData.name || !formData.email || !formData.description) {
            setError('Please fill in all required fields.');
            return;
        }

        // Submit the form (for now, just simulate submission)
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setError('');

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            issueType: 'Bug',
            description: '',
        });
    };

    return (
        <div className="w-full mt-[72px] max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-md">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Report an Issue</h1>

            {/* Display success message */}
            {submitted && (
                <div className="text-green-600 bg-green-100 p-4 rounded-md mb-4">
                    Thank you! Your report has been submitted successfully.
                </div>
            )}

            {/* Display error message */}
            {error && (
                <div className="text-red-600 bg-red-100 p-4 rounded-md mb-4">
                    {error}
                </div>
            )}

            {/* Report Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Issue Type Dropdown */}
                <div>
                    <label htmlFor="issueType" className="block text-lg font-medium text-gray-700">Issue Type</label>
                    <select
                        id="issueType"
                        name="issueType"
                        value={formData.issueType}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Bug">Bug</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Account Issue">Account Issue</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Description Field */}
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Describe the issue you're facing or the feature you'd like to see."
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Report
                </button>
            </form>
        </div>
    );
};

export default ReportPage;
