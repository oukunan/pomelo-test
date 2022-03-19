export type PopularArticleResponse = {
  copyright: string
  num_results: number
  results: Article[]
  status: string
}

export type Article = {
  abstract: string
  asset_id: number
  byline: string
  column: unknown | null
  des_facet: string[]
  geo_facet: string[]
  id: number
  media: {
    approved_for_syndication: number
    caption: string
    copyright: string
    'media-metadata': {
      format: string
      height: number
      url: string
      width: number
    }[]
    subtype: string
    type: string
  }[]
  nytdsection: string
  org_facet: string[]
  per_facet: unknown[]
  published_date: string
  section: string
  source: string
  subsection: string
  title: string
  type: string
  updated: string
  uri: string
  url: string
}
