import React from "react";
import {
  filter,
  prodcutFilterWithSet,
  product,
  productFilters,
} from "@/types/type";

export default function useFilters({
  products,
  updateProducts,
}: {
  products: product[];
  updateProducts: (products: product[]) => void;
}) {
  // the filters will be dynamic
  const [filters, setFilters] = React.useState<productFilters>({
    possibleFilters: {
      categories: [
        {
          img_url: "/sampleDiscount.png",
          name: "Chair",
        },
        {
          img_url: "/sampleDiscount.png",
          name: "Baskets",
        },
      ],
      color: ["Black", "Red", "White"],
      material: ["aluminium", "steel"],
      sizes: [],
      pricePerItem: {
        minimum: 10000,
        maximum: 1000000,
      },
    },
    appliedFilters: {
      color: new Set(),
      material: new Set(),
      sizes: new Set(),
      pricePerItem: {
        minimum: 10000,
        maximum: 1000000,
      },
    },
  });
  const [filterJustApplied, setFilterJustApplied] = React.useState(false);
  const filterJustAppliedOff = () => setFilterJustApplied(false);
  // toggle the category filter
  const toggleCategory = (cat: string) => {};
  // toggle the color filter
  const toggleColor = (clr: string) => {
    const appliedFilters = structuredClone(filters.appliedFilters);
    if (appliedFilters.color.has(clr)) {
      appliedFilters.color.delete(clr);
    } else {
      appliedFilters.color.add(clr);
    }
    applyFilter(appliedFilters);
    setFilters({ ...filters, appliedFilters: { ...appliedFilters } });
  };
  // toggle the material filter
  const toggleMaterial = (mat: string) => {
    const appliedFilters = { ...filters.appliedFilters };
    if (appliedFilters.material.has(mat)) {
      appliedFilters.material.delete(mat);
    } else {
      appliedFilters.material.add(mat);
    }
    applyFilter(appliedFilters);
    setFilters({ ...filters, appliedFilters: { ...appliedFilters } });
  };
  const toggleSize = (size: string) => {
    const appliedFilters = { ...filters.appliedFilters };
    if (appliedFilters.color.has(size)) {
      appliedFilters.color.delete(size);
    } else {
      appliedFilters.color.add(size);
    }
    setFilters({ ...filters, appliedFilters: { ...appliedFilters } });
  };
  // possible maximum, possible minimum, and applied minimum to calculate percent and map it real values
  let pos_minimum = filters.possibleFilters.pricePerItem.minimum;
  let pos_maximum = filters.possibleFilters.pricePerItem.maximum;
  let app_minimum = filters.appliedFilters.pricePerItem.minimum;
  let app_maximum = filters.appliedFilters.pricePerItem.maximum;
  let range = pos_maximum - pos_minimum;
  // minimum percent and maximum percent state
  // formula to get percent between a range is (target-minimum)/range * 100
  let [minimumPercent, setMinimumPercent] = React.useState(
    ((app_minimum - pos_minimum) / range) * 100,
  );
  let [maximumPercent, setMaximumPercent] = React.useState(
    ((pos_maximum - app_minimum) / range) * 100,
  );

  const setMinimumInPercent = (min: string) => {
    // if the minimum is larger than maximum percent it will stop the operation
    if (Number(min) > maximumPercent) {
      setMinimumPercent(maximumPercent);
      return;
    }
    const newAppliedFilters = { ...filters.appliedFilters };
    newAppliedFilters.pricePerItem.minimum =
      pos_minimum + pos_minimum * Number(min);
    setMinimumPercent(Number(min));
    setFilters({ ...filters, appliedFilters: newAppliedFilters });
    // applyFilter(newAppliedFilters);
  };
  const setMaximumInPercent = (max: string) => {
    // if the maximum is lower than the minimum percent it will stop the operation
    if (Number(max) < minimumPercent) {
      setMaximumPercent(minimumPercent);
      return;
    }
    const newAppliedFilters = { ...filters.appliedFilters };
    newAppliedFilters.pricePerItem.maximum =
      pos_minimum + pos_minimum * Number(max);
    setMaximumPercent(Number(max));
    setFilters({ ...filters, appliedFilters: newAppliedFilters });
    // applyFilter(newAppliedFilters);
  };
  // this is to set minimum value from direct input
  const setMinimum = (min: string) => {
    const newAppliedFilters = { ...filters.appliedFilters };
    // if the input value of minimum is larger than the set maximum, it will just set the current maximum value
    if (Number(min) > app_maximum) {
      newAppliedFilters.pricePerItem.minimum = app_maximum;
      setMinimumPercent(Number(min));
    } else {
      newAppliedFilters.pricePerItem.minimum = Number(min);
      setMinimumPercent(((Number(min) - pos_minimum) / range) * 100);
    }
    setFilters({ ...filters, appliedFilters: newAppliedFilters });
    // applyFilter(newAppliedFilters);
  };
  // this is to set maximum value from direct input
  const setMaximum = (max: string) => {
    const newAppliedFilters = { ...filters.appliedFilters };
    // if the input value of maximum is lower than set minimum, it will just set the current minimum value
    if (Number(max) < app_minimum) {
      newAppliedFilters.pricePerItem.minimum = app_maximum;
      setMaximumPercent(minimumPercent);
    } else {
      newAppliedFilters.pricePerItem.maximum = Number(max);
      setMaximumPercent(((Number(max) - pos_minimum) / range) * 100);
    }
    setFilters({ ...filters, appliedFilters: newAppliedFilters });
    // applyFilter(newAppliedFilters);
  };

  // this will apply the filters to make changes to the product
  const applyFilter = (appliedFilters: prodcutFilterWithSet) => {
    setFilterJustApplied(true);
    const { color, material, pricePerItem, sizes } = appliedFilters;
    // if the conditions are just the start conidtions, it will reset all the filtering
    if (
      color.size === 0 &&
      material.size === 0 &&
      pricePerItem.maximum === filters.possibleFilters.pricePerItem.maximum &&
      pricePerItem.minimum === filters.possibleFilters.pricePerItem.minimum
    ) {
      // updateFilteredProducts(products);
      return;
    }
    // clone the products
    const newProducts = structuredClone(products);
    for (let i = 0; i < newProducts.length; i++) {
      const product = newProducts[i];
      if (color.has(product.color)) continue;
      if (sizes.has(product.size)) continue;
      if (material.has(product.material)) continue;
      if (
        product.price >= pricePerItem.minimum &&
        product.price <= pricePerItem.maximum
      )
        continue;
      product.id = "";
    }
    // filter the products by checking the item ID
    const newFilteredProducts = newProducts.filter((p) => p.id != "");
    // updateFilteredProducts(newFilteredProducts);
  };
  // clear all the filters
  const resetFilter = () => {
    setFilters({
      ...filters,
      appliedFilters: {
        color: new Set(),
        material: new Set(),
        sizes: new Set(),
        pricePerItem: {
          minimum: filters.possibleFilters.pricePerItem.minimum,
          maximum: filters.possibleFilters.pricePerItem.maximum,
        },
      },
    });
    // updateFilteredProducts(products);
  };

  // if the filters are applied or not
  const filterApplied =
    filters.appliedFilters.color.size !== 0 ||
    filters.appliedFilters.material.size !== 0 ||
    filters.appliedFilters.pricePerItem.maximum !==
      filters.possibleFilters.pricePerItem.maximum ||
    filters.appliedFilters.pricePerItem.minimum !==
      filters.possibleFilters.pricePerItem.minimum;

  // to render above the products, filter properties are created and passed to the component
  const appliedFilters: filter[] = [
    {
      values: Array.from(filters.appliedFilters.color),
      tag: "Color",
    },
    {
      values: Array.from(filters.appliedFilters.sizes),
      tag: "Size",
    },
    {
      values: Array.from(filters.appliedFilters.material),
      tag: "Material",
    },
  ];
  return {
    toggleCategory,
    toggleColor,
    toggleMaterial,
    toggleSize,
    filterApplied,
    resetFilter,
    appliedFilters,
    filters,
    maximumPercent,
    minimumPercent,
    setMaximumInPercent,
    setMinimumInPercent,
    setMaximum,
    setMinimum,
    filterJustApplied,
    filterJustAppliedOff,
  };
}
