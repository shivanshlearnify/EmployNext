import React from 'react'
import DetailedSearch from '../components/DetailedSearch'
import Reviwes from '../components/Reviwes'
import Premium from '../components/Premium'
import Subscribe from '../components/Subscribe'

const SearchForJob = () => {
  return (
    <div>
        <DetailedSearch/>
        <Reviwes/>
        <Premium/>
        <Subscribe/>
    </div>
  )
}

export default SearchForJob