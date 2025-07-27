import { IMovieTrending } from '@/types'

export const serdetDataByLastSeen = (
  data: IMovieTrending[],
  lastSeenId: string | null
) => {
  return data.toSorted((a, b) => {
    if (a.Id === lastSeenId) return -1
    if (b.Id === lastSeenId) return 1
    return 0
  })
}
