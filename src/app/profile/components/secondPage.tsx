import PasswordInput from "@/components/input/passwordInput";
import { motion } from "framer-motion";

export default function SecondPage({
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  reNewPassword,
  setReNewPassword,
}: {
  currentPassword: string;
  setCurrentPassword: (pw: string) => void;
  newPassword: string;
  setNewPassword: (pw: string) => void;
  reNewPassword: string;
  setReNewPassword: (pw: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-[50px]"
      layout
    >
      <div className="flex flex-col gap-6 pb-[55px] md:border-b border-grey-100 border-dotted">
        <p className="font-sora font-semibold text-2xl">Personal Information</p>
        <PasswordInput
          displayedLabel="Current Password"
          id="c_password"
          password={currentPassword}
          setPassword={setCurrentPassword}
        />
        <PasswordInput
          displayedLabel="New Password"
          id="new_password"
          password={newPassword}
          setPassword={setNewPassword}
        />
        <PasswordInput
          displayedLabel="Confirm New Password"
          id="re_new_password"
          password={reNewPassword}
          setPassword={setReNewPassword}
        />
      </div>
    </motion.div>
  );
}
