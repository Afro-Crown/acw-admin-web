// "use client";

// import useAuth from "@/resources/auth/auth-hook";
// import useUser from "@/resources/user/user-hook";
// import Button from "@/shared/ui/button";
// import FormButton from "@/shared/ui/form-button";
// import FormErrorLabel from "@/shared/ui/form-error-label";
// import { dateToString } from "@/utils/date-utils";
// import formSchemas from "@/utils/form-schemas";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const fields = formSchemas("pt");
// const schemaUpdatePassword = z.object({
//   password: fields.password
// });

// const schemaUpdateProfile = z.object({
//   name: fields.name,
//   email: fields.email,
//   phone: fields.phone,
//   dob: fields.dob
// });

// type UpdateProfileForm = z.infer<typeof schemaUpdateProfile>;

// type UpdatePasswordForm = z.infer<typeof schemaUpdatePassword>;

// // TODO: complete this page to have all informations about the user and a way to update them
// export default function Profile() {
//   const { user, updatePassword, loading, deleteUser } = useAuth();
//   const userHook = useUser();

//   const updatePasswordForm = useForm<UpdatePasswordForm>({
//     mode: "all",
//     criteriaMode: "all",
//     resolver: zodResolver(schemaUpdatePassword)
//   });

//   const updateProfileForm = useForm<UpdateProfileForm>({
//     mode: "all",
//     criteriaMode: "all",
//     resolver: zodResolver(schemaUpdateProfile),
//     defaultValues: {
//       name: user?.name ?? "",
//       email: user?.email ?? "",
//       phone: user?.phone ?? "",
//       dob: (user?.dob ?? new Date()).toISOString().split("T")[0]
//     }
//   });

//   const handleUpdatePassword = (data: UpdatePasswordForm) => {
//     updatePassword(data.password);
//   };

//   const handleUpdateProfile = (data: UpdateProfileForm) => {
//     userHook.updateUserDoc({ ...data, dob: new Date(data.dob) });
//   };

//   return (
//     <main className="flex flex-col gap-7 py-2">
//       <h1 className="text-3xl font-bold underline">Profile</h1>
//       <h2 className="text-xs text-green-400">
//         {user?.emailVerified && <p>Email verificado</p>}
//       </h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={user?.email ?? ""}
//         readOnly
//       />
//       <h3 className="text-xl font-bold underline">Account Informations</h3>
//       <form
//         className="flex items-center gap-3"
//         onSubmit={updatePasswordForm.handleSubmit(handleUpdatePassword)}
//       >
//         <div>
//           <input
//             {...updatePasswordForm.register("password")}
//             type="password"
//             placeholder="Password"
//           />
//           {updatePasswordForm.formState.errors.password && (
//             <FormErrorLabel>
//               {String(updatePasswordForm.formState.errors.password.message)}
//             </FormErrorLabel>
//           )}
//         </div>
//         <FormButton loading={loading.updatePassword}>
//           Update Password
//         </FormButton>
//       </form>
//       <h3 className="text-xl font-bold underline">Profile Informations</h3>
//       <form
//         className="flex flex-col gap-3"
//         onSubmit={updateProfileForm.handleSubmit(handleUpdateProfile)}
//       >
//         <input
//           {...updateProfileForm.register("name")}
//           type="text"
//           placeholder="Name"
//         />
//         {updateProfileForm.formState.errors.name && (
//           <FormErrorLabel>
//             {String(updateProfileForm.formState.errors.name.message)}
//           </FormErrorLabel>
//         )}
//         <input
//           {...updateProfileForm.register("phone")}
//           type="tel"
//           placeholder="Phone Number"
//         />
//         {updateProfileForm.formState.errors.phone && (
//           <FormErrorLabel>
//             {String(updateProfileForm.formState.errors.phone.message)}
//           </FormErrorLabel>
//         )}
//         <input
//           {...updateProfileForm.register("dob")}
//           type="date"
//           placeholder="Date of Birth"
//         />
//         {updateProfileForm.formState.errors.dob && (
//           <p className="text-xs text-red-600">
//             {String(updateProfileForm.formState.errors.dob.message)}
//           </p>
//         )}
//         <FormButton loading={userHook.loading.updateUserDoc}>
//           Update Profile
//         </FormButton>
//       </form>
//       {/* TODO: create modal to confirm delete account */}
//       <Button
//         onClick={deleteUser}
//         className="bg-red-500 hover:bg-red-700"
//         loading={false}
//       >
//         Delete Account
//       </Button>
//     </main>
//   );
// }

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default ProfilePage;
