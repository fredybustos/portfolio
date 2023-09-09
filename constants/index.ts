import { MarkdownToJSX } from "markdown-to-jsx";

export const MARK_OPTIONS: MarkdownToJSX.Options = {
  wrapper: 'article',
  overrides: {
    pre: {
      props: {
        className: 'markdown-pre',
      },
    },
    p: {
      props: {
        className: 'markdown-p',
      },
    },
    li: {
      props: {
        className: 'markdown-li',
      }
    }
  }
}