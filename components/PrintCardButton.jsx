"use client";

import { Icon } from "./Icon";

export default function PrintCardButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`btn-orange ${className}`}
    >
      <Icon name="print" className="h-5 w-5" />
      Print this card
    </button>
  );
}
