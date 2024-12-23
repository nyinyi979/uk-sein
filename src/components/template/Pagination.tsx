export default function Pagination({
  activeIndex,
  totalIndex,
  setIndex,
}: {
  setIndex: (ind: number) => void;
  activeIndex: number;
  totalIndex: number;
}) {
  let arr = [];
  if (totalIndex - activeIndex < 5) {
    for (let i = activeIndex; i < totalIndex; i++) {
      arr.push(i);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      arr.push(activeIndex + i);
    }
  }
  return (
    <div className="flex flex-row md:gap-10 gap-3 ml-auto">
      <button
        onClick={() => setIndex(activeIndex - 1)}
        disabled={activeIndex === 1}
        className={
          activeIndex === 1 ? "pagination-arr-disabled" : "pagination-arr"
        }
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="25"
            cy="25"
            r="24.5"
            transform="matrix(0 -1 -1 0 50 50)"
          />
          <path d="M24.11 17.3367C24.1792 17.4058 24.2341 17.4879 24.2715 17.5782C24.309 17.6686 24.3282 17.7654 24.3282 17.8631C24.3282 17.9609 24.309 18.0577 24.2715 18.1481C24.2341 18.2384 24.1792 18.3204 24.11 18.3895L18.6833 23.8153H33.2559C33.4533 23.8153 33.6425 23.8937 33.782 24.0332C33.9216 24.1728 34 24.362 34 24.5594C34 24.7567 33.9216 24.9459 33.782 25.0855C33.6425 25.225 33.4533 25.3034 33.2559 25.3034H18.6833L24.11 30.7292C24.2496 30.8688 24.3281 31.0581 24.3281 31.2556C24.3281 31.453 24.2496 31.6424 24.11 31.782C23.9704 31.9216 23.7811 32 23.5836 32C23.3862 32 23.1969 31.9216 23.0572 31.782L16.361 25.0858C16.2919 25.0167 16.237 24.9346 16.1995 24.8443C16.1621 24.7539 16.1428 24.6571 16.1428 24.5594C16.1428 24.4616 16.1621 24.3648 16.1995 24.2744C16.237 24.1841 16.2919 24.1021 16.361 24.033L23.0572 17.3367C23.1263 17.2676 23.2084 17.2127 23.2987 17.1752C23.389 17.1378 23.4859 17.1185 23.5836 17.1185C23.6814 17.1185 23.7782 17.1378 23.8686 17.1752C23.9589 17.2127 24.0409 17.2676 24.11 17.3367Z" />
        </svg>
      </button>
      <div className="flex flex-row sm:gap-[14px] gap-1">
        {activeIndex > 1 && (
          <button
            onClick={() => setIndex(activeIndex - 1)}
            className="pagination sm:block hidden"
          >
            {activeIndex - 1}
          </button>
        )}
        <button className="active-pagination" disabled>
          {activeIndex}
        </button>
        {activeIndex + 1 < totalIndex && (
          <button
            onClick={() => {
              setIndex(activeIndex + 1);
            }}
            className="pagination"
          >
            {activeIndex + 1}
          </button>
        )}
        {/* {activeIndex === 1 && activeIndex + 2 < totalIndex && (
          <button
            onClick={() => setIndex(activeIndex + 2)}
            className="pagination xl:block hidden"
          >
            {activeIndex + 2}
          </button>
        )} */}
        {totalIndex - activeIndex > 2 && (
          <p className="disabled-pagination ">...</p>
        )}
        {activeIndex !== totalIndex && (
          <button onClick={() => setIndex(totalIndex)} className="pagination">
            {totalIndex}
          </button>
        )}
      </div>
      <button
        onClick={() => setIndex(activeIndex + 1)}
        disabled={activeIndex === totalIndex}
        className={
          activeIndex === totalIndex
            ? "pagination-arr-disabled"
            : "pagination-arr"
        }
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="24.5" transform="rotate(-90 25 25)" />
          <path d="M25.89 17.3367C25.8208 17.4058 25.7659 17.4879 25.7285 17.5782C25.691 17.6686 25.6718 17.7654 25.6718 17.8631C25.6718 17.9609 25.691 18.0577 25.7285 18.1481C25.7659 18.2384 25.8208 18.3204 25.89 18.3895L31.3167 23.8153H16.7441C16.5467 23.8153 16.3575 23.8937 16.218 24.0332C16.0784 24.1728 16 24.362 16 24.5594C16 24.7567 16.0784 24.9459 16.218 25.0855C16.3575 25.225 16.5467 25.3034 16.7441 25.3034H31.3167L25.89 30.7292C25.7504 30.8688 25.6719 31.0581 25.6719 31.2556C25.6719 31.453 25.7504 31.6424 25.89 31.782C26.0296 31.9216 26.2189 32 26.4164 32C26.6138 32 26.8031 31.9216 26.9428 31.782L33.639 25.0858C33.7081 25.0167 33.763 24.9346 33.8005 24.8443C33.8379 24.7539 33.8572 24.6571 33.8572 24.5594C33.8572 24.4616 33.8379 24.3648 33.8005 24.2744C33.763 24.1841 33.7081 24.1021 33.639 24.033L26.9428 17.3367C26.8737 17.2676 26.7916 17.2127 26.7013 17.1752C26.611 17.1378 26.5141 17.1185 26.4164 17.1185C26.3186 17.1185 26.2218 17.1378 26.1314 17.1752C26.0411 17.2127 25.9591 17.2676 25.89 17.3367Z" />
        </svg>
      </button>
    </div>
  );
}
