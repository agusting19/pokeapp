import { POKEMON_URL, getPokemonList } from "@/services/api"
import { useState } from "react"
import useSWR from "swr"

const usePokemonPagination = (initialPage = 1, limit = 12) => {
  const [pageIndex, setPageIndex] = useState(initialPage)
  const [pageLimit, setPageLimit] = useState(limit)

  const { data, isValidating, error } = useSWR(
    `${POKEMON_URL}?limit=${pageLimit}&page=${pageIndex}`,
    getPokemonList,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  )

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageIndex(1)
    setPageLimit(parseInt(e.target.value))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePageChange = (page: number) => {
    setPageIndex(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isLoading = !data && !error

  return {
    data,
    isLoading,
    isValidating,
    handlePageChange,
    handleLimitChange,
    pageIndex,
    pageLimit,
  }
}

export default usePokemonPagination
