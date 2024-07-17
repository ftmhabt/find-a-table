import spinner from '../icons/spinner.png'
import Image from 'next/image'


export default function loading() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Image src={spinner} alt='loading' />
    </div>
  )
}
