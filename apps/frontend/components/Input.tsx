import { Input } from "@mantine/core";

interface InputProps {
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
}

const InputComponent = ({ value, onChange, placeholder }: InputProps) => {
	return (
		<div>
			<Input
				placeholder={placeholder}
				radius="lg"
				styles={(theme) => ({
					input: {
						"&:focus-within": {
							borderColor: theme.colors.secondary[0],
						},
						borderColor: theme.colors.secondary[0],
					},
				})}
			/>
		</div>
	);
};

export default InputComponent;
