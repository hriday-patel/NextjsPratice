


const getRandInt = (count : number) => {
        return Math.floor(Math.random() * count );
}


const page = () => {

    const num = getRandInt(2);
    if(num === 1){
        throw new Error("Whooooooooo!")
    }

  return (
    <div>page</div>
  )
}
export default page