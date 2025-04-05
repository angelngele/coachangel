"use client";

import { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        gender: "",
        brandName: "",
        helpNeeded: [] as string[],
        brandStatus: [] as string[],
        referralSource: [] as string[],
        message: "",
        linkedInProfile: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData(prevState => {
            const fieldName = name as keyof typeof prevState;

            if (type === "checkbox") {
                const inputElement = e.target as HTMLInputElement; // Assert e.target to HTMLInputElement

                const values = new Set(prevState[fieldName] as string[]);

                if (inputElement.checked) { // Use inputElement.checked instead of e.target.checked
                    values.add(value);
                } else {
                    values.delete(value);
                }

                return { ...prevState, [fieldName]: Array.from(values) };
            }

            return { ...prevState, [fieldName]: value };
        });

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ""
        }));
    };





    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.gender) newErrors.gender = "Gender selection is required.";
        if (!formData.helpNeeded.length) newErrors.helpNeeded = "Select at least one option.";
        if (!formData.brandStatus.length) newErrors.brandStatus = "Select at least one option.";
        if (!formData.referralSource.length) newErrors.referralSource = "Select at least one option.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns false if errors exist
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResponseMessage("");
        setErrors({});

        if (!validateForm()) return; // Stop submission if validation fails

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json(); // Parse the JSON response

            if (!response.ok) {
                // Extract error message properly
                const errorMessage = result.error || result.message || "Something went wrong. Please try again.";
                setResponseMessage(`❌ ${errorMessage}`); // Set only the extracted error message
            } else {
                setResponseMessage("🎉 Registration successful!");
                setFormData({
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    gender: "",
                    brandName: "",
                    helpNeeded: [],
                    brandStatus: [],
                    referralSource: [],
                    message: "",
                    linkedInProfile: ""
                });
            }
        } catch (error) {
            setResponseMessage(`❌ ${error}`);
        }

        setLoading(false);
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-20 form-container form-box">
                <h2 className="text-center text-2xl font-bold text-green-500 mb-6 form-title">Let&#39;s Talk</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className=" block text-black">
                        First Name
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required className="border p-2 w-full rounded-lg form-input" />
                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </label>

                    <label className=" block text-black">
                        Middle Name
                        <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} placeholder="Middle Name" className="border p-2 w-full rounded-lg form-input" />
                    </label>

                    <label className=" block text-black">
                        Last Name
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required className="border p-2 w-full rounded-lg form-input" />
                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    </label>

                    <label className=" block text-black">
                        Gender
                        <select name="gender" value={formData.gender} onChange={handleInputChange} required className="border p-2 w-full rounded-lg form-input">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                    </label>

                    <label className=" block text-black">
                        Brand Name
                        <input type="text" name="brandName" value={formData.brandName} onChange={handleInputChange} placeholder="Brand Name" className="border p-2 w-full rounded-lg form-input" />
                    </label>

                    <fieldset className="bg-gray-100 p-4 rounded-lg">
                        <legend className="font-semibold text-black">What do you need my help with? (Required)</legend>
                        {["Linkedin Coaching", "Speaker at event", "Sponsorship", "B2B Advisory", "Strategy", "Writing"].map(option => (
                            <label key={option} className=" block text-black">
                                <input type="checkbox" name="helpNeeded" value={option} checked={formData.helpNeeded.includes(option)} onChange={handleInputChange} className="mr-2" />
                                {option}
                            </label>
                        ))}
                        {errors.helpNeeded && <p className="text-red-500">{errors.helpNeeded}</p>}
                    </fieldset>

                    <fieldset className="bg-gray-100 p-4 rounded-lg">
                        <legend className="font-semibold text-black">How would you describe your brand? (Required)</legend>
                        {["New Brand", "Established Business", "Growing Startup", "Freelancer", "Corporate Entity"].map(option => (
                            <label key={option} className=" block text-black">
                                <input type="checkbox" name="brandStatus" value={option} checked={formData.brandStatus.includes(option)} onChange={handleInputChange} className="mr-2" />
                                {option}
                            </label>
                        ))}
                        {errors.brandStatus && <p className="text-red-500">{errors.brandStatus}</p>}
                    </fieldset>

                    <label className=" block text-black">
                        Message
                        <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="border p-2 w-full rounded-lg form-input" />
                    </label>

                    <label className=" block text-black">
                        Email
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="border p-2 w-full rounded-lg form-input" />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </label>

                    <label className=" block text-black">
                        LinkedIn Profile
                        <input type="text" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleInputChange} placeholder="LinkedIn Profile" className="border p-2 w-full rounded-lg form-input" />
                    </label>

                    <fieldset className="bg-gray-100 p-4 rounded-lg">
                        <legend className="font-semibold text-black">How did you hear about me? (Required)</legend>
                        {["LinkedIn", "Twitter", "Facebook", "Word of Mouth", "Other"].map(option => (
                            <label key={option} className=" block text-black">
                                <input type="checkbox" name="referralSource" value={option} checked={formData.referralSource.includes(option)} onChange={handleInputChange} className="mr-2" />
                                {option}
                            </label>
                        ))}
                        {errors.referralSource && <p className="text-red-500">{errors.referralSource}</p>}
                    </fieldset>

                    <button type="submit" disabled={loading} className="bg-green-500 text-white p-3 w-full rounded-lg font-bold hover:bg-green-600 transition ease-in-out form-button">
                        {loading ? "Submitting..." : "Register"}
                    </button>

                    {responseMessage && (
                        <p className={`text-center mt-4 font-medium ${responseMessage.includes("❌") ? "text-red-500" : "text-green-500"}`}>
                            {responseMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );

}