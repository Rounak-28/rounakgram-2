export default function Page({ params }: { params: { id: string } }) {
  return <div className="mx-96">My user: {params.id}</div>;
}
