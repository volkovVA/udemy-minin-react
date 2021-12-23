import React from "react";

export default function Loader() {
  return (
    <div>
      <div
        className="lds-roller"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0.5rem'
        }}
      >
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}