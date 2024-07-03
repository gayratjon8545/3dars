import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("todos");
  return (
    <div className="site-container">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome Home !</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              desis? d officia ipsum porro distinctio, veritatis quis excepturi
              delectus sunt tenetur unde vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
