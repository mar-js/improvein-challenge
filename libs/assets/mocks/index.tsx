import {
  IBand,
  INavigation,
  IProfile
} from '@assets/interfaces'

export const DATA_BAND: IBand = {
  id: 1,
  name: 'Kiss',
  genreCode: 'hard-rock',
  year: 1973,
  country: 'United States',
  members: [
    { name: 'Paul Stanley' },
    { name: 'Gene Simmons' },
    { name: 'Ace Frehley' },
    { name: 'Peter Criss' }
  ]
}

export const DATA_NAVIGATION: INavigation[] = [
  {
    id: 1,
    name: 'Profile',
    url: '/profile'
  }
]

export const DATA_FECH_BANDS: IBand[] = [
  {
    id: 1,
    name: 'Kiss',
    genreCode: 'hard-rock',
    year: 1973,
    country: 'United States',
    members: [
      { name: 'Paul Stanley' },
      { name: 'Gene Simmons' },
      { name: 'Ace Frehley' },
      { name: 'Peter Criss' }
    ]
  },
  {
    id: 2,
    name: 'Aerosmith',
    genreCode: 'hard-rock',
    year: 1970,
    country: 'United States',
    members: [
      { name: 'Steven Tyler' },
      { name: 'Tom Hamilton' },
      { name: 'Joe Perry' },
      { name: 'Brad Whitford' },
      { name: 'Joey Kramer' }
    ]
  },
  {
    id: 3,
    name: 'The Beatles',
    genreCode: 'rock-roll',
    year: 1960,
    country: 'United Kingdom',
    members: [
      { name: 'John Lennon' },
      { name: 'Paul McCartney' },
      { name: 'George Harrison' },
      { name: 'Ringo Starr' }
    ]
  },
  {
    id: 4,
    name: 'Angra',
    genreCode: 'power-metal',
    year: 1991,
    country: 'Brazil',
    members: [
      { name: 'Andre Matos' },
      { name: 'Rafael Bittencourt' },
      { name: 'Kiko Loureiro' },
      { name: 'Luís Mariutti' },
      { name: 'Ricardo Confessori' }
    ]
  },
  {
    id: 5,
    name: 'Metallica',
    genreCode: 'heavy-metal',
    year: 1981,
    country: 'United States',
    members: [
      { name: 'James Hetfield' },
      { name: 'Lars Ulrich' },
      { name: 'Kirk Hammett' },
      { name: 'Robert Trujillo' }
    ]
  },
  {
    id: 6,
    name: 'Iron Maiden',
    genreCode: 'heavy-metal',
    year: 1975,
    country: 'United Kingdom',
    members: [
      { name: 'Bruce Dickinson' },
      { name: 'Steve Harris' },
      { name: 'Dave Murray' },
      { name: 'Adrian Smith' },
      { name: 'Nicko McBrain' },
      { name: 'Janick Gers' }
    ]
  },
  {
    id: 7,
    name: 'Cradle of Filth',
    genreCode: 'black-metal',
    year: 1991,
    country: 'United Kingdom',
    members: [
      { name: 'Dani Filth' },
      { name: "Martin 'Marthus' Škaroupka" },
      { name: 'Daniel Firth' },
      { name: 'Richard Shaw' },
      { name: "Marek 'Ashok' Šmerda" }
    ]
  },
  {
    id: 8,
    name: 'Within Temptation',
    genreCode: 'goth-metal',
    year: 1996,
    country: 'Netherlands',
    members: [
      { name: 'Sharon den Adel' },
      { name: 'Jeroen van Veen' },
      { name: 'Ruud Jolie' },
      { name: 'Martijn Spierenburg' },
      { name: 'Mike Coolen' },
      { name: 'Stefan Helleblad' }
    ]
  },
  {
    id: 9,
    name: 'Queen',
    genreCode: 'rock',
    year: 1970,
    country: 'United Kingdom',
    members: [
      { name: 'Freddie Mercury' },
      { name: 'Brian May' },
      { name: 'Roger Taylor' },
      { name: 'John Deacon' }
    ]
  },
  {
    id: 10,
    name: 'Pearl Jam',
    genreCode: 'grunge',
    year: 1990,
    country: 'United States',
    members: [
      { name: 'Eddie Vedder' },
      { name: 'Mike McCready' },
      { name: 'Stone Gossard' },
      { name: 'Jeff Ament' },
      { name: 'Matt Cameron' }
    ]
  },
  {
    id: 11,
    name: 'Rhapsody of Fire',
    genreCode: 'power-metal',
    year: 1995,
    country: 'Italy',
    members: [
      { name: 'Luca Turilli' },
      { name: 'Fabio Lione' },
      { name: 'Patrice Guers' },
      { name: 'Alex Staropoli' },
      { name: 'Alex Holzwarth' }
    ]
  },
  {
    id: 12,
    name: 'Dream Theater',
    genreCode: 'progressive-metal',
    year: 1985,
    country: 'United States',
    members: [
      { name: 'John Petrucci' },
      { name: 'John Myung' },
      { name: 'James LaBrie' },
      { name: 'Jordan Rudess' },
      { name: 'Mike Portnoy' }
    ]
  }
]

export const DATA_PROFILE_FULL: IProfile = {
  username: 'Pedro',
  email: 'admin@admin.com'
}
