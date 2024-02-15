import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Welcome to My Next.js App</h2>
          <p>This is the landing page content.</p>
        </section>
        {/* Add more sections */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
