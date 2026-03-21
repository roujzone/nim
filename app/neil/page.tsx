import type { Metadata } from 'next'
import PersonPage from '@/components/person-page'

export const metadata: Metadata = {
  title: { absolute: 'Clothing' },
  description: 'New arrivals — view the latest styles.',
  openGraph: {
    title: 'Clothing',
    description: 'New arrivals — view the latest styles.',
  },
}

export default function NeilPage() {
  return (
    <PersonPage
      body={`Neil,\nWe have too many memories of being kids and doing reckless shit together, and I love every single one of those moments.\nThank you for being my brother through all the years together.`}
      ask="Will you be my groomsman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM67PTQHV83C5S5C274CHX9E.jpg',
          caption: 'clermont 2020',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4VQTA6SEJY73M0066RX52P.jpg',
          caption: 'orlando 2014',
        },
      ]}
    />
  )
}
