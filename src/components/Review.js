import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useGetproductsByIdQuery, useAddProductReviewMutation } from '../features/productApi';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setQuantity } from '../features/userSlice';

const Review = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const { data, isLoading } = useGetproductsByIdQuery(id);
  const [addProductReviewMutation] = useAddProductReviewMutation();
  const dispatch = useDispatch();

  const addProductReview = () => {
    const reviewData = {
      productId: id,
      review: review,
      rating: rating
    };
    // Dispatch the mutation to add the review to the product API
    addProductReviewMutation(reviewData);
    // Reset the review and rating inputs
    setReview('');
    setRating(0);
  };

  const formik = useFormik({
    initialValues: {
      select: 1
    },
    onSubmit: addProductReview
  });


  return (
    <div>
      <div>
        <h3>Add Review</h3>
        <textarea
          rows="4"
          cols="50"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit" onClick={formik.handleSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  )
}

export default Review