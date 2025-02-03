import { Timestamp } from "firebase/firestore";

import { UserEntity } from "@common/entities/user";

export const userMapper = (apiData: any): UserEntity => {
  return {
    uid: apiData.uid,
    name: apiData.name,
    email: apiData.email,
    phone: apiData.phone,
    dob: new Timestamp(apiData.dob.seconds, apiData.dob.nanoseconds).toDate(),
    role: apiData.role
  };
};
