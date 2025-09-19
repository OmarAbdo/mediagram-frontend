
type DropDownOption = {
    value: number;
    label: string;
}

type DropDownUiProps = {
    options: DropDownOption[];
    value: number;
    onChange: (value: number) => void;
}

export const DropDownUi = ({ options, value, onChange }: DropDownUiProps) => {
    return <>
        Favorite Color
        <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </>;
}