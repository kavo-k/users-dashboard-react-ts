export type User = {
  name: string
  description: string
  profileImage: string
  id: string
  isFollowed: boolean
  followersCount: number
}

export type ApiUser = {
  id: number
  name: string
  username: string
  email: string
}