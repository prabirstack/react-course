import Card from "./components/Card";
import user1Img from "./assets/user1.jpg"
import user2Img from "./assets/user2.jpg"
import user3Img from "./assets/user3.jpg"
import user4Img from "./assets/user4.jpg"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 max-w-2xl mx-auto">
      <Card imgSrc={user1Img} message="Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny." name="Sarah Dayan" description="Staff Engineer, Algolia" />
           <Card imgSrc={user2Img} message="Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny." name="Sarah Dayan" description="Staff Engineer, Algolia" />
      <Card imgSrc={user3Img} message="Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny." name="Sarah Dayan" description="Staff Engineer, Algolia" />
      <Card imgSrc={user4Img} message="Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny." name="Sarah Dayan" description="Staff Engineer, Algolia" />
      
    </div>
  );
}
export default App;
