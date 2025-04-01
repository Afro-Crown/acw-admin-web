/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timestamp } from "firebase/firestore";

import { UsersEntity } from "@/common/entities/users";

export const userMapper = (apiData: any): UsersEntity => {
  return {
    id: apiData.uid,
    salonName: apiData.salonName,
    email: apiData.email,
    address: apiData.address,
    neighboard: apiData.neighboard,
    complement: apiData.complement,
    number: apiData.number,
    city: apiData.city,
    zipCode: apiData.zipCode,
    state: apiData.state,
    cnpj: apiData.cnpj,
    phone: apiData.phone,
    ownerName: apiData.ownerName,
    image: apiData.image,
    banner: apiData.banner,
    isOpen: apiData.isOpen,
    createdAt: new Timestamp(
      apiData.createdAt.seconds,
      apiData.createdAt.nanoseconds
    ).toDate(),
    updatedAt: apiData.updatedAt
      ? new Timestamp(
          apiData.updatedAt.seconds,
          apiData.updatedAt.nanoseconds
        ).toDate()
      : undefined,
    isActive: apiData.isActive,
    comments: apiData.comments,
    staff: apiData.staff,
    services: apiData.services,
    inAnalising: apiData.inAnalising,
    schedules: apiData.schedules
  };
};
