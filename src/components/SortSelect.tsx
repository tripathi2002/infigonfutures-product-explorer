interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border rounded px-3 py-2 w-full md:w-48"
      aria-label="Sort products by price"
    >
      <option value="none">Sort by price</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
    </select>
  );
}
