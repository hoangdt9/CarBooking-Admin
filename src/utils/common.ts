const has = Object.prototype.hasOwnProperty;

export const isEmpty = (prop: any) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};

export function collectOptions(
  option: any,
  uniqueItems: any[] = [],
  seenIds = new Set()
) {
  // Check if the item has already been added based on its ID
  if (!seenIds.has(option.id)) {
    uniqueItems.push(option);
    seenIds.add(option.id);
  }

  // Recursively process each subOption
  if (option.subOption && option.subOption.length > 0) {
    option.subOption.forEach((subOption: any) =>
      collectOptions(subOption, uniqueItems, seenIds)
    );
  }

  return uniqueItems;
}

export const onlyUnique = <T>(array: T[]) => {
  return array.filter((value, index, array) => array.indexOf(value) === index);
};
export const removeEmptyFields = (obj: any) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => !isEmpty(v))
  );
};
export const removeDuplicate = (arr: any[], key?: string) => {
  return [...new Map(arr.map((item) => [item[key || "id"], item])).values()];
};
