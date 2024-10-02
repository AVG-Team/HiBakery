// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, MenuItem } from '@mui/material';

export default function EditProfile() {
    const [values, setValues] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl); // Update profile image with the uploaded file
        }
    };

    return (
        <div className="container mx-48 p-8 flex justify-center">
            {/* Personal Information */}
            <div className="w-1/2 pr-0">
                <p className="text-4xl font-bold mb-10">Edit Profile</p>

                <h2 className="text-2xl font-bold text-pink-600 mb-4">Personal Information</h2>
                <div className="space-y-8 max-w-80">
                    <TextField
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        fullWidth
                    />
                    <TextField
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        fullWidth
                    />
                    <TextField
                        label="Phone Number"
                        value={values.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                        fullWidth
                    />
                    <TextField
                        select
                        label="Gender"
                        value={values.gender}
                        onChange={handleChange('gender')}
                        fullWidth
                    >
                        <MenuItem value="male" sx={{'&:hover': { backgroundColor: '#ec407a' } }}>Male</MenuItem>
                        <MenuItem value="female" sx={{'&:hover': { backgroundColor: '#ec407a' } }}>Female</MenuItem>
                        <MenuItem value="preferNotToSay" sx={{'&:hover': { backgroundColor: '#ec407a' } }}>I don't want to say</MenuItem>
                    </TextField>
                </div>
            </div>

            {/* Avatar and Password */}
            <div className="w-1/3">
                <div className="relative mb-6 mt-20">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="rounded-full w-36 h-36 object-cover mx-auto"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{display: 'none'}}
                        id="image-upload"
                    />
                    <div className="flex justify-end">
                        <label htmlFor="image-upload">
                            <IconButton component="span"
                                        className="absolute bottom-2 right-2 bg-white p-1 rounded-full">
                                <FaCamera/>
                            </IconButton>
                        </label>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-pink-600 mb-4">Change Password</h2>
                <div className="space-y-6 max-w-96">
                    <TextField
                        label="Password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        fullWidth
                        className="mb-4"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Confirm Password"
                        type={values.showConfirmPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        fullWidth
                        className="mb-4"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowConfirmPassword}>
                                        {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        className="mt-20 bg-pink-500 text-white font-bold py-2 px-4 rounded w-24 hover:bg-pink-600 transition">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
