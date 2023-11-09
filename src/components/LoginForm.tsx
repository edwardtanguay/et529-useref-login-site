import { useState, useEffect } from "react";

const initialFormData = {
	login: "",
	password: "",
};
const initialLegend = "Welcome";

const user = {
	login: "jim",
	password: "111",
};

export const LoginForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [legend, setLegend] = useState(initialLegend);
	const [legendColor, setLegendColor] = useState("black");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		let _legendColor = "";
		if (legend === initialLegend) {
			_legendColor = "black";
		} else {
			_legendColor = "red";
		}
		if (errorMessage === "") {
			setLegend(initialLegend);
		} else {
			setLegend(errorMessage);
		}
		setLegendColor(_legendColor);
	}, [errorMessage, legend]);

	const handleFieldLogin = (value: string) => {
		const _formData = structuredClone(formData);
		_formData.login = value;
		setErrorMessage('')
		setFormData(_formData);
	};

	const handleFieldPassword = (value: string) => {
		const _formData = structuredClone(formData);
		_formData.password = value;
		setErrorMessage('')
		setFormData(_formData);
	};

	const handleFormSubmit = () => {
		if (formData.login != user.login) {
			setErrorMessage("Login is not correct");
		}
	};

	return (
		<fieldset className="border border-gray-500 p-4 w-full rounded">
			<legend style={{color: legendColor}}>{legend}</legend>

			<div className="mb-4 flex gap-2">
				<label className="w-[5rem]" htmlFor="login">
					Login:
				</label>
				<input
					type="text"
					autoFocus
					value={formData.login}
					onChange={(e) => handleFieldLogin(e.target.value)}
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
					onChange={(e) => handleFieldPassword(e.target.value)}
					id="password"
				/>
			</div>

			<div className="mt-5 flex justify-end pr-3">
				<button onClick={handleFormSubmit}>Time to run!</button>
			</div>
		</fieldset>
	);
};
