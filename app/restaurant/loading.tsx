import spinner from '../icons/spinner.png'


export default function loading() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <img src={spinner} alt="loading" />
    </div>
  )
}
