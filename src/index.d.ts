export as namespace Countries

declare namespace Countries {
  function Name(
    code: CountryCode,
    type?: NameVariant,
    defaultValue?: string
  ): string
  function Prefix(code: CountryCode, defaultValue?: string): string
  function Currency(code: CountryCode, defaultValue?: string): string
  function asArray(func: (options: Options) => any): any[]
}

import { rawCountriesData } from './world/rawCountriesData'

type CountryCode = keyof typeof rawCountriesData
type NameVariant = 'full' | 'native' | 'short'
type Options = {
  code: string
  short: string
  full: string
  native: string
  prefix: string
  currency: string
  dir: string
  isEU: boolean | undefined
}
