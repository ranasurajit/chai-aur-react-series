const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ranasurajit');
    return response.json();
};

export default githubInfoLoader;
