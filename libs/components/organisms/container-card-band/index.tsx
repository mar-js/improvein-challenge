import { useEffect, useState } from 'react'

import { useAppSelector } from '@hooks/redux'

import { handleSearch } from '@helpers/handle-search'
import { handleHydrateDataBand } from '@helpers/handle-hydrate-data-band'

import { BandItem } from '@components/molecules'

import { Container } from './styles'

export const ContainerCardBand: React.FC = () => {
  const { bands, filter: { order }, search: { searchText } } = useAppSelector(state => state)
  const [ bandsCopy, setBandsCopy ] = useState(bands)
  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    setLoader(true)

    setBandsCopy([ ...handleHydrateDataBand(bands, bandsCopy, order) ])

    setTimeout(() => setLoader(false), 1000)

    if (searchText) {
      const SEARCH_BAND = handleSearch(bandsCopy, searchText)

      setBandsCopy(SEARCH_BAND ? [ SEARCH_BAND ] : [])
    }
  }, [
    bands,
    order,
    searchText
  ])

  return (
    <Container>
      { loader ? '....' : (
        <>
          { !bandsCopy || !bandsCopy.length ? 'not band/s' : (
            <>
              { bandsCopy.map(band => (
                <BandItem key={ band.id } { ...band } />
              )) }
            </>
          ) }
        </>
      ) }
    </Container>
  )
}
