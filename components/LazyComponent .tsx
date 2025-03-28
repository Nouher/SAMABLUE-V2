const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyComponent = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  await delay(3000); // Wait for 1 second
  return <div >{children}</div>;
};

export default LazyComponent;