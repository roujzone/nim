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

export default function DhruvPage() {
  return (
    <PersonPage
      body={`Dhruv,\nYou always look out for me, and willing to help at any moment. You have always led your own path in life and I respect and admire that so much.\nThank you for being a big brother to me.`}
      ask="Will you be my groomsman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM5RZRD8ETH9WYM3XA96RMMS.jpg',
          caption: 'ny 2019',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4VYJF78SB4X961N4TM88EJ.jpg',
          caption: 'poconos 2018',
        },
      ]}
    />
  )
}
