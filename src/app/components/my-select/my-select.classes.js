import cn from 'classnames';

export const createClasses = (showDropdown, selected) => {
  const cls = {};
  cls.block = 'my-select';
  cls.root = cn(cls.block, { [`${cls.block}_open`]: showDropdown });
  cls.control = `${cls.block}__control`;
  cls.input = cn(`${cls.block}__input`, {
    [`${cls.block}__input_selected`]: selected,
  });
  cls.loader = `${cls.block}__loader`;
  cls.loading = `${cls.block}__loading`;
  cls.arrow = `${cls.block}__arrow`;
  cls.result = `${cls.block}__result`;
  cls.selectedId = `${cls.block}__selected-id`;
  cls.selected = `${cls.block}__selected`;
  cls.empty = `${cls.block}__empty`;
  cls.dropdown = `${cls.block}__dropdown`;

  return cls;
};
