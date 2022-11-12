import { IBand } from '@assets/interfaces'

export const handleHydrateDataBand = (obj: IBand[], objCopy: IBand[], order?: string): IBand[] => {

  if (order === 'asc') return objCopy.sort((a, b) => a.name.normalize().localeCompare(b.name.normalize()))
  if (order === 'des') return objCopy.sort((a, b) => b.name.normalize().localeCompare(a.name.normalize()))
  if (order === 'year') return objCopy.sort((a, b) => a.year + b.year)

  return obj
}
