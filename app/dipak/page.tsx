import PersonPage from '@/components/person-page'

export default function DipakPage() {
  return (
    <PersonPage
      body={`You've always been driven, and self-made. I admire everything you do for yourself and fam– I hope I can emulate that same sense of self in life.\nThank you for being a big brother and always guiding me.`}
      ask="Will you be my groomsman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM5T4C2CBC71G8TKA5SXZBGE.jpg',
          caption: 'gatlinburg 2016',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4TVFFCR34AXQ3V5MKWYHBD.jpg',
          caption: 'downtown orl 2015',
        },
      ]}
    />
  )
}
