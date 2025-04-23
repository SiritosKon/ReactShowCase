import { AppRouter } from "./providers/router";
import { LoadingProvider } from "./providers/loading/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <AppRouter />
    </LoadingProvider>
  );
}

export default App;
