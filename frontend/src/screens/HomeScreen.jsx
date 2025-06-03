import { Hero } from "../components";
import { useAuth } from "../context/authContext";

const HomeScreen = () => {
  const { user } = useAuth();
  if (!user) return <Hero />;
  return (
    <>
      <h1>Hello {user.name}!</h1>
    </>
  );
};

export default HomeScreen;
