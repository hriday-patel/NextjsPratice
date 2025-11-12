
const getRandInt = () => {
  return Math.floor(Math.random() * 2);
};

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  if(getRandInt() === 1){
    throw new Error("Error Occurred");
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default ErrorWrapper;
