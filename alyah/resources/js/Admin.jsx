import React, { useState, useEffect } from 'react';

import '../css/Admin.css';

function Admin() {
  const [content, setContent] = useState({
    title: '𝑨𝒍𝒚𝒂𝒉 𝑺𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝑺𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔!',
    author: 'Henok Alelgn',
    date: 'July 7, 2021',
    body: '🌟 Introducing Alyah Software: Empowering Innovation, Elevating Businesses!',
    sections: [
      { category: 'APPS', description: 'We Design and develop different Apps...' },
      { category: 'GAMES', description: 'Software installation and maintenance Games...' },
      { category: 'WEBSITES', description: 'Prepare business Websites and proposal...' },
      { category: 'PROJECTS', description: 'Develop and consult graduation projects...' },
    ],
  });

  const [formInput, setFormInput] = useState({
    category: 'APPS',
    description: '',
  });

  const [isEditingSection, setIsEditingSection] = useState(false);
  const [editSectionIndex, setEditSectionIndex] = useState(null);
  const [isEditingContent, setIsEditingContent] = useState(false);

  // State for reviews
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState({
    image: '',
    title: '',
    category: 'APPS',
    description: '',
    author: '',
    date: '',
    imageFile: null,
  });
  const [isEditingReview, setIsEditingReview] = useState(false);
  const [editReviewIndex, setEditReviewIndex] = useState(null);

  // State for subscribers
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(true);
  const [error, setError] = useState(null);

  // Error states
  const [formErrors, setFormErrors] = useState({});
  const [reviewErrors, setReviewErrors] = useState({});

  

  // Fetch reviews and subscribers when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/emails');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSubscribers(data.map(subscriber => ({
          ...subscriber,
          status: 'Pending',  // Default status for new subscribers
        })));
      } catch (error) {
        setError(`Failed to fetch subscribers: ${error.message}`);
      } finally {
        setLoadingSubscribers(false);
      }
    };

    const loadAdmins = async () => {
      try {
        const response = await getAdmins();
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchReviews();
    fetchSubscribers();
    loadAdmins();
  }, []);

  const handleContentChange = (field, value) => {
    setContent({ ...content, [field]: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewInput({ ...reviewInput, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setReviewInput({ ...reviewInput, imageFile: file });
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setReviewInput({ ...reviewInput, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateSectionForm = () => {
    const errors = {};
    if (!formInput.category) errors.category = "Category is required.";
    if (!formInput.description) errors.description = "Description is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateReviewForm = () => {
    const errors = {};
    if (!reviewInput.image && !reviewInput.imageFile) errors.image = "Image is required.";
    if (!reviewInput.title) errors.title = "Title is required.";
    if (!reviewInput.category) errors.category = "Category is required.";
    if (!reviewInput.date) errors.date = "Date is required.";
    setReviewErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddOrUpdateSection = () => {
    if (!validateSectionForm()) return;

    if (isEditingSection) {
      const updatedSections = [...content.sections];
      updatedSections[editSectionIndex] = formInput;
      setContent({ ...content, sections: updatedSections });
      setIsEditingSection(false);
      setEditSectionIndex(null);
    } else {
      setContent({
        ...content,
        sections: [...content.sections, { category: formInput.category, description: formInput.description }],
      });
    }
    setFormInput({ category: 'APPS', description: '' });
    setFormErrors({});
  };

  const handleDeleteSection = (index) => {
    const updatedSections = content.sections.filter((_, i) => i !== index);
    setContent({ ...content, sections: updatedSections });
  };

  const handleEditSection = (index) => {
    setIsEditingSection(true);
    setEditSectionIndex(index);
    setFormInput(content.sections[index]);
  };

  const handleAddOrUpdateReview = () => {
    if (!validateReviewForm()) return;

    if (isEditingReview) {
      const updatedReviews = [...reviews];
      updatedReviews[editReviewIndex] = reviewInput;
      setReviews(updatedReviews);
      setIsEditingReview(false);
      setEditReviewIndex(null);
    } else {
      setReviews([...reviews, reviewInput]);
    }
    setReviewInput({ image: '', title: '', category: 'APPS', description: '', author: '', date: '', imageFile: null });
    setReviewErrors({});
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  const handleEditReview = (index) => {
    setIsEditingReview(true);
    setEditReviewIndex(index);
    setReviewInput(reviews[index]);
};

  const toggleEditContent = () => {
    setIsEditingContent(!isEditingContent);
  };

  const handleSaveContent = () => {
    const requestBody = {
      title: content.title,
      author: content.author,
      date: content.date,
      body: content.body,
      sections: content.sections,
    };

    fetch('/content/store', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Content saved successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleAcceptSubscriber = async (email) => {
    try {
      const response = await fetch(`/api/subscribers/accept/${email}`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to accept subscriber');
      }
      // Update subscriber status in state
      setSubscribers(subscribers.map(subscriber =>
        subscriber.email === email ? { ...subscriber, status: 'Accepted' } : subscriber
      ));
    } catch (error) {
      console.error('Error accepting subscriber:', error);
    }
  };

  const handleRejectSubscriber = async (email) => {
    try {
      const response = await fetch(`/api/subscribers/reject/${email}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to reject subscriber');
      }
      // Update subscriber status in state
      setSubscribers(subscribers.map(subscriber =>
        subscriber.email === email ? { ...subscriber, status: 'Rejected' } : subscriber
      ));
    } catch (error) {
      console.error('Error rejecting subscriber:', error);
    }
  };

  

  return (
    <div className="admin-container">
      <h1>Admin Panel - Manage Content</h1>

      {/* Content Management Section */}
      {isEditingContent ? (
        <>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={content.title}
              onChange={(e) => handleContentChange('title', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              value={content.author}
              onChange={(e) => handleContentChange('author', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={content.date}
              onChange={(e) => handleContentChange('date', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Body:</label>
            <textarea
              value={content.body}
              onChange={(e) => handleContentChange('body', e.target.value)}
            />
          </div>

          <button onClick={toggleEditContent}>Cancel Edit</button>
          <button onClick={handleSaveContent}>Save Content</button>
        </>
      ) : (
        <>
          <h2>Current Main Article</h2>
          <p><strong>Title:</strong> {content.title}</p>
          <p><strong>Author:</strong> {content.author}</p>
          <p><strong>Date:</strong> {content.date}</p>
          <p><strong>Body:</strong> {content.body}</p>

          <button onClick={toggleEditContent}>Edit Main Article</button>
        </>
      )}

      <h2>{isEditingSection ? 'Edit Section' : 'Add New Section'}</h2>
      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={formInput.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="APPS">APPS</option>
          <option value="GAMES">GAMES</option>
          <option value="WEBSITES">WEBSITES</option>
          <option value="PROJECTS">PROJECTS</option>
        </select>
        {formErrors.category && <p className="error">{formErrors.category}</p>}
      </div>

      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
        {formErrors.description && <p className="error">{formErrors.description}</p>}
      </div>

      <button onClick={handleAddOrUpdateSection}>
        {isEditingSection ? 'Update Section' : 'Add Section'}
      </button>

      <h2>Sections</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.sections.map((section, index) => (
            <tr key={index}>
              <td>{section.category}</td>
              <td>{section.description}</td>
              <td>
                <button onClick={() => handleEditSection(index)}>Edit</button>
                <button onClick={() => handleDeleteSection(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Reviews Management Section */}
      <h2>{isEditingReview ? 'Edit Review' : 'Add New Review'}</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={reviewInput.title}
          onChange={handleReviewChange}
          required
        />
        {reviewErrors.title && <p className="error">{reviewErrors.title}</p>}
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={reviewInput.category}
          onChange={handleReviewChange}
          required
        >
          <option value="APPS">APPS</option>
          <option value="GAMES">GAMES</option>
          <option value="WEBSITES">WEBSITES</option>
          <option value="PROJECTS">PROJECTS</option>
        </select>
        {reviewErrors.category && <p className="error">{reviewErrors.category}</p>}
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={reviewInput.description}
          onChange={handleReviewChange}
          required
        />
        {reviewErrors.description && <p className="error">{reviewErrors.description}</p>}
      </div>

      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={reviewInput.author}
          onChange={handleReviewChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={reviewInput.date}
          onChange={handleReviewChange}
          required
        />
        {reviewErrors.date && <p className="error">{reviewErrors.date}</p>}
      </div>

      <div className="form-group">
        <label>Image :</label>
        <input
          type="file"
          name="imageFile"
          onChange={handleFileChange}
        />
        {reviewErrors.image && <p className="error">{reviewErrors.image}</p>}
        {reviewInput.image && <img src={reviewInput.image} alt="Review" style={{ width: '100px', marginTop: '10px' }} />}
      </div>

      <button onClick={handleAddOrUpdateReview}>
        {isEditingReview ? 'Update Review' : 'Add Review'}
      </button>

      <h2>Reviews</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td><img src={review.image} alt={review.title} style={{ width: '50px' }} /></td>
              <td>{review.title}</td>
              <td>{review.category}</td>
              <td>{review.description}</td>
              <td>{review.author}</td>
              <td>{review.date}</td>
              <td>
                <button onClick={() => handleEditReview(index)}>Edit</button>
                <button onClick={() => handleDeleteReview(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Subscribers Management Section */}
      <h2>Subscribers List</h2>
      {loadingSubscribers ? (
        <p>Loading subscribers...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index}>
                <td>{subscriber.email}</td>
                <td>{subscriber.status}</td>
                <td>
                  <button onClick={() => handleAcceptSubscriber(subscriber.email)}>Accept</button>
                  <button onClick={() => handleRejectSubscriber(subscriber.email)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     
        </div>
    );
};

export default Admin;