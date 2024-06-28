import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import TutorialPage from "./pages/TutorialPage";
import HeartRatePage from "./pages/HeartRatePage";
import BreathingPage from "./pages/BreathingPage";
import CaloriesPage from "./pages/CaloriesPage";
import CardioPage from "./pages/CardioPage";
import SleepPage from "./pages/SleepPage";
import AlarmPage from "./pages/AlarmPage";
import SmartPage from "./pages/SmartPage";
import ContactPage from "./pages/ContactUs";
import BlogList from "./pages/BlogList";
import DetailView from "./pages/DetailView";
// import OtpPage from "./components/OtpPage";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/tutorials" exact element={<TutorialPage />} />
              <Route path="/heart-rate" exact element={<HeartRatePage />} />
              <Route path="/breathing" exact element={<BreathingPage />} />
              <Route path="/calories" exact element={<CaloriesPage />} />
              <Route path="/cardio" exact element={<CardioPage />} />
              <Route path="/sleep" exact element={<SleepPage />} />
              <Route path="/alarm" exact element={<AlarmPage />} />
              <Route path="/smart" exact element={<SmartPage />} />
              <Route path="/contact" exact element={<ContactPage />} />
              <Route path="/blogs" exact element={<BlogList />} /> {/* Add this line */}
              <Route path="/detail/:id" element={<DetailView />} />
             
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;







