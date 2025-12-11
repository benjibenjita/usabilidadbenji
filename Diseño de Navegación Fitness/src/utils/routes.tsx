import { createBrowserRouter } from "react-router";
import { Home } from "../components/Home";
import { Workouts } from "../components/Workouts";
import { Nutrition } from "../components/Nutrition";
import { Progress } from "../components/Progress";
import { Schedule } from "../components/Schedule";
import { Profile } from "../components/Profile";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "workouts", Component: Workouts },
      { path: "nutrition", Component: Nutrition },
      { path: "progress", Component: Progress },
      { path: "schedule", Component: Schedule },
      { path: "profile", Component: Profile },
    ],
  },
]);
