import React, { useState } from 'react'
import CategoriesFilter from './category-filter'
import TagFilter from './tag-filter'
import SearchBox from './search-box'

export type FilterState = {
  categories: string[]
  tags: string[]
  searchQuery: string
}

type FilterManagementProps = {
  onFilterChange: (filters: FilterState) => void
}

const FilterManagement: React.FC<FilterManagementProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    tags: [],
    searchQuery: '',
  })

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className='flex items-center gap-2 self-stretch'>
      <CategoriesFilter
        value={filters.categories}
        onChange={categories => updateFilters({ categories })}
      />
      <TagFilter
        value={filters.tags}
        onChange={tags => updateFilters({ tags })}
      />
      <SearchBox
        searchQuery={filters.searchQuery}
        onChange={searchQuery => updateFilters({ searchQuery })}
      />
    </div>
  )
}

export default FilterManagement