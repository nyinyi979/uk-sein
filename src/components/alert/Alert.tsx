"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export default function Alert({
  children,
  className = "",
  handleClose,
}: {
  children?: React.ReactNode;
  className?: string;
  handleClose: () => void;
}) {
  return (
    <motion.div
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/10 fixed top-0 left-0 w-[100%] h-[100%] z-[20]"
    >
      <motion.div
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className={`w-fit absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white ${className}`}
      >
        {children && children}
      </motion.div>
    </motion.div>
  );
}
export function SampleAlert() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleOpen} className="bg-black text-white p-2">
        OPEN
      </button>
      <AnimatePresence>
        {open && (
          <Alert handleClose={handleClose} className="bg-white p-5">
            Testing
          </Alert>
        )}
      </AnimatePresence>
    </>
  );
}
