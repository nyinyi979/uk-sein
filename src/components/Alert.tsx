export function SuccessAlertBox({}) {
  return (
    <div
      id="s_popup"
      className={`rounded-[15px] fixed -top-96 left-[50%] translate-x-[-50%] p-4 opacity-0 border border-green-400 bg-green-200 text-green-900 z-[15] transition-all duration-500 shadow-dropdown`}
    />
  );
}
export function ErrorAlertBox({}) {
  return (
    <div
      id="e_popup"
      className={`rounded-[15px] fixed -top-96 left-[50%] translate-x-[-50%] p-4 opacity-0 border border-red-400 bg-red-200 text-white z-[15] transition-all duration-500 shadow-drawer`}
    />
  );
}
export function showSuccessAlert({ text }: { text: string }) {
  const pop_up = document.getElementById("s_popup")!;
  pop_up.innerText = text;
  pop_up.style.opacity = "1";
  pop_up.style.top = "1rem";
  setTimeout(() => {
    pop_up.style.opacity = "0";
    pop_up.style.top = "-24rem";
  }, 44000);
}
export function showErrorAlert({ text }: { text: string }) {
  const pop_up = document.getElementById("e_popup")!;
  pop_up.innerText = text;
  pop_up.style.opacity = "1";
  pop_up.style.top = "1rem";
  setTimeout(() => {
    pop_up.style.opacity = "0";
    pop_up.style.top = "-24rem";
  }, 4400);
}
