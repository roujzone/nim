import PersonPage from '@/components/person-page'

export default function ManuPage() {
  return (
    <PersonPage
      body={`You are one of the realest– loyal and so hardworking. We have too many funny memories of our college days that I wouldn't ever trade.\nThank you for being a sister to me.`}
      ask="Will you be my groomswoman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM6R9J1A519KW0NMFS68V01S.jpg',
          caption: 'orlando 2025',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4TMGMZ33FQ2ZBS201B5T98.jpg',
          caption: 'ucf 2014',
        },
      ]}
    />
  )
}
