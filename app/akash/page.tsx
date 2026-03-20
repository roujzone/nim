import PersonPage from '@/components/person-page'

export default function AkashPage() {
  return (
    <PersonPage
      body={`We have had too many laughs and vichaars over the years, and you always hold it down for me and everyone.\nThank you for being a big brother for more than half my life.`}
      ask="Will you be my groomsman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM5TW9XB8546PE1Z179MTMVB.jpg',
          caption: 'downtown 2016',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4V3FZKCN631WXDJ0W415T1.jpg',
          caption: 'sanford 2013',
        },
      ]}
    />
  )
}
