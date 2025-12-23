"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { NavbarButton } from "./resizable-navbar";

type Props = {
  className?: string;
  onClick?: () => void;
};

export function BookCallButton({ className, onClick }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#f4c406" },
          dark: { "cal-brand": "#faea08" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <NavbarButton
      as="button" // ✅ correct polymorphic usage
      type="button"
      variant="primary"
      className={className}
      onClick={onClick}
      data-cal-namespace="30min"
      data-cal-link="nishanthan-krishnarajah-s6anw2/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      Book a call
    </NavbarButton>
  );
}
