function UserProfile({ name, avatar, bio }) {
  return (
    <header className="profile">
      <img className="profile__avatar" src={avatar} alt={`Аватар: ${name}`} />
      <div>
        <h1 className="profile__name">{name}</h1>
        <p className="profile__bio">{bio}</p>
      </div>
    </header>
  );
}

export default UserProfile;
