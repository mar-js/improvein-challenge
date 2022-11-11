import { IBand } from '@assets/interfaces'

export const getBands = async (params?: string): Promise<IBand[] | IBand | [] | void> => {
  try {
    const RESPONSE = await fetch(`${process.env.URL}/${params}`)

    if (RESPONSE.ok) {
      const DATA: IBand[] | IBand = await RESPONSE.json()

      return DATA
    }

    return []
  } catch (error) {
    return console.error('ERROR: ', error)
  }
}
