const page = async () => {
  return await new Promise((res) => {
    setTimeout(() => {
      res(<div>Hello!</div>);
    }, 5000);
  });
};
export default page;
