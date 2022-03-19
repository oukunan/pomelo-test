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

export type SingeArticleResponse = {
  copyright: string
  response: {
    docs: {
      abstract: string
      byline: {
        organization: unknown | null
        original: string
        person: {
          firstname: string
          lastname: string
          middlename: unknown | null
          organization: string
          qualifier: unknown | null
          rank: number
          role: string
          title: unknown | null
        }[]
      }
      document_type: string
      headline: {
        content_kicker: unknown | null
        kicker: unknown | null
        main: string
        name: unknown | null
        print_headline: unknown | null
        seo: unknown | null
        sub: unknown | null
      }
      keywords: {
        major: string
        name: string
        rank: number
        value: string
      }[]
      lead_paragraph: string
      multimedia: any[]
      news_desk: string
      pub_date: string
      section_name: string
      snippet: string
      source: string
      subsection_name: string
      type_of_material: string
      uri: string
      web_url: string
      word_count: number
      _id: string
    }[]
    meta: { hits: number; offset: number; time: number }
  }
  status: string
}
