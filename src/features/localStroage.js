



export const addUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const addReview = (review) => {
  localStorage.setItem('review', JSON.stringify(review));
}


export const addToCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export const clearCart = () => {
  localStorage.removeItem('cart');
}

export const clearAll = () => {
  const reviewData = getReview(); // Get the review data before clearing all
  localStorage.clear(); // Clear all data from the local storage
  addReview(reviewData); // Restore the review data after clearing
}



export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}

export const getReview = () => {
  const data = localStorage.getItem('review');
  return data === null ? null : JSON.parse(data);
}


export const getCart = () => {
  const data = localStorage.getItem('cart');
  return data === null ? [] : JSON.parse(data);
}