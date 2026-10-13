import Ionicons from "@expo/vector-icons/Ionicons";
import { msg } from "@lingui/core/macro";

export const HELP_DATA = [
  {
    id: "training",
    group: msg`Training`,
    sections: [
      {
        id: "plate-calculator",
        icon: "calculator-outline",
        title: msg`Plate Calculator`,
        body: msg`See which plates to load.`,
      },
      {
        id: "rest-timer",
        icon: "timer-outline",
        title: msg`Rest Timer`,
        body: {
          lead: msg`The rest timer starts automatically.`,
          steps: [msg`Use the ± buttons.`, msg`Configure it in Settings.`],
          ordered: false,
        },
      },
      {
        id: "plans",
        icon: "calendar-outline",
        title: msg`Plans`,
        body: { lead: msg`Plans are programmes.`, steps: [msg`Tap New Plan.`] },
      },
    ],
  },
];
