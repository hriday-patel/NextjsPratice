const Component = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div>
          <h1>This is a lazy loaded component!</h1>
        </div>
      )
    }, 3000)
  })
}
export default Component