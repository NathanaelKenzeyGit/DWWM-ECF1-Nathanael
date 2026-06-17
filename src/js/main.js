const afficherCards = (async) => {
    const response = fetch("data/spectacles.json");
    const data = response.json();
    console.log(data[0]);
};
