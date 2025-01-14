import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormComponent = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        showPassword: false,
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First Name is required.";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
        if (!formData.username) tempErrors.username = "Username is required.";
        if (!formData.email) tempErrors.email = "Email is required.";
        if (!formData.password) tempErrors.password = "Password is required.";
        if (!formData.phoneNo) tempErrors.phoneNo = "Phone Number is required.";
        if (!formData.country) tempErrors.country = "Country is required.";
        if (!formData.city) tempErrors.city = "City is required.";
        if (!formData.panNo) tempErrors.panNo = "PAN Number is required.";
        if (!formData.aadharNo) tempErrors.aadharNo = "Aadhar Number is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            history.push('/success', { formData });
        }
    };

    const toggleShowPassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password</label>
                <input type={formData.showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
                <button type="button" onClick={toggleShowPassword}>{formData.showPassword ? "Hide" : "Show"}</button>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                {errors.phoneNo && <span>{errors.phoneNo}</span>}
            </div>
            <div>
                <label>Country</label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                </select>
                {errors.country && <span>{errors.country}</span>}
            </div>
            <div>
                <label>City</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    {formData.country === "India" && (
                        <>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </>
                    )}
                    {formData.country === "USA" && (
                        <>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                        </>
                    )}
                </select>
                {errors.city && <span>{errors.city}</span>}
            </div>
            <div>
                <label>PAN Number</label>
                <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
                {errors.panNo && <span>{errors.panNo}</span>}
            </div>
            <div>
                <label>Aadhar Number</label>
                <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                {errors.aadharNo && <span>{errors.aadharNo}</span>}
            </div>
            <button type="submit" disabled={!validate()}>Submit</button>
        </form>
    );
};

export default FormComponent;
