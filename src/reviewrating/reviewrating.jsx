import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiList from '../services/apiList';
import './reviewrating.css';
import { Star, Share } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

export function ReviewRatings() {

    const [rating, setRating] = useState(0); // Initialize rating state with default value 0
    const [review, setReview] = useState('');
    const [submittedReviews, setSubmittedReviews] = useState([]);
    const [username, setUsername] = useState('');
    const [editReviewId, setEditReviewId] = useState(null); // State to store the ID of the review being edited
    const [filterOption, setFilterOption] = useState('all'); // State for filtering option
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [isWritingReview, setIsWritingReview] = useState(false);
    const location = useLocation(); 

    const queryParams = new URLSearchParams(location.search);
    const hotelname = queryParams.get('hotelname'); // Get hotelname from query parameters

    useEffect(() => {
        fetchReviews();
        // fetchUsername();
        fetchAverageRating();
        localStorage.removeItem('rating');
    }, []);

    // Fetch reviews associated with the currently logged-in user
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${apiList.reviewRating}?hotelname=${hotelname}`);
            const reviewsWithIds = response.data.map(review => ({ ...review, id: review._id, userId: review.userId })); // Assign MongoDB _id as 'id'
            setSubmittedReviews(reviewsWithIds);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };


    const handleRatingChange = (newRating) => {
        // Update state
        setRating(newRating);
        // Update local storage
        localStorage.setItem('rating', newRating.toString());
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmitReview = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            };

            if (editReviewId) {
                // If editing existing review, send PUT request
                await axios.put(`http://localhost:8000/update-rating-review/${editReviewId}`, { rating, review }, config);
                alert('Your review has been updated');
                setEditReviewId(null); // Reset editReviewId state
            } else {
                // If submitting new review, send POST request
                await axios.post('http://localhost:8000/submit-rating-review', { rating, review, hotelname }, config);
                alert('Your review has been submitted');
            }

            fetchReviews();
            setReview('');
            setRating(0);
            fetchAverageRating();
        } catch (error) {
            console.error('Error submitting review:', error);
            alert(error.response?.data.error || 'Failed to submit review');
        }
    };

     const handleDeleteReview = async (id) => {
        try {
          const token = localStorage.getItem('token'); 
          await axios.delete(`http://localhost:8000/delete-rating-review/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setSubmittedReviews(submittedReviews.filter((review) => review._id !== id));
          alert('Review deleted successfully');
        } catch (error) {
          console.error('Error deleting review:', error);
          alert('Failed to delete the review');
        }
      };
      
      const handleEditReview = (reviewId, existingRating, existingReview) => {
        setEditReviewId(reviewId);
        setRating(existingRating);
        setReview(existingReview);
    };


    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    // Filter reviews based on the selected filter option
    const filteredReviews = submittedReviews.filter((review) => {
        switch (filterOption) {
            case 'positive':
                return review.rating >= 3;
            case 'negative':
                return review.rating < 3;
            case 'latest':
                const reviewDate = new Date(review.date);
                const currentDate = new Date();
                const daysDifference = Math.floor((currentDate - reviewDate) / (1000 * 60 * 60 * 24));
                return daysDifference >= 0 && daysDifference <= 5;
            default:
                return true;
        }
    }).sort((a, b) => {
        if (filterOption === 'highToLow') {
            return b.rating - a.rating;
        } else if (filterOption === 'lowToHigh') {
            return a.rating - b.rating;
        } else {
            return 0;
        }
    });

    const fetchAverageRating = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/get-average-rating?hotelname=${hotelname}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const { averageRating, totalReviews } = response.data;
            setAverageRating(averageRating);
            setTotalReviews(totalReviews);
        } catch (error) {
            console.error('Error fetching average rating:', error);
        }
    };


    const toggleWriteReview = () => {
        setIsWritingReview(!isWritingReview);
    };

    const handleReport = async (id) => {
        try {
            const reason = prompt('Enter the reason for report');
            if (reason) {
                await axios.post(`http://localhost:8000/api/review/report/${id}`, { reason });

                setSubmittedReviews(submittedReviews.filter((review) => review._id !== id));
                alert('Review reported successfully');
            }
        } catch (error) {
            console.error('Error reporting review:', error);
        }
    };



    return (
        <div>

            <br />
            <div className='marginstart'>


                <br></br>
                <div>
                    <div>
                        <h2 style={{ fontVariant: '', fontSize: '25px' }}> Reviews & Rating</h2>
                        <div style={{ marginTop: '20px' }}>
                            {averageRating !== null && (
                                <span style={{ marginLeft: 'auto' }}>
                                    <span style={{ fontSize: '20px', color: "white", backgroundColor: 'green', padding: '9px', borderRadius: '7px', marginLeft: 'auto' }}>
                                        {averageRating.toFixed(1)}
                                    </span>
                                    <span className='saiteja'> &nbsp;
                                        <span style={{ position: 'absolute', top: 90, fontSize: '16px', color: 'black' }}><strong>{totalReviews} Ratings</strong>   </span>
                                        <span style={{ position: 'absolute', top: 110, fontVariant: 'common-ligatures' }}>Rating index based on {totalReviews} ratings across the web</span>
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>


                    <br></br>
                    <label className='colors'> <strong>Start your Rating </strong></label>
                    <div className="stars-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                style={{
                                    color: star <= rating ? 'gold' : 'gray',
                                    cursor: 'pointer'

                                }}
                                onClick={() => handleRatingChange(star)}
                            >
                                <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '40px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;


                            </span>
                        ))}
                    </div>


                    <br></br>
                    {isWritingReview ? (
                        <div>
                            <label>Write a review</label>
                            <br></br>
                            <textarea
                                value={review}
                                onChange={handleReviewChange}
                                rows={4}
                                cols={30}
                                placeholder="Write your review here..."
                            />
                            <br />
                            <button onClick={handleSubmitReview}>{editReviewId ? 'Update' : 'Submit'}</button>
                        </div>
                    ) : (
                        <div className='color'>
                            <button className='color' onClick={toggleWriteReview}>Write a Review</button> &nbsp;&nbsp;&nbsp;

                            <button className='color' ><Share size={10} style={{ marginRight: '5px' }} />Share</button>
                        </div>
                    )}
                    <br />

                    <br></br>
                    <div>
                        <label> <strong>Filter </strong></label>
                        <select value={filterOption} onChange={handleFilterChange}>
                            <option value="all">All</option>
                            <option value="positive">Positive</option>
                            <option value="negative">Negative</option>
                            <option value="highToLow">High to Low</option>
                            <option value="lowToHigh">Low to High</option>
                            {/* <option value="latest">Latest</option> */}
                        </select>
                    </div>

                    <br></br>
                    {filteredReviews.length > 0 && (
                        <div>
                            {/* <h3>Total Reviews:</h3> */}
                            {filteredReviews.map((reviewData, index) => (
                                <div key={index}>
                                    {/* Display the username */}
                                    <p style={{ fontWeight: 'bold', color: 'black' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>&nbsp;{reviewData.userName}</p>
                                    {reviewData.rating > 0 && (
                                        <p>
                                            Rating: {' '}
                                            {[...Array(reviewData.rating)].map((_, i) => (
                                                <span key={i} style={{ color: 'gold' }}>★</span>
                                            ))}
                                        </p>
                                    )}

                                    {reviewData.review && <p>Review: {reviewData.review}</p>}
                                    {/* Edit and delete buttons/icons */}
                                     <button className="edit-but" onClick={() => handleEditReview(reviewData._id, reviewData.rating, reviewData.review)}>Edit</button> &nbsp;
                                    <button className="delete-but" onClick={() => handleDeleteReview(reviewData._id)}>Delete</button> &nbsp;
                                    <button className="report-but" onClick={() => handleReport(reviewData._id)}>Report</button>
                                    <hr style={{ border: '1px solid gray', margin: '20px 0' }} />

                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
