import PersonPage from '@/components/person-page'

export default function KunalPage() {
  return (
    <PersonPage
      body={`Kunal,\nNot once do you ever second guess stepping in to help any of your friends. I always hope to be as kind and giving as you in this life.\nThank you for being a big brother to me.`}
      ask="Will you be my groomsman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM5SS4RR2WY3HK7VJH08BGGX.jpg',
          caption: 'orlando 2015',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4VE3Y4SV0M0M97VRWZZVMB.jpg',
          caption: 'orlando 2025',
        },
      ]}
    />
  )
}
