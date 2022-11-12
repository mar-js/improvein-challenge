import React from 'react'

export interface IChildren {
  children: React.ReactNode
}

export interface IProfile {
  username: string | null;
  email: string | null;
  password?: string | null;
}

export interface IFilters {
  id: number;
  option: string;
  value: string;
}

export interface IParams {
  id: string;
}

export interface IBandP {
  bands: IBand[]
}

export interface IBandD {
  band: IBand
}

export interface INavigation {
  id: number;
  name: string;
  url: string;
}

export interface IBand {
  id: number;
  name: string;
  genreCode: string;
  year: number;
  country: string;
  members: IMember[];
}

export interface IMember {
  name: string;
}
