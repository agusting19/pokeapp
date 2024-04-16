interface Props {
  pageLimit: number
  setPageLimit: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const LimitSelector = ({ pageLimit, setPageLimit }: Props) => {
  return (
    <div className="flex items-center justify-end gap-2 py-4">
      <p className="text-xl">Page Limits</p>
      <select
        className="bg-zinc-200 text-zinc-800 font-bold py-1 px-4 rounded-lg shadow-lg hover:shadow-xl transition"
        value={pageLimit}
        onChange={(e) => setPageLimit(e)}
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
        <option value={96}>96</option>
      </select>
    </div>
  )
}

export default LimitSelector
