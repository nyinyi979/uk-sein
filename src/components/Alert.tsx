export default function AlertBox({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      id="popup"
      className={`rounded-[15px] absolute -top-96 left-[50%] translate-x-[-50%] opacity-0 bg-white text-black z-[15] duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

export function showAlert(hidesAfter?: number) {
  const pop_up = document.getElementById("popup")!;
  pop_up.style.opacity = "1";
  pop_up.style.top = "1rem";
  setTimeout(() => {
    pop_up.style.opacity = "0";
    pop_up.style.top = "-24rem";
  }, hidesAfter || 3000);
}
