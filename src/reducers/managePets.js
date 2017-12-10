export let state;

export function managePets(state = {pets: []}, action) { // this is a reducer
  switch (action.type) {
    case "ADD_PET":
      return Object.assign({}, {...state, pets: [...state.pets, action.pet]});
      // {...state, pets: [...state.pets, action.pet]};
    case "REMOVE_PET":
      let filteredPets = state.pets.filter((pet) => pet.id !== action.id);
      return {...state, pets: filteredPets};
      // Object.assign({}, {...state, pets: filteredPets});
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const petNames = state.pets.map(pet => `<li>${pet.name}</li>`);
  const container = document.getElementById('container');
  container.innerHTML = `<ul>${petNames}</ul>`;
  document.innerHTML = container;
}
