import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReview } from '../features/userSlice';
import { useGetUserByIdQuery } from '../features/authApi';
import { useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from "react-toastify";




const Reviews = (props) => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.userInfo)
  const { reviews } = useSelector((store) => store.userInfo)
  console.log(reviews)

  const { data, isLoading } = useGetUserByIdQuery(user?.access_token)
  const fullName = data?.name || '';

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const formik = useFormik({
    initialValues: {
      review_id: props.data_id,
      username: '',
      comment: '',
      date: date,
      id: nanoid()
    },
    onSubmit: (val, { resetForm }) => {
      if (user) {
        dispatch(setReview(val));
        resetForm();
      } else {
        nav('/user_login'); // Redirect to the login page if the user is not logged in
      }
    }
  })

  useEffect(() => {
    formik.setFieldValue('username', fullName || '');
  }, [fullName]);

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" name="comment" rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..." required
              onChange={formik.handleChange}
              value={formik.values.comment}
            ></textarea>
          </div>
          <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#f26522] rounded-lg border-none">
            Post comment
          </button>
        </form>
        {
          reviews.map((review) => {
            if (props.data_id === review.review_id) {
              return <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900" key={review.id}>
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough" />{review.username}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400"><time>{review.date}</time></p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{review.comment}</p>
              </article>
            }
          })
        }
      </div>
    </section>
  );
};

export default Reviews;
