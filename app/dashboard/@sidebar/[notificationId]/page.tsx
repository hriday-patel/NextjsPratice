const page = async ({
  params,
}: {
  params: Promise<{ notificationId: number }>;
}) => {
  const not = (await params).notificationId;
  return <div>This is alert number {not}</div>;
};
export default page;
