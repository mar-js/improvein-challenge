import { BandItem } from '@components/molecules'
import { handleSearch } from 'helpers/handle-search'
import { handleHydrateDataBand } from 'helpers/handle-sort'
import { useAppSelector } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { Container } from './styles'

export const ContainerCardBand: React.FC = () => {
  const { bands, filter: { order }, search: { search } } = useAppSelector(state => state)
  const [ bandsCopy, setBandsCopy ] = useState(bands)
  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    setLoader(true)

    setBandsCopy([ ...handleHydrateDataBand(bands, bandsCopy, order) ])

    setTimeout(() => setLoader(false), 1000)

    if (search !== '') {
      const SEARCH_BAND = handleSearch(bandsCopy, search)
      console.log('aaaaaa', SEARCH_BAND)
      setBandsCopy([ SEARCH_BAND ])
    }
  }, [
    bands,
    order,
    search
  ])

  return (
    <Container>
      { loader ? '....' : (
        <>
          { !bandsCopy ? 'not band/s' : (
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
