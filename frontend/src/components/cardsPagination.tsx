"use client"

import usePokemonPagination from "@/hooks/usePokemonPagination"
import CardsList from "./cardsList"
import LimitSelector from "./limitSelector"
import PaginationControls from "./paginationControls"

const CardsPagination = () => {
  const {
    data: pokemonList,
    isLoading,
    isValidating,
    handlePageChange,
    handleLimitChange,
    pageIndex,
    pageLimit,
  } = usePokemonPagination()

  return (
    <section className="flex flex-col w-full max-w-6xl m-auto min-h-screen px-6 xl:px-0 py-6">
      <LimitSelector pageLimit={pageLimit} setPageLimit={handleLimitChange} />
      <CardsList
        pokemonList={pokemonList}
        loading={isLoading || isValidating}
      />
      <PaginationControls
        pageIndex={pageIndex}
        setPageIndex={handlePageChange}
      />
    </section>
  )
}

export default CardsPagination
