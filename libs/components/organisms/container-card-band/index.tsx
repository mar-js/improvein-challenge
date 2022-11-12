import { BandItem } from '@components/molecules'
import { handleSearch } from 'helpers/handle-search'
import { useAppSelector } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { Container } from './styles'

export const ContainerCardBand: React.FC = () => {
  const { bands, filter: { order }, search: { search } } = useAppSelector(state => state)
  const [ bandsCopy, setBandsCopy ] = useState(bands)
  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    if (order === 'asc') {
      setLoader(true)

      setBandsCopy([ ...bandsCopy ].sort((a, b) => a.name.normalize().localeCompare(b.name.normalize())))

      setTimeout(() => setLoader(false), 1000)
    }
    if (order === 'des') {
      setLoader(true)

      setBandsCopy([ ...bandsCopy ].sort((a, b) => b.name.normalize().localeCompare(a.name.normalize())))

      setTimeout(() => setLoader(false), 1000)
    }
    if (order === 'year') {
      setLoader(true)

      setBandsCopy([ ...bandsCopy ].sort((a, b) => a.year - b.year))

      setTimeout(() => setLoader(false), 1000)
    }
    if (order === 'default') {
      setLoader(true)

      setBandsCopy([ ...bands ])

      setTimeout(() => setLoader(false), 1000)
    }

    if (search !== '') {
      const SEARCH_BAND = handleSearch(bandsCopy, search)

      setBandsCopy([ SEARCH_BAND ])
    }
  }, [
    bandsCopy,
    bands,
    order,
    search
  ])

  return (
    <Container>
      { loader ? '....' : (
        <>
          { bandsCopy.map(band => (
            <BandItem key={ band.id } { ...band } />
          )) }
        </>
      ) }
    </Container>
  )
}
