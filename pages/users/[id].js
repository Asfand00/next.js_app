import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UserProfile = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch user IDs from API
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  const paths = users.map(user => ({
    params: { id: `${user.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch user data based on ID
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return { props: { user } };
}

export default UserProfile;
