// https://hexo.io/docs/configuration.html
export interface site {
  title?:string,
  subtitle?:string,
  description?:string,
  author?:string,
  language?:string,
  timezone?:string,
  url?:string
  root?:string,
  permalink?:string,
  permalink_defaults?:string,
  source_dir?:string,
  public_dir?:string,
  tag_dir?:string,
  archive_dir?:string,
  category_dir?:string,
  code_dir?:string,
  i18n_dir?:string,
  skip_render?:string,
  new_post_name?:string,
  default_layout?:string,
  titlecase?:boolean,
  external_link?:boolean,
  filename_case?: number,
  render_drafts?: boolean,
  post_asset_folder?: boolean,
  relative_link?: boolean,
  future?: boolean,
  highlight?: {
    enable?: boolean,
    auto_detect?: boolean,
    line_number?: boolean,
    tab_replace?: string
  },
  default_category?:boolean,
  category_map?: string,
  tag_map?: string,
  date_format?: string,
  time_format?: string,
  per_page?: number,
  pagination_dir?: string,
  theme?: string,
  deploy?: any
}