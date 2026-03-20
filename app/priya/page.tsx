import PersonPage from '@/components/person-page'

export default function PriyaPage() {
  return (
    <PersonPage
      body={`Priya,\nEveryone knows you are that sister that can take care of anything. You are truly a role model and I hope I can handle things as easy as you do in life.\nThank you for always being an older sister to me.`}
      ask="Will you be my groomswoman?"
      photos={[
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM6RK53NRD8VMAB8BJFW74XC.png',
          caption: 'orlando 2025',
        },
        {
          src: 'https://workers.paper.design/file-assets/01KM4S7JDVX92VNVFZ82H4XPNG/01KM4T8QAG6AP040N0RYZT5YHW.jpg',
          caption: 'tampa 2014',
        },
      ]}
    />
  )
}
