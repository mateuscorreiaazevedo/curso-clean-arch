import { Helmet } from 'react-helmet'

type HeadProps = {
  title: string
}

export function Head({ title }: HeadProps) {
  return (
    <Helmet>
      <title>{title} - Curso Clean Arch</title>
    </Helmet>
  )
}
