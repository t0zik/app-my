
export default function Description({text1, text2}:any) {
  return (
    <div className="text-lg font-normal w-[80%] mx-auto text-center">
        <p className="mb-2 ">{text1}</p>
        <p>{text2}</p>
    </div>
  )
}
