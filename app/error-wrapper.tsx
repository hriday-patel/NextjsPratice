"use client";

const ErrorSimulator = () => {
  const getRandInt = () => {
    return Math.floor(Math.random() * 2);
  };

  const getError = () => {
    if (getRandInt() === 1) {
      throw new Error("New Error");
    }
  };

  return <button onClick={getError}>Click this button!</button>;
};

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ErrorSimulator />
      {children}
    </div>
  );
};

export default ErrorWrapper;
