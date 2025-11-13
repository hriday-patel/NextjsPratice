const layout = ({children, sidebar, maincontent, ads}: {children: React.ReactNode,sidebar: React.ReactNode,maincontent: React.ReactNode,ads: React.ReactNode}) => {
  return (
    <div className="container h-[500px] p-4 grid grid-cols-4 border m-auto mt-10 gap-5">
        <div className="col-span-1 h-full border p-2">{sidebar}</div>
        <div className="col-span-2 h-full grid-rows-2">
            <div className="row-span-1 p-2 border h-1/2">{maincontent}</div>
            <div className="row-span-1 p-2">{children}</div>
        </div>
        <div className="col-span-1 h-full border p-2">{ads}</div>
    </div>
  )
}
export default layout