import { BrowserRouter, Routes, Route } from "react-router";
import SigninView from "./views/SigninView";
import SignupView from "./views/SignupView";
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import ApplicationLayout from "./layouts/ApplicationLayout";
import LinkStackView from "./views/LinkStackView";
import ProfileView from "./views/ProfileView";
import HandleView from "./views/HandleView";
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticationLayout />}>
          <Route path="/auth/signup" element={<SignupView />} />
          <Route path="/auth/login" element={<SigninView />} />
        </Route>

        <Route path="/admin" element={<ApplicationLayout />}>
          <Route index={true} element={<LinkStackView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>

        <Route path="/:handle" element={<AuthenticationLayout />}>
          <Route index={true} element={<HandleView />} />
        </Route>

        <Route path="/" element={<HomeView />} />

        <Route path="/404" element={<AuthenticationLayout />}>
          <Route index={true} element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
