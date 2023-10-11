
import { PrismaClient } from "@prisma/client";

export default function shortIdPage() {
  return <div>Short ID Redirect</div>;
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const { shortId } = params;
  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId },
  });

  if (!data) {
    return { redirect: { destination: "/" } };
  }

  return { redirect: { destination: data.url } };
}