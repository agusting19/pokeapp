interface Props {
  pageIndex: number
  setPageIndex: (pageIndex: number) => void
}

const PaginationControls = ({ pageIndex, setPageIndex }: Props) => {
  return (
    <div
      className={`flex gap-4 w-full py-4 ${
        pageIndex > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {pageIndex > 1 && (
        <button
          className="bg-zinc-200 text-zinc-800 font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition"
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          Previous
        </button>
      )}
      <button
        className="bg-zinc-200 text-zinc-800 font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition"
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default PaginationControls
