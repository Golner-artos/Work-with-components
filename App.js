import UserProfile from './components/UserProfile';
import PostList from './components/PostList';
import './App.css';


const user = {
  name: 'Анна Коваль',
  avatar: '/avatar.png',
  bio: 'Фронтенд-разработчица. Люблю React и горные походы.',
};

const posts = [
  {
    id: 1,
    title: 'Первый поход',
    date: '4 октября 2026',
    text: 'Поднялись на хребет до рассвета. В долине лежал туман.',
    image: '/posts/post1.jpg',
  },
  {
    id: 2,
    title: 'Заметки о props',
    date: '18 октября 2026',
    text: 'Props передают данные от родителя к дочернему компоненту.',
    image: '/posts/post2.jpg',
  },
];

function App() {
  return (
    <main className="page">
      <UserProfile name={user.name} avatar={user.avatar} bio={user.bio} />
      <PostList posts={posts} />
    </main>
  );
}

export default App;