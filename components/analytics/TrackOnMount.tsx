"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  event: AnalyticsEvent;
  props?: Record<string, string | number | boolean | undefined>;
};

/** Fires a single analytics event once when this component mounts. */
export default function TrackOnMount({ event, props }: Props) {
  useEffect(() => {
    track(event, props ?? {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
