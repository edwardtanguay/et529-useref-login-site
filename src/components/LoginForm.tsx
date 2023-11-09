import { useState } from 'react';

const initialFormData = {
	login: '',
	password: ''
}

export const LoginForm = () => {
	const [formData, setFormData] = useState(initialFormData);

	const handleFieldLogin = (value: string) => {
		const _formData = structuredClone(formData);
		_formData.login = value;
		setFormData(_formData);
	}

	const handleFieldPassword = (value: string) => {
		const _formData = structuredClone(formData);
		_formData.password = value;
		setFormData(_formData);
	}

	const handleFormSubmit = () => {
		alert(JSON.stringify(formData, null, 2));
	}

	return (
		<fieldset
			className="border border-gray-500 p-4 w-full rounded"
		>
			<legend>Welcome</legend>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="login">
				Login:
				</label>
				<input
					type="text"
					value={formData.login}
					onChange = {(e) => handleFieldLogin(e.target.value)}
					id="login"
				/>
			</div>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="password">
				Password:
				</label>
				<input
					type="password"
					value={formData.password}
					onChange = {(e) => handleFieldPassword(e.target.value)}
					id="password"
				/>
			</div>

			<div className="mt-5 flex justify-end pr-3">
				<button onClick={handleFormSubmit}>Time to run!</button>
			</div>
		</fieldset>
	);
};
