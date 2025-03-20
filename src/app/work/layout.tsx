export default function Work( {
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="max-w-xl w-full mt-10 p-8 flex flex-col">
            <h1 className='font-bold text-start pb-3'>
                Works
                </h1>
      <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
        {children}
      </div>
      </div>
    </div>
  )
}
