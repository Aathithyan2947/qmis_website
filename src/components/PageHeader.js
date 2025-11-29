export default function PageHeader({
  contentTitle
}) {
  return <div className="w-full min-h-[20vh] flex justify-center items-center bg-darkBlue-100 text-white">
    <h1 className="text-3xl font-semibold">{contentTitle}</h1>
  </div>
}
