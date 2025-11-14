

import { Params } from "../../[photoId]/page";
import { wonders } from "../../wonders";
import { notFound } from "next/navigation";
import Modal from "../../_components/Modal";
import Card from "../../_components/Card";
export default async function ModalPage({ params }: Params) {
  const photoId = (await params).photoId;
  const wonder = wonders.find((wonder) => wonder.id == photoId);
  if (!wonder) {
    notFound();
  }
  return (

      <Modal>
        <Card wonder={wonder} />
      </Modal>
  );
}
