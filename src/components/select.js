import React from "react";

function Select({ className, value, onChange, data }) {
  const selectRef = React.useRef(); // grab a DOM reference to our `ef-select`

  React.useLayoutEffect(() => {
    const { current } = selectRef;

    const handleChange = (event) => {
      onChange(event.detail.value);
    };

    current.data = data;
    current.value = value;
    current.addEventListener("value-changed", handleChange);

    return () => current.removeEventListener("value-changed", handleChange);
  }, [selectRef, onChange, data, value]);

  return (
    <ef-select ref={selectRef} class={className} value={value}></ef-select>
  );
}

export default Select;
