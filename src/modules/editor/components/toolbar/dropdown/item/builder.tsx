import { DropdownItemLabel, DropdownItemOptions, DropdownItemType } from ".";

export const buttonDropdownItem = (
  label: string,
  key: string,
  handler: () => void,
  options?: DropdownItemOptions,
): DropdownItemType => {
  return {
    label: (
      <DropdownItemLabel shortcut={options?.shortcut} key={key}>
        {label}
      </DropdownItemLabel>
    ),
    key,
    interact: handler,
    options,
  };
};

export const toggleDropdownItem = (
  label: string,
  key: string,
  state: boolean,
  onChange: (requestedState: boolean) => void,
  options?: DropdownItemOptions,
): DropdownItemType => {
  return {
    label: (
      <DropdownItemLabel shortcut={options?.shortcut} checked={state} key={key}>
        {label}
      </DropdownItemLabel>
    ),
    key,
    interact: () => {
      onChange(!state);
    },
    options,
  };
};

export const dividerDropdownItem = (): DropdownItemType => ({
  type: "divider",
});
