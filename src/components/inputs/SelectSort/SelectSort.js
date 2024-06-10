export default function SelectSort({options, onOptionChange}) {
  return (
    <select onChange={(e) => onOptionChange(e)}>
      {options.map(opt => <option>{opt}</option>)}
    </select>
  )
}