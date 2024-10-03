// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { IconButton, InputAdornment, TextField, MenuItem } from '@mui/material';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

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
    const {width} = useWindowSize();

    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleClickShowConfirmPassword = () => {
        setValues({...values, showConfirmPassword: !values.showConfirmPassword});
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const gridStyle =
        width < 768 // Kiểm tra nếu kích thước màn hình nhỏ hơn 768px (mobile)
            ? {
                gridTemplateAreas: `
                    'avatar'
                    'personalInfo'
                    'changePassword'
                  `,
                gridTemplateColumns: '1fr',
            }
            : {
                gridTemplateAreas: `
                    'personalInfo avatar'
                    'changePassword avatar'
                  `,
                gridTemplateColumns: '1fr 1fr',
            };

    return (
        <div className="mt-20">
            <div className="container mx-auto md:mx-40 p-4 md:p-8 mb-0">
                <p className="text-4xl font-bold">Edit Profile</p>
            </div>

            <div
                className="container w-full mx-auto p-4 md:p-8 grid gap-10 justify-center items-start"
                style={gridStyle} // Áp dụng style đã xác định
            >
                {/* Personal Information */}
                <div className="w-full flex justify-center items-center" style={{gridArea: 'personalInfo'}}>
                    <div className="space-y-8 max-w-[24rem] mx-auto">
                        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-start">Personal Information</h2>
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
                            <MenuItem value="male" sx={{'&:hover': {backgroundColor: '#ec407a'}}}>Male</MenuItem>
                            <MenuItem value="female"
                                      sx={{'&:hover': {backgroundColor: '#ec407a'}}}>Female</MenuItem>
                            <MenuItem value="preferNotToSay" sx={{'&:hover': {backgroundColor: '#ec407a'}}}>I don't
                                want to say</MenuItem>
                        </TextField>
                    </div>
                </div>

                <div>
                    {/* Avatar Section */}
                    <div className="flex flex-col items-center mb-6 md:mb-0" style={{gridArea: 'avatar'}}>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="rounded-full w-28 h-28 md:w-36 md:h-36 object-cover mb-4"
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
                                <IconButton component="span" className="bg-white p-1 rounded-full">
                                    <FontAwesomeIcon icon={faCamera} />
                                </IconButton>
                            </label>
                        </div>
                    </div>

                    {/* Change Password Section */}
                    <div className={`w-full flex flex-col ${width < 768 ? 'hidden' : ''}`}
                         style={{gridArea: 'changePassword'}}>
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
                                                {values.showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
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
                                                {values.showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="mt-5 bg-pink-500 text-white font-bold py-2 px-10 rounded w-auto text-center">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex flex-col ${width > 768 ? 'hidden' : ''}`}
                     style={{gridArea: 'changePassword'}}>
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
                                            {values.showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
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
                                            {values.showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="mt-5 md:mt-96 bg-pink-500 text-white font-bold py-2 px-10 rounded w-auto text-center">
                            Save
                        </button>
                    </div>
                </div>


            </div>
        </div>


    )
        ;
}