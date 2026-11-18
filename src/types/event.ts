export type Category = 'Music' | 'Tech' | 'Nightlife' | 'Food' | 'Sports' | 'Art'

export type EventItem = {
  id: number
  title: string
  category: Category
  date: string 
  location: string
  price: number 
  tags: string[]
  image: string
}