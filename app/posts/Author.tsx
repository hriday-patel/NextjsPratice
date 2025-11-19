const Author = async ({userId}: {userId : number}) => {
    await new Promise((res) => setTimeout(res, 6000));
    const fetchData =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await fetchData.json();
    console.log("Author Rendered for userId:", userId);
  return (
    <div>
        Written by: {" "}
        <span className="font-bold">{user.name}</span>
    </div>
  )
}
export default Author