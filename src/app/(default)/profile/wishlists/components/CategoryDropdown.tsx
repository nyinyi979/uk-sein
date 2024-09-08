import { motion } from "framer-motion";
import CategoryFilter from "./CategoryFilter";

export default function CategoryDropdown({
  categories,
  category,
  updateCategory,
}: {
  categories: string[];
  category: string;
  updateCategory: (cat: string) => void;
}) {
  return (
    <motion.div
      animate={{ translateY: [10, 0], opacity: [0, 1] }}
      exit={{
        translateY: 100,
        opacity: 0,
        transition: {
          stiffness: 19.75,
          mass: 1,
          damping: 6.67,
        },
      }}
      transition={{
        stiffness: 19.75,
        mass: 1,
        damping: 6.67,
      }}
      className="lg:hidden w-[200px] absolute mt-5 right-0 p-2.5 rounded-[15px] bg-white shadow-dropdown z-[100]"
    >
      <CategoryFilter
        categories={categories}
        category={category}
        updateCategory={updateCategory}
      />
    </motion.div>
  );
}
