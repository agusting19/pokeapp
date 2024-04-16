export interface PokemonListResponse {
  ok: boolean
  data: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonUtilInfoResponse {
  ok: boolean
  data: PokemonUtilInfo
}

export interface PokemonUtilInfo {
  name: string
  id: number
  types: Type[]
  image: string
  stats: Stat[]
}

export interface PokemonInfoResponse {
  ok: boolean
  data: PokemonInfo
}

export interface PokemonInfo {
  abilities: Ability[]
  base_experience: number
  height: number
  weight: number
  name: string
  image: string
  types: Type[]
  stats: Stat[]
  forms: Form[]
  baseExperience: number
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface Form {
  name: string
  url: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}
