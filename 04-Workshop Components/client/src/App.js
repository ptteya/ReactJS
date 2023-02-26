import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/Search/Search";
import { UserSection } from "./components/UserSection.js/UserSection";
import './App.css';

function App() {
    return (
        <div>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserSection />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
