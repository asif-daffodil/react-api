import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: async (formData) => {
            await axios.post('http://127.0.0.1:8000/api/register', formData);
        },
        onSuccess: () => {
            toast.success('Account created successfully');
            reset();
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });
    const onSubmit = data => {
        mutation.mutate(data);
    };
    return (
        <div className="font-[sans-serif] p-4 mt-6">
            <ToastContainer />
            <div className="flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
                    <div className="bg-white w-24 h-24 border-[8px] p-4 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden">
                        <a href="#"><img
                            src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className='w-full inline-block' />
                        </a>
                    </div>

                    <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-xl font-bold text-blue-600 mb-6 text-center">Create free account</h3>
                        <div className="space-y-4">
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                                regex: {
                                    value: /^[a-zA-Z. ]*$/,
                                    message: "Name should contain only alphabets"
                                }
                            })} type="text" className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter name" />
                            {errors.name && <p className="text-red-500 text-xs mt-[-12px]">{errors.name.message}</p>}
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                isEmail: {
                                    value: true,
                                    message: "Email is invalid"
                                }
                            })} type="text" className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter email" />
                            {errors.email && <p className="text-red-500 text-xs mt-[-12px]">{errors.email.message}</p>}
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password should be atleast 6 characters"
                                }
                            })} type="password" id="password" className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter password" />
                            {errors.password && <p className="text-red-500 text-xs mt-[-12px]">{errors.password.message}</p>}
                            <input {...register("password_confirmation", {
                                required: {
                                    value: true,
                                    message: "Confirm password is required"
                                },
                                validate: value => value === document.getElementById('password').value || "Passwords do not match"
                            })} type="password" className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3 focus:bg-transparent border border-gray-100 focus:border-black outline-none transition-all" placeholder="Enter confirm password" />
                            {errors.password_confirmation && <p className="text-red-500 text-xs mt-[-12px]">{errors.password_confirmation.message}</p>}
                            <div className="flex items-center">
                                <input id="remember-me" {...register("accept", {
                                    required: {
                                        value: true,
                                        message: "Accept terms and conditions"
                                    }
                                })} type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                    I accept the <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>
                            </div>
                                {errors.accept && <p className="text-red-500 text-xs mt-[-12px]">{errors.accept.message}</p>}
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide text-white bg-black hover:bg-[#111] focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center text-gray-800">Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;