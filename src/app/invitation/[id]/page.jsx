// pages/invite/[id].js
import { useRouter } from "next/router";
import { getGuestById, getWeddingData } from "../../lib/data";

export async function getStaticPaths() {
  // generate path dari data tamu
  const guests = await getAllGuests();
  return {
    paths: guests.map(g => ({ params: { id: g.id } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const guest = await getGuestById(params.id);
  const wedding = await getWeddingData();
  return {
    props: { guest, wedding }
  };
}

export default function InvitePage({ guest, wedding }) {
  return (
    <div>
      <h1>Undangan Pernikahan</h1>
      <h2>{wedding.coupleNames}</h2>
      <h3>Kepada Yth. {guest.name}</h3>
      {/* komponen lainnya: countdown, detail, galeri, lokasi, form RSVP */}
    </div>
  );
}
