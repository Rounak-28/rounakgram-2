export default function Page({ params }: { params: { id: string } }) {
  return <div className="mx-96">My Post: {params.id}</div>;
}
