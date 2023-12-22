import React from "react";

export default function CustomInput({
  id,
  type,
  accept,
  required,
  value,
  ph,
  afterChange,
  afterHover,
  startIcon,
  endIcon,
  endButtonTxt,
  endButtonIcon
}) {
  return (
    <div className="flex rounded-md border border-slate-300">
      {startIcon && (
        <span className="bg-slate-200 py-0.25 px-0.5 border-r rounded-r-sm border-slate-300">
          {startIcon}
        </span>
      )}
      <input
        id={id}
        type={type}
        required={true}
        placeholder={ph}
        className="flex-grow py-0.5 px-0.38 outline-blue-300 rounded-md"
        value={value}
        onChange={afterChange}
        accept={accept}
      ></input>
      {endIcon && (
        <span className="bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {endIcon}
        </span>
      )}
      {endButtonTxt && (
        <button className="flex items-center gap-2 bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {endButtonIcon}
          <span>{endButtonTxt}</span>
        </button>
      )}
    </div>
  );
}
